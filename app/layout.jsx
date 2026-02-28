import "@/assets/styles/globals.css"
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: 'Property Pulse',
    description: 'Find the perfect rental property for you',
    keywords:'rental, property, real estate'
}

const MainLayout = ({children}) => {
    return (
        <AuthProvider>
            <html>
                <body>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <ToastContainer />
                </body>
            </html>
        </AuthProvider>
    )
}
 
export default MainLayout;