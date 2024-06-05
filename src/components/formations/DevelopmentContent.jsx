import ImgDevelopment from "../../assets/img/development-illustration.png";
import DevelopmentIcon from "../../assets/icons/development-icon.svg";
import FirstHeader from "../headers/FirstHeader.jsx";
import SecondHeader from "../headers/SecondHeader.jsx";

export default function DesignContent() {
    return (
        <>
            <section className="lg:px-36">
                <div className="w-full">
                    <img src={ImgDevelopment}
                         className="w-full h-[250px] object-cover lg:mt-12"/>
                </div>
                <div className="px-4 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-indigo-500 my-4">
                        <img src={DevelopmentIcon}/>
                    </div>
                    <FirstHeader color="blue-aqua">
                        Développement Web
                    </FirstHeader>
                    <p className="text-center">
                        Les développeurs web sont présents dans divers contextes tels que les entreprises de services
                        numériques (ESN), les agences, les start-ups, les PME et les grandes sociétés. Ils exercent
                        également en tant qu'indépendants, offrant ainsi flexibilité et liberté.
                    </p>
                    <div className="mt-6">
                        <SecondHeader color="laser-lemon">
                            Années 1 & 2 – Cycle web et multimédia
                        </SecondHeader>
                        <p>
                            Formation en socle commun, la formation Cycle Web et Multimédia, permet de découvrir les
                            métiers du digital et définir l'orientation que vous souhaitez prendre pour votre 3ème
                            année. Assimilation des concepts et compétences techniques indispensables pour évoluer par
                            la suite dans cet univers professionnel. Au programme d’études techniques, MyDigitalSchool y
                            associe un bagage de compétences transversales (e-business, marketing, gestion de projet).
                        </p>
                        <p>
                            Le Cycle Web et multimédia est une formation initiale à plein temps en deux ans. Elle permet
                            de professionnaliser l'étudiant dès le début de ses études post bac car elle s'organise
                            autour de deux stages de fin d’année (3 mois par stage) et de 140 heures de travail
                            collaboratif en mode projet. Le mode projet permet d'avoir une vision du travail
                            collaboratif attendu en entreprise.
                        </p>
                    </div>
                    <div className="mt-6">
                        <SecondHeader color="laser-lemon">
                            Année 3 – Bachelor développement web
                        </SecondHeader>
                        <p>
                            Approfondissement de la programmation informatique, des outils et logiciels de développement
                            et mobile et initiation webdesign. Notre Bachelor permet de faire l’acquisition de la
                            méthodologie de travail et de gestion d’un projet, de sa conception, en passant par sa
                            programmation et son développement.
                        </p>
                        <p>v
                            La rentrée s'effectue en septembre et cette année de formation est réalisée en rythme
                            alterné école-entreprise (contrat de professionnalisation, contrat d'apprentissage ou stage
                            longue durée) et permet de valider une certification professionnelle reconnue par l’état de
                            niveau 6. Possibilité d'obtenir une validation totale ou partielle par la validation de
                            blocs de compétences. La formation est accessible pour les salariés via le dispositif de
                            Validation des Acquis de l'Expérience (VAE). En savoir plus
                        </p>
                        <ul className="ps-4 list-disc marker:text-blue-aqua">
                            <li>Titre Concepteur développeur d'application</li>
                            <li>Titre Certifié RNCP par l’Etat de niveau 6 (Bac+3)</li>
                            <li>Taux de réussite promotion 2023 : 74,18%</li>
                            <li>Taux de satisfaction 2022 : 66%</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}