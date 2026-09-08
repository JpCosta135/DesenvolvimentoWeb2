
export function InfoCard({ iconHref, title, description, links }) {
    return (
        <div> 
            <svg className="icon" role="presentation" aria-hidden="true">
                <use href={iconHref}></use>
            </svg>
            <h2>{title}</h2>
            <p>{description}</p>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.iconHref && (
                                <svg className="button-icon" role="presentation" aria-hidden="true">
                                    <use href={link.iconHref}></use>
                                </svg>
                            )}
                            {link.imgSrc && (
                                <img src={link.imgSrc} alt="" className={link.imgClassName} width="18" height="18" />
                            )}
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
            </div>
        );
    }