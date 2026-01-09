export default function ReisePage({
  params,
}: {
  params: { reiseSideId: string }
}) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Reise: {params.reiseSideId}
      </h1>
    </main>
  )
}