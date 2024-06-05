export default function EquipeCard({ image, name, status, description, socials }) {
    return (
        <div className="flex flex-col items-center bg-black-light text-white p-4 lg:rounded-lg mt-8">
            <img src={image} alt={name} className="w-32 h-32 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="text-sm italic mb-2">{status}</p>
            <p className="text-center text-sm mb-4">{description}</p>
            <div className="flex space-x-2">
                {socials.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noreferrer">
                        <img src={social.icon} alt={social.name} className="w-8 h-8 text-red-500" style={{ filter: "invert(1) sepia(1) saturate(5) hue-rotate(180deg)" }} />
                    </a>
                ))}
            </div>
        </div>
    );
}