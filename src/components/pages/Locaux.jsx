import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Locaux() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNav, setActiveNav] = useState(searchParams.get("id"));

    return (
        <>
          <h1>Locaux</h1>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap flex-col">
              <div class="flex mx-auto flex-wrap mb-20">
                {[1,2,3,4].map((e) => {
                  return(
                    <a href={`?id=${e}`} class={`sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none tracking-wider ${e == activeNav ? "border-blue-aqua text-blue-aqua rounded-t bg-gray-100" : "border-gray-200 hover:text-gray-900 "}`}>
                      CAMPUS {e}
                    </a>
                  )
                })}
              </div>
              <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded aspect-video" alt="hero" src={`/src/assets/campus/campus${activeNav}.jpg`}/>
              <div class="flex flex-col text-center w-full">
                <h1 class="text-xl font-medium title-font mb-4 text-gray-900">Campus {activeNav}</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
              </div>
            </div>
          </section>
        </>
    );
}