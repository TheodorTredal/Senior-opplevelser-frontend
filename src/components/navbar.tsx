"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const navLink =
  "text-xl font-medium text-white hover:underline transition";

const dropdownTrigger =
  "text-xl font-medium text-white hover:underline bg-transparent";


const HoverDropdown = ({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string }[];
}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={`${dropdownTrigger} flex items-center gap-1`}
      >
        {label}

        {/* Pil */}
        <ChevronDown
          className={`
            h-4 w-4 transition-transform duration-200
            ${open ? "rotate-180" : "rotate-0"}
          `}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        align="start"
        className="w-56 rounded-xl"
      >
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href} className="w-full ">
              {item.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};



interface MobileMenuProps {
  open: boolean;
  onNavigate?: () => void;
}

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="absolute top-20 left-0 z-50 w-full bg-brand-navbar px-6 py-6 shadow-md md:hidden space-y-4">
      
      <Link href="/reisekalender" onClick={onNavigate} className="block text-xl text-white">
        Reisekalender
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger className="text-xl text-white">
          Reiser
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem asChild>
            <Link href="/reiser/alle-reiser" onClick={onNavigate}>Alle reiser</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/reiser/dagsturer" onClick={onNavigate}>Dagsturer</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/reiser/natur" onClick={onNavigate}>Natur & fjord</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/reiser/kultur" onClick={onNavigate}>Kultur & by</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/kurs-og-seminar" onClick={onNavigate} className="block text-xl text-white">
        Kurs & seminar
      </Link>

      <Link href="/einarklubben" onClick={onNavigate} className="block text-xl text-white">
        Einar klubben
      </Link>

      <Link href="/login" onClick={onNavigate} className="block text-xl text-white">
        Login
      </Link>
    </div>
  );
}



export const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  return (
    <nav className="bg-brand-navbar shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="text-white">
          <div className="text-2xl font-semibold">Senior opplevelser</div>
          <div className="text-sm opacity-90">Trygge reiser i Norge</div>
        </Link>

        {/* Desktop meny */}
        <div className="hidden items-center gap-8 md:flex">

          <Link href="/reisekalender" className={navLink}>
            Reisekalender
          </Link>

          <HoverDropdown
            label="Reiser"
            items={[
              { href: "/reiser/alle-reiser", label: "Alle reiser" },
              { href: "/reiser/dagsturer", label: "Dagsturer" },
              { href: "/reiser/natur", label: "Natur & fjord" },
              { href: "/reiser/kultur", label: "Kultur & by" },
            ]}
          />

          <Link href="/kurs-og-seminar" className={navLink}>
            Kurs & seminar
          </Link>

          <Link href="/einarklubben" className={navLink}>
            Einar klubben
          </Link>

          <HoverDropdown
            label="Om oss"
            items={[
              { href: "/var-historie", label: "Vår historie" },
              { href: "/praktisk-info/tilrettelegging", label: "Tilrettelegging" },
              { href: "/praktisk-info/helse", label: "Helse & trygghet" },
              { href: "/praktisk-info/avbestilling", label: "Avbestilling" },
            ]}
          />
        </div>

        {/* Høyre */}
        <Button
          variant="ghost"
          className="text-white hover:underline"
        >
          Login
        </Button>


        <button
           onClick={() => setMobileOpen(!mobileOpen)}
           className="md:hidden flex flex-col gap-1.5"
           aria-label="Toggle menu"
         >
           <span className="h-0.5 w-6 bg-white" />
           <span className="h-0.5 w-6 bg-white" />
           <span className="h-0.5 w-6 bg-white" />
         </button>


            <MobileMenu open={mobileOpen}
            onNavigate={() => setMobileOpen(false)}>
            </MobileMenu>

      </div>
    </nav>
  );
}




