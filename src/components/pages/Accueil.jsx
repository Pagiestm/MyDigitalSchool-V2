import FormationCard from "../cards/FormationCard.jsx";
import StatCard from "../cards/StatCard.jsx";

export default function Accueil() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="mx-auto lg:px-8 lg:px-20 flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-wrap mt-auto mb-auto w-full content-start order-2 lg:order-first lg:mb-8">
                        <div className="w-full p-4 px-4 mb-6">
                            <h1 className="text-2xl font-bold font-sora mb-2 mt-4 text-blue-aqua">Bienvenue à l’école
                                multimédia de Lille</h1>
                            <div>Découvrez MyDigitalSchool, l’école des métiers du digital. Notre campus de Lille est
                                situé tout près des gares, en plein centre-ville, avec des locaux entièrement équipés
                                pour l’apprentissage des techniques du web: MacRoom pour les logiciels de création
                                graphique, LearnLab pour le travail collaboratif, parc de PCs disponibles pour le
                                développement web, studio Photo et Vidéo…
                            </div>
                        </div>
                        <StatCard number="95%"
                                  text="De taux d’insertion post diplôme"/>
                        <StatCard number="2200"
                                  text="Entreprises partenaires"/>
                        <StatCard number="15"
                                  text="Certifications professionnelles"/>
                        <StatCard number="22"
                                  text="Labels et accréditations"/>
                    </div>
                    <div className="w-full rounded-lg mt-0 lg:mt-auto lg:mb-auto lg:ml-10 order-1 lg:order-last lg:mt-8 lg:mb-8">
                        <img className="object-cover object-center w-full h-full"
                             src="https://dummyimage.com/600x300"
                             alt="stats"/>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font">
                <h1 className="text-2xl font-bold font-sora mt-8 mb-14 text-blue-aqua text-center">Formations</h1>
                <div className="container px-5 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                        <FormationCard title="Bachelor web design"
                                       description="Le Bachelor développeur web MyDigitalSchool permet un début de spécialisation dans les métiers du développement web. Après deux premières années de socle commun, les étudiants abordent de manière..."/>
                        <FormationCard title="Bachelor web design"
                                       description="Le Bachelor développeur web MyDigitalSchool permet un début de spécialisation dans les métiers du développement web. Après deux premières années de socle commun, les étudiants abordent de manière..."/>
                        <FormationCard title="Bachelor webmarketing"
                                       description="Le Bachelor développeur web MyDigitalSchool permet un début de spécialisation dans les métiers du développement web. Après deux premières années de socle commun, les étudiants abordent de manière..."/>
                        <FormationCard title="Bachelor digital"
                                       description="Le Bachelor développeur web MyDigitalSchool permet un début de spécialisation dans les métiers du développement web. Après deux premières années de socle commun, les étudiants abordent de manière..."/>
                    </div>
                </div>
            </section>
        </>
    );
}
