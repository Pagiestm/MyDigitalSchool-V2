import EquipeCard from "../cards/EquipeCard.jsx";
import IconFacebook from "../../assets/icons/icon_facebook.svg";
import IconTwitter from "../../assets/icons/icon_twitter.svg";
import IconLinkedin from "../../assets/icons/icon_linkedin.svg";

export default function Equipe() {
  const teamMembers = [
    {
      image: "https://img.freepik.com/photos-gratuite/portrait-jeune-femme_23-2148574874.jpg",
      name: "DEFOT Gérard",
      status: "Référent",
      description: "Donec sit amet quam dolor. Vivamus ligula quam, viverra eget mauris quis, hendrerit dapibus ligula. Maecenas accumsan vestibulum massa sed pharetra. Suspendisse vel erat nulla. Maecenas ex magna, commodo ac elit ut, dapibus imperdiet leo.",
      socials: [
        { url: "lien_vers_facebook", icon: IconFacebook },
        { url: "lien_vers_twitter", icon: IconTwitter },
        { url: "lien_vers_linkedin", icon: IconLinkedin },
      ],
    },
    {
      image: "https://img.freepik.com/photos-gratuite/portrait-jeune-femme_23-2148574874.jpg",
      name: "DEFOT Gérard",
      status: "Référent",
      description: "Donec sit amet quam dolor. Vivamus ligula quam, viverra eget mauris quis, hendrerit dapibus ligula. Maecenas accumsan vestibulum massa sed pharetra. Suspendisse vel erat nulla. Maecenas ex magna, commodo ac elit ut, dapibus imperdiet leo.",
      socials: [
        { url: "lien_vers_facebook", icon: IconFacebook },
        { url: "lien_vers_twitter", icon: IconTwitter },
        { url: "lien_vers_linkedin", icon: IconLinkedin },
      ],
    },
    {
      image: "https://img.freepik.com/photos-gratuite/portrait-jeune-femme_23-2148574874.jpg",
      name: "DEFOT Gérard",
      status: "Référent",
      description: "Donec sit amet quam dolor. Vivamus ligula quam, viverra eget mauris quis, hendrerit dapibus ligula. Maecenas accumsan vestibulum massa sed pharetra. Suspendisse vel erat nulla. Maecenas ex magna, commodo ac elit ut, dapibus imperdiet leo.",
      socials: [
        { url: "lien_vers_facebook", icon: IconFacebook },
        { url: "lien_vers_twitter", icon: IconTwitter },
        { url: "lien_vers_linkedin", icon: IconLinkedin },
      ],
    },
  ];

  return (
    <main className="mt-24 md:px-44">
      <h1 className="text-2xl font-bold font-sora mb-4 px-5 text-blue-aqua text-center">Présentation de l’équipe pédagogique</h1>
      <p className="mt-4 md:px-0 px-5 text-center">Nos intervenants sont tous des professionnels experts de la filière, le mode projet et le travail collaboratif sont au cœur de la pédagogie, et les stages et l’alternance occupent une place de choix.</p>
        {teamMembers.map((member, index) => (
          <EquipeCard key={index} {...member} />
        ))}
    </main>
  );
}