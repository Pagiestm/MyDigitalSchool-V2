export default function FormationCard({ title, description }) {
    return (
        <div class="p-4 lg:w-1/2 md:w-full">
            <div class="flex rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-row">
                <div class="w-12 h-12 md:w-16 md:h-16 mr-4 md:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div class="flex-grow">
                    <h2 class="text-gray-900 text-lg font-semibold font-sora mb-2">{title}</h2>
                    <p class="leading-relaxed text-base">{description}</p>
                    <a class="mt-3 bg-blue-aqua text-black py-1 px-4 rounded-full inline-flex items-center">En savoir plus
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}