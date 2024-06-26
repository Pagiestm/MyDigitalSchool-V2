import {NavLink} from "react-router-dom";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";
import {useRef, useState} from "react";

export default function NavigationLink({children, href, onClick, changeOverlay}) {
    const [isShadow, setIsShadow] = useState(false);

    return (
        <div className={`w-full min-w-max hover:bg-gray-200 p-3 lg:p-2 font-sora text-2xl lg:text-lg lg:rounded-2xl ${isShadow ? "shadow" : ""}`}>
            {href === "/locaux" || href === "/formations" || !href ?
                <button className="w-full min-w-max flex items-center justify-between lg:gap-4"
                        onClick={(event) => changeOverlay(event)}>
                    <span>{children}</span>
                    <img src={ChevronRightIcon}
                         alt="Fléche droite"
                         className="lg:w-2 block pointer-events-none"/>
                </button>
                :
                <NavLink to={href}
                         onClick={onClick}
                         className="flex items-center justify-between w-full">
                    {children}
                </NavLink>
            }
        </div>
    );
}