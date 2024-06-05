import {useSearchParams} from "react-router-dom";

import ImgDesign from "../../assets/img/design-illustration.jpg";

import DevelopmentIcon from "../../assets/icons/development-icon.svg";
import DesignIcon from "../../assets/icons/design-icon.svg";
import DigitalIcon from "../../assets/icons/marketing-icon.svg";
import MarketingIcon from "../../assets/icons/digital-icon.svg";

export default function Formation() {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("id");

    return (
        <>
            <main className="mt-20 w-full flex flex-col items-center justify-center">
                {id === "design" &&
                    <>
                        <div className="w-full">
                            <img src={ImgDesign}
                                 className="w-full h-[250px] object-cover"/>
                        </div>
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-indigo-500 mt-4">
                            <img src={DesignIcon}/>
                        </div>
                    </>
                }
            </main>
        </>
    )
        ;
}