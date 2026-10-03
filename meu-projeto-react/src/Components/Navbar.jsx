import './ComponentsStyles/Navbar.css'

function Navbar() {
   return ( <nav className="Navbar">

           <div className="logo">
               <h1>Movie Web</h1>
           </div>
           <ul className="menu-links">
               <li ><a href="#home">Home</a></li>
               <li ><a href="#Busca">Busca</a></li>
               <li ><a href="#Favoritos">Favoritos</a></li>
           </ul>

   </nav>

   )


}

export default Navbar;