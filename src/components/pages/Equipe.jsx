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
    <main className="md:px-44 my-4">
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold font-sora mb-4 px-5 text-blue-aqua text-center">
          Présentation de <br/> l’équipe pédagogique
        </h1>
        <p className="mt-4 md:px-0 px-5 w-2/3 text-center">Nos intervenants sont tous des professionnels experts de la filière, le mode projet et le travail collaboratif sont au cœur de la pédagogie, et les stages et l’alternance occupent une place de choix.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-16 mt-8">
        {teamMembers.map((member, index) => (
          // Théotime tu aurais pu faire l'effort de mettre en anglais, en demandant à copilot comment écrire équipe en anglais. ps c'est team
          <EquipeCard key={index} {...member} />
        ))}
      </div>
    </main>
  );
}