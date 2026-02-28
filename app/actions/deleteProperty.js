"use server";

import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function deleteProperty(propertyId) {
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.userId) {
        throw new Error("User Id is required");
    }

    const {userId} = sessionUser;

    const property = await Property.findById(propertyId).lean();

    if(!property) {
        throw new Error("Property not found");
    }

    //verify ownership
    if(property.owner.toString() !== userId) {
        throw new Error("Unauthorized!");
    }
    
    //extract public ids from image urls
    const publicIds = property.images.map((imageUrl) => {
        const parts = imageUrl.split("/");
        return parts.at(-1).split(".")[0];
    })

    // delete images from cloudinary
    if(publicIds.length > 0) {
        for(let publicId of publicIds){
            await cloudinary.uploader.destroy("propertypulse/" + publicId);
        }
    }

    await Property.deleteOne();

    revalidatePath("/", "layout");
}

export default deleteProperty;