import './ComponentsStyles/Navbar.css'



export default function Navbar() {
   return ( <nav className="Navbar">

           <div className="logo">
               <h1>MovieSite</h1>
           </div>
           <ul className="menu-links">
               <li ><a href="#home">Home</a></li>
               <li ><a href="#Busca">Busca</a></li>
               <li ><a href="#Favoritos">Favoritos</a></li>
           </ul>

   </nav>

   )


}