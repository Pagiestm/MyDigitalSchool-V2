import ImgMarketing from "../../assets/img/marketing-illustration.avif";
import MarketingIcon from "../../assets/icons/marketing-icon.svg";
import FirstHeader from "../headers/FirstHeader.jsx";
import SecondHeader from "../headers/SecondHeader.jsx";

export default function DesignContent() {
    return (
        <>
            <section className="lg:px-36">
                <div className="w-full">
                    <img src={ImgMarketing}
                         className="w-full h-[250px] object-cover lg:mt-12"/>
                </div>
                <div className="px-4 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-indigo-500 my-4">
                        <img src={MarketingIcon}/>
                    </div>
                    <FirstHeader color="blue-aqua">
                        Web Design
                    </FirstHeader>
                    <p className="text-center">Les entreprises recrutent fortement pour pouvoir répondre à cette
                        évolution des, 50% des entreprises prévoient d'augmenter leurs effectifs en webmarketing d'ici
                        2030.</p>
                    <div className="mt-6">
                        <SecondHeader color="laser-lemon">
                            Années 1 & 2 – Cycle web et multimédia
                        </SecondHeader>
                        <p>
                            Assimilation des concepts et compétences techniques du web mais aussi développement de
                            l’expression orale et écrite pour évoluer dans l’univers professionnel du digital. Au
                            programme d’études techniques, MyDigitalSchool y associe un bagage de compétences
                            transversales (e-business, marketing, gestion de projet).
                        </p>
                        <p>
                            Le Cycle Web et Multimédia est une
                            formation initiale à plein temps de deux ans nourrie de deux stages de fin d’année (3 mois
                            par stage) et 140 heures de travail collaboratif en mode projet.
                        </p>
                    </div>
                    <div className="mt-6">
                        <SecondHeader color="laser-lemon">
                            Année 3 – Bachelor web marketing
                        </SecondHeader>
                        <p>
                            Approfondissement des concepts et outils marketing en ligne, gestion de projet multimédia,
                            développement web et analyse des performances. Ce bachelor forme les étudiants aux
                            différents services et canaux : e-commerce, CRM, étude de la viralité, community management,
                            digital publishing, leur permettant ainsi de disposer d’un panel large de compétences pour
                            mener à bien des projets multimédias. Possibilité d'obtenir une validation totale ou
                            partielle par la validation de blocs de compétences.La formation est accessible pour les
                            salariés via le dispositif de Validation des Acquis de l'Expérience (VAE). En savoir plus
                        </p>
                        <p>
                            La rentrée s'effectue en septembre et cette année de formation du Bachelor Webmarketing &
                            Social Media se fait en alternance école-entreprise (contrat de professionnalisation,
                            contrat d'apprentissage ou stage longue durée) et délivre une certification professionnelle
                            d'état de niveau 6.
                        </p>
                        <ul className="ps-4 list-disc marker:text-blue-aqua">
                            <li>Titre Chargé de communication et webmarketing</li>
                            <li>Titre Certifié RNCP par l’Etat de niveau 6 (Bac+3)</li>
                            <li>Taux de réussite promotion 2023 : 97,46%</li>
                            <li>Taux de satisfaction 2022 : 71%</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}