import { ReiseBreadcrumb } from "@/src/components/reiseBreadCrumb"


const testImg = "";
const testAltImg = "";

export default async function ReisePage({
  params,
}: {
  params: Promise<{ reiseSideId: string }>
}) {
  const { reiseSideId } = await params

  const title = reiseSideId
    .replaceAll("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())

  return (
<main className="space-y-6 min-h-screen border border-red-400">
  <ReiseBreadcrumb title={title} />

  <h1 className="text-2xl font-bold pt-4">
    {title}
  </h1>

  <div className="w-full h-120 flex">
    <img
      src="https://placehold.co/800x600"
      alt="Testbilde"
      className="w-full h-96 pt-4 object-cover border-r border-red-600"
    />
  </div>
</main>

  )
}
