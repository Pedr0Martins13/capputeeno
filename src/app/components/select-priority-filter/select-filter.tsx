"use client";

import { PriorityType } from "@/models/PriorityType";
import { SelectContainer } from "./select-container";
import { OptionButton } from "./option-button";
import { useState } from "react";
import { BackDrop } from "../back-drop";
import { SelectButton } from "./select-button";
import { AnimatePresence } from "framer-motion";

const PRIORITY_OPTIONS: { label: string; type: PriorityType }[] = [
  { label: "Novidades", type: "news" },
  { label: "Preço: Maior-menor", type: "biggest_price" },
  { label: "Preço: Menor-maior", type: "lowest_price" },
  { label: "Mais vendidos", type: "best_sellers" },
];
export const SelectFilter = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <SelectButton label="Organizar por" onClick={() => setIsOpen(!isOpen)} />
      <div className="relative mt-6">
        <AnimatePresence>
          {isOpen && (
            <SelectContainer onClick={() => setIsOpen(false)}>
              {PRIORITY_OPTIONS.map((option, i) => (
                <OptionButton
                  key={i + option.label}
                  label={option.label}
                  type={option.type}
                />
              ))}
            </SelectContainer>
          )}
        </AnimatePresence>
        {isOpen && <BackDrop onClick={() => setIsOpen(!isOpen)} />}
      </div>
    </>
  );
};
