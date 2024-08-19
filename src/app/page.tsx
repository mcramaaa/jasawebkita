"use client";

import Hero from "@/components/landing/Hero";
import Navbar from "@/components/layout/Navbar";
import { useSection } from "@/zustand/useNav";
import { useEffect } from "react";

export default function Home() {
  const { section } = useSection();

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (id === "contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToSection(section);
  }, [section]);
  return (
    <div>
      <div
        id="home"
        className="bg-gradient-to-br from-brand-dark to-brand start-0"
      >
        <Navbar />
        <Hero />
      </div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius neque
      cupiditate culpa officiis commodi laudantium, tenetur ipsam facere!
      Itaque, laboriosam. Blanditiis nobis, modi molestias repellat delectus id
      vel eius nesciunt laborum facere cum corporis laudantium voluptatem
      ratione deleniti tempora beatae, neque debitis vero minima, quasi ducimus
      odio. Quae, eveniet dicta. Nobis dolorem nisi accusamus recusandae
      distinctio voluptate, laborum, veniam deleniti eaque sint culpa. Illo
      aperiam, eaque repudiandae aliquid dolores dolore at, minima cumque et
      fugiat, sapiente laudantium quidem accusantium facilis. Quod, eveniet
      placeat. Corrupti dolores minus nesciunt fugiat quaerat temporibus placeat
      reprehenderit eos corporis veritatis, excepturi aperiam natus quos et
      possimus aliquid? Eligendi nisi quasi laboriosam tempora reprehenderit id
      dolores! Velit sed voluptatum magni architecto, eum quod! Similique
      aperiam adipisci sapiente cumque sequi, ratione saepe doloribus repellat
      itaque, quae nesciunt vitae? Atque vitae doloremque esse perspiciatis
      dignissimos, itaque a autem? Sed, voluptatibus deleniti. Itaque impedit
      harum possimus, deserunt alias voluptatum nihil voluptatibus libero a
      quasi ducimus similique ad, magnam ipsam mollitia provident. Eius rerum
      eaque voluptatum reiciendis ex consequuntur accusantium, in ut quam
      adipisci numquam ad aperiam cumque soluta nam debitis mollitia velit ea
      voluptatem ipsa alias obcaecati. Velit quidem culpa cupiditate optio
      consectetur quasi assumenda atque quibusdam ad quisquam! Lorem ipsum
      dolor, sit amet consectetur adipisicing elit. Eius neque cupiditate culpa
      officiis commodi laudantium, tenetur ipsam facere! Itaque, laboriosam.
      Blanditiis nobis, modi molestias repellat delectus id vel eius nesciunt
      laborum facere cum corporis laudantium voluptatem ratione deleniti tempora
      beatae, neque debitis vero minima, quasi ducimus odio. Quae, eveniet
      dicta. Nobis dolorem nisi accusamus recusandae distinctio voluptate,
      laborum, veniam deleniti eaque sint culpa. Illo aperiam, eaque repudiandae
      aliquid dolores dolore at, minima cumque et fugiat, sapiente laudantium
      quidem accusantium facilis. Quod, eveniet placeat. Corrupti dolores minus
      nesciunt fugiat quaerat temporibus placeat reprehenderit eos corporis
      veritatis, excepturi aperiam natus quos et possimus aliquid? Eligendi nisi
      quasi laboriosam tempora reprehenderit id dolores! Velit sed voluptatum
      magni architecto, eum quod! Similique aperiam adipisci sapiente cumque
      sequi, ratione saepe doloribus repellat itaque, quae nesciunt vitae? Atque
      vitae doloremque esse perspiciatis dignissimos, itaque a autem? Sed,
      voluptatibus deleniti. Itaque impedit harum possimus, deserunt alias
      voluptatum nihil voluptatibus libero a quasi ducimus similique ad, magnam
      ipsam mollitia provident. Eius rerum eaque voluptatum reiciendis ex
      consequuntur accusantium, in ut quam adipisci numquam ad aperiam cumque
      soluta nam debitis mollitia velit ea voluptatem ipsa alias obcaecati.
      Velit quidem culpa cupiditate optio consectetur quasi assumenda atque
      quibusdam ad quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing
      elit. Eius neque cupiditate culpa officiis commodi laudantium, tenetur
      ipsam facere! Itaque, laboriosam. Blanditiis nobis, modi molestias
      repellat delectus id vel eius nesciunt laborum facere cum corporis
      laudantium voluptatem ratione deleniti tempora beatae, neque debitis vero
      minima, quasi ducimus odio. Quae, eveniet dicta. Nobis dolorem nisi
      accusamus recusandae distinctio voluptate, laborum, veniam deleniti eaque
      sint culpa. Illo aperiam, eaque repudiandae aliquid dolores dolore at,
      minima cumque et fugiat, sapiente laudantium quidem accusantium facilis.
      Quod, eveniet placeat. Corrupti dolores minus nesciunt fugiat quaerat
      temporibus placeat reprehenderit eos corporis veritatis, excepturi aperiam
      natus quos et possimus aliquid? Eligendi nisi quasi laboriosam tempora
      reprehenderit id dolores! Velit sed voluptatum magni architecto, eum quod!
      Similique aperiam adipisci sapiente cumque sequi, ratione saepe doloribus
      repellat itaque, quae nesciunt vitae? Atque vitae doloremque esse
      perspiciatis dignissimos, itaque a autem? Sed, voluptatibus deleniti.
      Itaque impedit harum possimus, deserunt alias voluptatum nihil
      voluptatibus libero a quasi ducimus similique ad, magnam ipsam mollitia
      provident. Eius rerum eaque voluptatum reiciendis ex consequuntur
      accusantium, in ut quam adipisci numquam ad aperiam cumque soluta nam
      debitis mollitia velit ea voluptatem ipsa alias obcaecati. Velit quidem
      culpa cupiditate optio consectetur quasi assumenda atque quibusdam ad
      quisquam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
      neque cupiditate culpa officiis commodi laudantium, tenetur ipsam facere!
      Itaque, laboriosam. Blanditiis nobis, modi molestias repellat delectus id
      vel eius nesciunt laborum facere cum corporis laudantium voluptatem
      ratione deleniti tempora beatae, neque debitis vero minima, quasi ducimus
      odio. Quae, eveniet dicta. Nobis dolorem nisi accusamus recusandae
      distinctio voluptate, laborum, veniam deleniti eaque sint culpa. Illo
      aperiam, eaque repudiandae aliquid dolores dolore at, minima cumque et
      fugiat, sapiente laudantium quidem accusantium facilis. Quod, eveniet
      placeat. Corrupti dolores minus nesciunt fugiat quaerat temporibus placeat
      reprehenderit eos corporis veritatis, excepturi aperiam natus quos et
      possimus aliquid? Eligendi nisi quasi laboriosam tempora reprehenderit id
      dolores! Velit sed voluptatum magni architecto, eum quod! Similique
      aperiam adipisci sapiente cumque sequi, ratione saepe doloribus repellat
      itaque, quae nesciunt vitae? Atque vitae doloremque esse perspiciatis
      dignissimos, itaque a autem? Sed, voluptatibus deleniti. Itaque impedit
      harum possimus, deserunt alias voluptatum nihil voluptatibus libero a
      quasi ducimus similique ad, magnam ipsam mollitia provident. Eius rerum
      eaque voluptatum reiciendis ex consequuntur accusantium, in ut quam
      adipisci numquam ad aperiam cumque soluta nam debitis mollitia velit ea
      voluptatem ipsa alias obcaecati. Velit quidem culpa cupiditate optio
      consectetur quasi assumenda atque quibusdam ad quisquam!
    </div>
  );
}
