import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export const ReiseFilter = () => {
  return (
    <Card className="w-full min-w-full">
      <div className="p-6 space-y-6">
        <CardTitle className="text-xl">
          Filtrer reiser
        </CardTitle>

        <CardContent className="p-0 w-full space-y-6">
          {/* Destinasjon */}
          <div className="space-y-3 pt-4">
            <p className="text-sm font-medium">
              Destinasjon
            </p>

            <div className="space-y-2">
              <FilterCheckbox label="Vestlandet" />
              <FilterCheckbox label="Nord-Norge" />
              <FilterCheckbox label="Østlandet" />
              <FilterCheckbox label="Sørlandet" />
            </div>
          </div>

          {/* Pris */}
          <div className="space-y-3 pt-4">
            <p className="text-sm font-medium">
              Pris
            </p>

            <div className="space-y-2">
              <FilterCheckbox label="Under 5 000 kr" />
              <FilterCheckbox label="5 000 - 10 000 kr" />
              <FilterCheckbox label="Over 10 000 kr" />
            </div>
          </div>

          {/* Varighet */}
          <div className="space-y-3 pt-4">
            <p className="text-sm font-medium">
              Varighet
            </p>

            <div className="space-y-2">
              <FilterCheckbox label="1-3 dager" />
              <FilterCheckbox label="4-7 dager" />
              <FilterCheckbox label="8+ dager" />
            </div>
          </div>
        </CardContent>

        {/* Handling */}
        <div className="pt-4">
          <Button
            disabled
            className="w-full bg-brand-action text-white py-3 opacity-60"
          >
            Filtrer reiser
          </Button>
        </div>
      </div>
    </Card>
  )
}

const FilterCheckbox = ({ label }: { label: string }) => {
  return (
    <label className="flex items-start gap-4 rounded-md px-2 py-1 cursor-not-allowed">
      <Checkbox
        disabled
        className="mt-0.5"
      />
      <span className="text-sm pl-4 leading-5 text-black">
        {label}
      </span>
    </label>
  )
}
