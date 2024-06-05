export default function FormationCard({title, description, icon, href}) {
    return (
        <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-row">
                <div className="w-12 h-12 md:w-16 md:h-16 mr-4 md:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 flex-shrink-0">
                    <img src={icon}/>
                </div>
                <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg font-semibold font-sora mb-2">{title}</h2>
                    <p className="leading-relaxed text-base line-clamp-4">{description}</p>
                    <a href={`/formations?id=${href}`}
                       className="mt-3 bg-blue-aqua text-black py-1 px-4 rounded-full inline-flex items-center hover:cursor-pointer hover:bg-Cyan">En
                        savoir
                        plus
                        <svg fill="none"
                             stroke="currentColor"
                             strokeLinecap="round"
                             strokeLinejoin="round"
                             strokeWidth="2"
                             className="w-4 h-4 ml-2"
                             viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}