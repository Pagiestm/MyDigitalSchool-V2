import LogoMDS from "../../assets/logos/mydigitalschool.png";
import HamburgerIcon from "../../assets/icons/hamburger-icon.svg";

export default function NavigationBar() {
    return (
        <>
            <header className="flex justify-between items-center px-6 py-2 border-b border-b-gray-300">
                <img src={LogoMDS}
                     alt="Logo MyDigitalSchool"
                     height={100}
                     width={100}
                     className="w-32 h-16 object-cover"/>
                <button>
                    <img src={HamburgerIcon}
                         alt="Menu"
                         className="w-8"/>
                </button>
            </header>
        </>
    );
}