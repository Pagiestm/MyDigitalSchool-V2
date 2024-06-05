import LogoMDS from "../../assets/logos/mydigitalschool.png";
import IconFacebook from "../../assets/icons/icon_facebook.svg";
import IconTwitter from "../../assets/icons/icon_twitter.svg";
import IconInstagram from "../../assets/icons/icon_instagram.svg";
import IconLinkedin from "../../assets/icons/icon_linkedin.svg";

export default function Footer() {
    return (
        <footer className="bg-gray-100 flex flex-col lg:flex-row items-center justify-center px-4 py-6 lg:py-4 mt-6">
            <div className="border-b lg:border-b-0 lg:border-r border-gray-300 w-1/2 flex items-center justify-center lg:w-fit lg:pr-4">
                <img src={LogoMDS}
                     alt="Logo MyDigitalSchool"
                     className="w-24 h-16 object-cover mb-2"/>
            </div>
            <p className="mt-4 mb-3 text-center text-gray-400 lg:flex-1 lg:text-start lg:ps-4">©2024 MyDigitalSchool
                Enseignement supérieur
                privé</p>
            <div className="flex items-center justify-center gap-4">
                <img src={IconFacebook}
                     alt="Icône Facebook"/>
                <img src={IconTwitter}
                     alt="Icône Twitter"/>
                <img src={IconInstagram}
                     alt="Icône Instagram"/>
                <img src={IconLinkedin}
                     alt="Icône Linkedin"/>
            </div>
        </footer>
    );
}