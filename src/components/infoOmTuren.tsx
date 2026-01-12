"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";

export const InfoOmReisen = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      {/* Ytre wrapper – sentrer innholdet */}
      <div className="flex justify-center px-6 py-8">
        {/* Indre wrapper – kontroller bredde */}
        <div className="w-full max-w-2xl space-y-4">
          {/* Alltid synlig innhold */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">
              Om reisen
            </h2>

            <p className="text-sm">
              Denne reisen tar deg med gjennom spektakulære landskap,
              fjorder og ikoniske utsiktspunkt.
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
            <p>
              Turen inkluderer guidede opplevelser, komfortabel transport
              og nøye utvalgte stopp langs veien.
            </p>

            <p>
              Du får god tid til fotografering, korte fotturer og lokale
              matopplevelser - perfekt både for førstegangsbesøkende og
              erfarne reisende.
            </p>
          </CollapsibleContent>
        </div>
      </div>
    </Collapsible>
  );
};
