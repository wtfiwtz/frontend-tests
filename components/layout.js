import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className='main-page'>{children}</main>
            <Footer />
        </>
    )
}