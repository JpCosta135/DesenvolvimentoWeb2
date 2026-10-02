import "/ComponentsStyles/MovieCard.css"


export default function MovieCard({titulo, ano, nota, imagem}) {
    return (
        <div className="MovieCard">
        <img src={imagem} alt={titulo} className="Movie-Poster"/>

        <div className="Movie-Info">
            <h3>{titulo}</h3>

            <div className="Movie-Details">
                <span className="Ano">{ano}</span>
                <span className="Nota">{nota}</span>
            </div>
         </div>
        </div>


)
}