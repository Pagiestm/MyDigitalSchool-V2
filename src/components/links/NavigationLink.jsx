import {NavLink} from "react-router-dom";
import ChevronRightIcon from "../../assets/icons/chevron-right.svg";

export default function NavigationLink({children, href, onClick, changeOverlay}) {
    return (
        <div className="w-full hover:bg-gray-200 p-3 font-sora text-2xl">
            {href === "/locaux" || href === "/formations" || !href ?
                <button className="w-full flex items-center justify-between"
                        onClick={(event) => changeOverlay(event)}>
                    {children}
                    <img src={ChevronRightIcon}
                         alt="Fléche droite"/>
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