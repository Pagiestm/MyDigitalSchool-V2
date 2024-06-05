import LogoMDS from "../../assets/logos/mydigitalschool.png";
import HamburgerIcon from "../../assets/icons/hamburger-icon.svg";
import CancelIcon from "../../assets/icons/cancel-icon.svg";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import NavigationLink from "../links/NavigationLink.jsx";

export default function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [changeOverlayState, setChangeOverlayState] = useState("default"); // default, campus, formations
    const objLinkDefault = [
        {
            name: "Accueil",
            link: "/",
        }, {
            name: "École",
            link: "/ecole",
        }, {
            name: "Équipe",
            link: "/equipe",
        }, {
            name: "Campus",
            link: "/locaux",
        }, {
            name: "Formations",
            link: "/formations",
        },
    ];
    const objLinkCampus = [
        {
            name: "Retour",
            link: undefined,
        }, {
            name: "Campus 1",
            link: "/locaux?id=1",
        }, {
            name: "Campus 2",
            link: "/locaux?id=2",
        }, {
            name: "Campus 3",
            link: "/locaux?id=3",
        }, {
            name: "Campus 4",
            link: "/locaux?id=4",
        },
    ];
    const objLinkFormations = [
        {
            name: "Retour",
            link: undefined,
        }, {
            name: "Développeur Web",
            link: "/formations?id=development",
        }, {
            name: "Web Designer",
            link: "/formations?id=design",
        }, {
            name: "Digital",
            link: "/formations?id=digital",
        }, {
            name: "Web Marketing",
            link: "/formations?id=marketing",
        },
    ];

    function changeOverlay(event) {
        if (event.target.innerText === "Campus") {
            setChangeOverlayState("campus");
        } else if (event.target.innerText === "Formations") {
            setChangeOverlayState("formations");
        } else if (event.target.innerText === "Retour") {
            setChangeOverlayState("default");
        }
    }

    function setOpenModel() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <header className="flex justify-between items-center px-6 py-2 border-b border-b-gray-300 fixed w-full bg-white top-0">
                <NavLink to="/"
                         onClick={() => setIsOpen(false)}>
                    <img src={LogoMDS}
                         alt="Logo MyDigitalSchool"
                         height={100}
                         width={100}
                         className="w-32 h-16 object-cover"/>
                </NavLink>
                <button>
                    <img src={isOpen ? CancelIcon : HamburgerIcon}
                         alt="Menu"
                         className="w-6"
                         onClick={setOpenModel}/>
                </button>
                {isOpen &&
                    <div className="absolute top-full left-0 lg:left-full lg:-translate-x-full bg-white w-full lg:w-fit min-h-svh lg:min-h-fit lg:p-3 lg:border border-gray-200 lg:rounded-3xl">
                        {changeOverlayState === "default" &&
                            <ul className="font-sora">
                                {objLinkDefault.map((object, index) =>
                                    <li key={index}>
                                        <NavigationLink href={object.link}
                                                        onClick={setOpenModel}
                                                        changeOverlay={changeOverlay}>
                                            {object.name}
                                        </NavigationLink>
                                    </li>)}
                            </ul>
                        }
                        {changeOverlayState === "campus" &&
                            <ul className="font-sora">
                                {objLinkCampus.map((object, index) =>
                                    <li key={index}>
                                        <NavigationLink href={object.link}
                                                        onClick={setOpenModel}
                                                        changeOverlay={changeOverlay}>
                                            {object.name}
                                        </NavigationLink>
                                    </li>)}
                            </ul>
                        }
                        {changeOverlayState === "formations" &&
                            <ul className="font-sora">
                                {objLinkFormations.map((object, index) =>
                                    <li key={index}>
                                        <NavigationLink href={object.link}
                                                        onClick={setOpenModel}
                                                        changeOverlay={changeOverlay}>
                                            {object.name}
                                        </NavigationLink>
                                    </li>)}
                            </ul>
                        }
                    </div>
                }
            </header>
        </>
    );
}
