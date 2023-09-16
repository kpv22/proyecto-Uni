"use client";
// React / NextJS
import { useState } from "react";

import { Accordion, AccordionHeader, AccordionBody } from "@/components/MaterialTailwind/MaterialTailwind"

export default function AccordionCustom({title, Component, col}) {
  const [open, setOpen] = useState(1);
  const handleOpen = value => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        className={`cardshadow acordation bg-white ${col ? "col-span-2" : ""}`}
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`transition-colors justify-center text-center border-none ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}
        >
          <h2 className="text-center">{title}</h2>
        </AccordionHeader>

        <AccordionBody className="p-0">
          <Component />
        </AccordionBody>
      </Accordion>
    </>
  );
}
