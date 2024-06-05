import {NavLink} from "react-router-dom";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export default function NavigationLink({children, href, onClick, changeOverlay}) {
    return (
        <div className="w-full hover:bg-gray-200 p-3 lg:p-2 font-sora text-2xl lg:text-lg lg:rounded-2xl">
            {href === "/locaux" || href === "/formations" || !href ?
                <button className="w-full flex items-center justify-between lg:gap-8"
                        onClick={(event) => changeOverlay(event)}>
                    <span>{children}</span>
                    <img src={ChevronRightIcon}
                         alt="Fléche droite"
                         className="lg:w-2 block"/>
                </button>
                :
                <NavLink to={href}
                         onClick={onClick}
                         className="w-full flex items-center justify-between">
                    {children}
                </NavLink>
            }
        </div>
    );
}