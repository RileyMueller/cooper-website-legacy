function SocialMediaLinks({ links }) {
    return (
        <div className="social-media-links">
            {links.map((link, index) => (
                <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                >
                    <img src={link.svg}/>
                </a>
            ))}
        </div>
    );
}


export default function Footer({ socialLinks }) {
    return (
        <div className="footer">
            <SocialMediaLinks links={socialLinks} />
        </div>
    );
}