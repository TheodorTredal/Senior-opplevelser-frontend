interface PageProps {
  params: { kursOgSeminarSideid: string }
}

const KursOgSeminarerPage = async ({ params }: PageProps) => {
  const { kursOgSeminarSideid } = params

  // Her kan du hente data basert på kursOgSeminarSideid
  // const data = await fetch(...)

  return (
    <div>
      <h1>Dette er kurset/seminaret: {kursOgSeminarSideid}</h1>
    </div>
  )
}

export default KursOgSeminarerPage
