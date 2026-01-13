"use client"


import { Button } from "@/components/ui/button"
import { 
  Info, 
  BaggageClaim, 
  NotepadText,
  Martini,

 } from "lucide-react"

export const StickyBestillingsButton = () => {

  const scrollToBestilling = (scrollTo: string) => {
    const element = document.getElementById(scrollTo)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="sticky top-0 w-full bg-brand-cta border-t p-4 z-50">
        <div className="flex flex-row justify-around font-semibold text-xl text-white">

        <Button variant="ghost" className="hover:underline" onClick={() => scrollToBestilling("om-reisen")}>
            <Info></Info>
          Om reisen
        </Button>
        <Button variant="ghost" className="hover:underline" onClick={() => scrollToBestilling("reisen-inkluderer")}>
            <BaggageClaim></BaggageClaim>
          Reisen inkluderer
        </Button>
        <Button variant="ghost" className="hover:underline" onClick={() => scrollToBestilling("program")}>
            <NotepadText></NotepadText>
          Program
        </Button>
        <Button className="bg-brand-blue" onClick={() => scrollToBestilling("dato-og-priser")}>
          Gå til bestilling
        </Button>
        </div>
    </div>
  )
}


export const StickyBestillingsButtonKursOgSeminar = () => {

  const scrollToBestilling = (scrollTo: string) => {
    const element = document.getElementById(scrollTo)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <div className="sticky top-0 w-full bg-brand-cta border-t p-4 z-50">
        <div className="flex flex-row justify-around font-semibold text-xl text-white">

        <Button variant="ghost" className="hover:underline" onClick={() => scrollToBestilling("om-kurset")}>
            <Info></Info>
          Om Kurset
        </Button>
        <Button variant="ghost" className="hover:underline" onClick={() => scrollToBestilling("kurset-inkluderer")}>
          <Martini></Martini>
          Kurset inkluderer
        </Button>
        <Button variant="ghost" className="hover:underline" onClick={() => scrollToBestilling("program")}>
            <NotepadText></NotepadText>
          Program
        </Button>
        <Button className="bg-brand-blue" onClick={() => scrollToBestilling("dato-og-priser")}>
          Gå til bestilling
        </Button>
        </div>
    </div>
  )

  
}
