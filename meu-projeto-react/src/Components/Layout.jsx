import Navbar from "./Navbar.jsx";
import "/ComponentsStyles/Layout.css";



function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />

            <main className="Conteudo-Pagina">
                {children}
            </main>



        </div>

    )
}

export default Layout;