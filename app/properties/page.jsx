import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const PropertiesPage = async () => {

    await connectDB();
    const properties = await Property.find({}).lean();

    return ( 
        <section>
            <div className="container-xl lg:container mx-auto px-4 py-6">
                {
                    properties.length === 0 ? (
                        <p>No Properties Found</p>
                    ) : (
                        <div className="grid grid-col-1 md:grid-cols-3 gap-6">
                            {
                                properties.map(property => (
                                    <PropertyCard key={property.id} property={property} />
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </section>
    );
}
 
export default PropertiesPage;