import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Locaux() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNav, setActiveNav] = useState();
console.log(activeNav)

  useEffect(() => {
    setActiveNav(searchParams.get("id"));
  }, [searchParams]);

  const paragraph = () => {
    switch (parseInt(activeNav)) {
      case 1:
        return(
          <>
            <p className="mb-4 text-gray-400">57 rue Pierre Mauroy, 59200, Lille</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Découvrez MyDigitalSchool, l’école des métiers du digital. Notre campus de Lille est situé tout près des gares, en plein centre-ville, avec des locaux entièrement équipés pour l’apprentissage des techniques du web : MacRoom pour les logiciels de création graphique, LearnLab pour le travail collaboratif, parc de PCs disponibles pour le développement web, studio Photo et Vidéo…
            </p>
          </>
        );
      case 2:
        return(
          <>
            <p className="mb-4 text-gray-400">24 avenue Henri Fréville, 59200, Lille</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Après avoir accueilli ses étudiants durant plusieurs années à Bruz sur le Campus de Ker Lann, notre école multimédia de Rennes prend désormais place au cœur de la ville, sur l’Avenue Henri Fréville. A pied, en transports en commun ou en voiture l’accès à l’école est idéal et son emplacement stratégique lui permet de convenir aux étudiants, aux formateurs et aux équipes ! La ville dispose également de nombreuses résidences étudiantes et logements locatifs à travers toute la métropole.
            </p>
          </>
        );
      case 3:
        return(
          <>
            <p className="mb-4 text-gray-400">85 boulevard de Strasbourg, 59200, Lille</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Notre campus est situé en plein cœur du 11ème arrondissement de Paris. Un quartier dynamique, qui propose un cadre de vie agréable et une vie étudiante et culturelle riche. Pour rendre votre expérience digitale immersive et passionnante, l'école offre 1 000 m² d'espaces pédagogiques, un fab lab, une terrasse, un open space et une équipe d'intervenants expérimentés. Toutes les clés pour réussir et vous épanouir tout au long de votre scolarité !
            </p>
          </>
        );
      case 4:
        return(
          <>
            <p className="mb-4 text-gray-400">12 rue Lavoisier, 59700, Marcq-en-Barœul</p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Nos infrastructures sont pensées pour faciliter le travail des étudiants à l’école et leur offrir un espace de vie confortable : Campus câblé en fibre optique, toutes les classNamees sont équipées d'écrans interactifs. De plus, notre école digitale dispose de salles de visioconférence, de mobilier dédié au travail de groupe, de matériel pour la création de contenus photo et vidéo... Le but est de vous offrir une infrastructure similaire à celle que vous retrouverez en entreprise.
            </p>
          </>
        );
    }
  }

    return (
        <>
          <h1>Locaux</h1>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
              <div className="flex mx-auto flex-wrap mb-20">
                {[1,2,3,4].map((e) => {
                  return(
                    <Link key={e} to={`?id=${e}`} className={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${e == activeNav ? "border-blue-aqua text-blue-aqua rounded-t bg-gray-100" : "border-gray-200 hover:text-gray-900 "}`}>
                    CAMPUS {e}
                    </Link>
                  )
                })}
              </div>
              <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-full block mx-auto mb-10 object-cover object-center rounded aspect-video" alt="hero" src={`/src/assets/campus/campus${activeNav}.jpg`}/>
              <div className="flex flex-col text-center w-full">
                <h1 className="text-3xl title-font mb-4 font-semibold text-blue-aqua font-sora">Campus {activeNav}</h1>
                  {paragraph()}
              </div>
            </div>
          </section>
        </>
    );
}