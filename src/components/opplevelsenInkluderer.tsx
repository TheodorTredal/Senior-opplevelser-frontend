import { Check } from 'lucide-react';

/**
 * Skal ha bullet points over hva reisen inkluderer.
 */
const inkludert = [
  'Flyreise tur-retur fra Oslo',
  'Overnatting i 7 netter på hotell',
  'Frokost inkludert hver dag',
  'Transfer mellom flyplass og hotell',
  'Reiseforsikring',
  'Guidet bytur første dag',
  'Gratis avbestilling frem til 14 dager før avreise'
];


export interface OpplevelsenInkludererProps {
  inkludert: string[];
  title?: string;
}


export const OpplevelsenInkluderer = ({ inkludert, title}: OpplevelsenInkludererProps) => {


  const midpoint = Math.ceil(inkludert.length / 2);
  const leftColumn = inkludert.slice(0, midpoint);
  const rightColumn = inkludert.slice(midpoint);

  return (
    <div className="w-full p-6 rounded-lg bg-white">
      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
        {Array.from({ length: 2 }).map((_, colIndex) => {
          const columnItems = inkludert.slice(
            colIndex * midpoint,
            (colIndex + 1) * midpoint
          )

          return (
            <ul key={colIndex} className="space-y-3">
              {columnItems.map((item, index) => (
                <li
                  key={`${colIndex}-${index}`}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <span className="text-gray-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          )
        })}
      </div>
    </div>
  )

};

export default OpplevelsenInkluderer;