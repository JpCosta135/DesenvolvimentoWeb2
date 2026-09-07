



export function InfoCard({ title, description, links }) {
    return (
        <div> 
            <svg className="icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#info-icon"></use>
            </svg>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.iconref && (
                                <svg className="button-icon" role="presentation" aria-hidden="true">
                                    <use href={link.iconref}></use>
                                </svg>
                            )}
                            {link.imgsrc && (
                                <img className={link.imgClassName || "logo"} src={link.imgSrc} alt="" />
                            )}
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        );
    }