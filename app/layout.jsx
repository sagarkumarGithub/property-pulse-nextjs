import "@/assets/styles/globals.css"
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { GlobalProvider } from "@/context/GlobalContext";

export const metadata = {
    title: 'Property Pulse',
    description: 'Find the perfect rental property for you',
    keywords:'rental, property, real estate'
}

const MainLayout = ({children}) => {
    return (
        <AuthProvider>
            <GlobalProvider>
                <html>
                    <body>
                        <Navbar />
                        <main>{children}</main>
                        <Footer />
                        <ToastContainer />
                    </body>
                </html>
            </GlobalProvider>
        </AuthProvider>
    )
}
 
export default MainLayout;