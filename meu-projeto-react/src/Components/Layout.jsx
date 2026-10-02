import Navbar from "./Navbar.jsx";
import "./Layout.css"

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />

            <main className="Conteudo-Pagina">
                {children}
            </main>




        </div>



    )
}