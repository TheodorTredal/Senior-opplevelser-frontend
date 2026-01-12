


interface dagsProgramProps {
    tid: string;
    aktivitet: string;
}

interface ReiseProgramKomponentProps {
    program: dagsProgramProps[]
}


export const ReiseProgramKomponent = ({ program }: ReiseProgramKomponentProps) => {
  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-sm">
      <h1 className="text-black font-semibold text-xl mb-4">
        Dagsprogram
      </h1>

      <ul className="space-y-4">
        {program.map((punkt, index) => (
          <li key={index} className="flex gap-4">
            <span className="font-semibold text-black w-14">
              {punkt.tid}
            </span>
            <span>{punkt.aktivitet}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
