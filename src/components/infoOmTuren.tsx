"use client";


interface infoOmOpplevelseProps {
  tittel: string;
  innhold: string;
  lesMerInnhold: string;
}


/**
 * Om reisen
 * 
Denne reisen tar deg med gjennom spektakulære landskap,
fjorder og ikoniske utsiktspunkt.
 * 
 * 
 * 
Turen inkluderer guidede opplevelser, komfortabel transport
og nøye utvalgte stopp langs veien.

Du får god tid til fotografering, korte fotturer og lokale
matopplevelser - perfekt både for førstegangsbesøkende og
erfarne reisende.
 * 
 */

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export const InfoOmOpplevelsen = ({
  tittel,
  innhold,
  lesMerInnhold,
}: infoOmOpplevelseProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      {/* Ytre wrapper – sentrer innholdet */}
      <div className="flex justify-center px-6 py-8 bg-white rounded-xl">
        {/* Indre wrapper – kontroller bredde */}
        <div className="w-full max-w-2xl space-y-4 ">
          {/* Alltid synlig innhold */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">
              {tittel}
            </h2>

            <p className="text-sm">
              {innhold}
            </p>
          </div>

          {/* Trigger */}
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-sm hover:underline"
            >
              {isOpen ? "Vis mindre" : "Les mer"}
            </Button>
          </CollapsibleTrigger>
          {/* Utvidbart innhold */}
          <CollapsibleContent className="space-y-3 text-sm text-muted-foreground">
            {lesMerInnhold}
          </CollapsibleContent>
        </div>
      </div>
    </Collapsible>
  );
};
