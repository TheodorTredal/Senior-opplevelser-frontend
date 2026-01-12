"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Info, BaggageClaim, NotepadText } from "lucide-react"

export const StickyBestillingsButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const trigger = document.getElementById("etter-bilde-trigger")
    if (!trigger) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Når triggeren er OVER viewport → vi har scrollet forbi bildet
        setVisible(!entry.isIntersecting)
      },
      {
        threshold: 0,
      }
    )

    observer.observe(trigger)

    return () => observer.disconnect()
  }, [])

  const scrollToBestilling = (scrollTo: string) => {
    const element = document.getElementById(scrollTo)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

//   if (!visible) return null

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
