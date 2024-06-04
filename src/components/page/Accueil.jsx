export default function Accueil() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="mx-auto lg:px-8 lg:px-20 flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-wrap mt-auto mb-auto w-full content-start order-2 lg:order-first lg:mb-8">
                        <div className="w-full p-4 px-4 mb-6">
                            <h1 className="text-2xl font-bold font-sora mb-2 mt-4 text-blue-aqua">Bienvenue à l’école multimédia de Lille</h1>
                            <div>Découvrez MyDigitalSchool, l’école des métiers du digital. Notre campus de Lille est situé tout près des gares, en plein centre-ville, avec des locaux entièrement équipés pour l’apprentissage des techniques du web: MacRoom pour les logiciels de création graphique, LearnLab pour le travail collaboratif, parc de PCs disponibles pour le développement web, studio Photo et Vidéo…
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center block p-4 w-1/2 text-laser-lemon">
                            <h2 className="font-medium text-3xl">95%</h2>
                            <p className="text-sm">De taux d’insertion post diplôme</p>
                        </div>
                        <div className="flex flex-col items-center justify-center block p-4 w-1/2 text-laser-lemon">
                            <h2 className="font-medium text-3xl">2200</h2>
                            <p className="text-sm">Entreprises partenaires</p>
                        </div>
                        <div className="flex flex-col items-center justify-center block p-4 w-1/2 text-laser-lemon">
                            <h2 className="font-medium text-3xl">15</h2>
                            <p className="text-sm">Certifications professionnelles</p>
                        </div>
                        <div className="flex flex-col items-center justify-center block p-4 w-1/2 text-laser-lemon">
                            <h2 className="font-medium text-3xl">22</h2>
                            <p className="text-sm">Labels et accréditations</p>
                        </div>
                    </div>
                    <div className="w-full rounded-lg mt-0 lg:mt-auto lg:mb-auto lg:ml-10 order-1 lg:order-last lg:mt-8 lg:mb-8">
                        <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
                    </div>
                </div>
            </section>

            <section class="text-gray-600 body-font">
                <h1 className="text-2xl font-bold font-sora mt-8 mb-14 text-blue-aqua text-center">Formations</h1>
                <div class="container px-5 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex rounded-lg sm:flex-row flex-row">
                                <div class="w-12 h-12 md:w-16 md:h-16 mr-4 md:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg font-semibold font-sora mb-2">Bachelor développeur web</h2>
                                    <p class="leading-relaxed text-base">Le Bachelor développeur web MyDigitalSchool permet un début de spécialisation dans les métiers du développement web. Après deux premières années de socle commun, les étudiants abordent de manière...</p>
                                    <a class="mt-3 bg-blue-aqua text-black py-1 px-4 rounded-full inline-flex items-center">En savoir plus
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-row">
                                <div class="w-12 h-12 md:w-16 md:h-16 mr-4 md:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg font-semibold font-sora mb-2">Bachelor web design</h2>
                                    <p class="leading-relaxed text-base">Le Bachelor développeur web MyDigitalSchool permet un début de spécialisation dans les métiers du développement web. Après deux premières années de socle commun, les étudiants abordent de manière...</p>
                                    <a class="mt-3 bg-blue-aqua text-black py-1 px-4 rounded-full inline-flex items-center">En savoir plus
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-row">
                                <div class="w-12 h-12 md:w-16 md:h-16 mr-4 md:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg font-semibold font-sora mb-2">Bachelor webmarketing</h2>
                                    <p class="leading-relaxed text-base">Le Bachelor développeur web MyDigitalSchool permet un début de spécialisation dans les métiers du développement web. Après deux premières années de socle commun, les étudiants abordent de manière...</p>
                                    <a class="mt-3 bg-blue-aqua text-black py-1 px-4 rounded-full inline-flex items-center">En savoir plus
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 lg:w-1/2 md:w-full">
                            <div class="flex rounded-lg border-gray-200 border-opacity-50 sm:flex-row flex-row">
                                <div class="w-12 h-12 md:w-16 md:h-16 mr-4 md:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-black text-indigo-500 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <div class="flex-grow">
                                    <h2 class="text-gray-900 text-lg font-semibold font-sora mb-2">Bachelor digital</h2>
                                    <p class="leading-relaxed text-base">Le Bachelor développeur web MyDigitalSchool permet un début de spécialisation dans les métiers du développement web. Après deux premières années de socle commun, les étudiants abordent de manière...</p>
                                    <a class="mt-3 bg-blue-aqua text-black py-1 px-4 rounded-full inline-flex items-center">En savoir plus
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
