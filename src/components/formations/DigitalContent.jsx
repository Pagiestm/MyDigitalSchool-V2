import ImgDigital from "../../assets/img/digital-illustration.webp";
import DigitalIcon from "../../assets/icons/digital-icon.svg";
import FirstHeader from "../headers/FirstHeader.jsx";
import SecondHeader from "../headers/SecondHeader.jsx";

export default function DesignContent() {
    return (
        <>
            <section className="lg:px-36">
                <div className="w-full">
                    <img src={ImgDigital}
                         className="w-full h-[250px] object-cover lg:mt-12"/>
                </div>
                <div className="px-4 flex flex-col items-center justify-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-indigo-500 mb-4 mt-6">
                        <img src={DigitalIcon}/>
                    </div>
                    <FirstHeader color="blue-aqua">
                        Web Digital
                    </FirstHeader>
                    <p className="text-center">Le domaine du digital comporte aussi de nombreuses spécialisations,
                        telles que le développement web, le marketing numérique, l'analyse de données, la cybersécurité,
                        etc. Chaque spécialisation nécessite des compétences spécifiques. Faire une formation bachelor
                        digital assure donc de trouver un emploi facilement et rapidement en sortie d'études.</p>
                    <div className="mt-6">
                        <SecondHeader color="laser-lemon">
                            Années 1 & 2 – Cycle web et multimédia
                        </SecondHeader>
                        <p>
                            Assimilation des concepts et compétences techniques du web mais aussi développement de
                            l’expression orale et écrite pour savoir gérer un projet et rédiger un cahier des
                            charges. Au programme d’études techniques, MyDigitalSchool y associe un bagage de
                            compétences transversales telles que la gestion de projet, le marketing, la vidéo, le
                            développement ou encore le design d’animation.
                        </p>
                        <p>
                            Le Cycle Web et multimédia est une formation initiale à plein temps de deux ans nourrie
                            de deux stages de fin d’année (3 mois par stage) et de 140 heures de travail
                            collaboratif en mode projet.
                        </p>
                    </div>
                    <div className="mt-6">
                        <SecondHeader color="laser-lemon">
                            Année 3 – Bachelor web digital
                        </SecondHeader>
                        <p>
                            Approfondissement des techniques de création graphique, ergonomie, optimisation
                            multisupport et gestion de projet web. Le Bachelor Webdesign forme les étudiants à la
                            communication visuelle, le maquettage, la vidéo et le design graphique, leur permettant
                            ainsi de disposer d’un panel large de compétences pour mener à bien des projets
                            multimedia.
                        </p>
                        <p>
                            La rentrée s'effectue en septembre et la dernière année du Bachelor Webdesign se fait en
                            rythme alterné école-entreprise (contrat de professionnalisation, contrat
                            d'apprentissage ou stage longue durée). Possibilité d'obtenir une validation totale ou
                            partielle par la validation de blocs de compétences. La formation est accessible pour
                            les salariés via le dispositif de Validation des Acquis de l'Expérience (VAE).
                        </p>
                        <ul className="ps-4 list-disc marker:text-blue-aqua">
                            <li>Titre Concepteur webdesigner</li>
                            <li>Titre Certifié RNCP par l’Etat de niveau 6 (Bac+3)</li>
                            <li>Taux de réussite promotion 2023 : 92,68%</li>
                            <li>Taux de satisfaction 2022 : 64%</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}