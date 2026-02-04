import Link from "next/link"
// import brochure from "../../../../public/jamisu-brochure.pdf"

const DownloadBrochureBtn= () => {
  return (
    <Link  href="www.jamisu.com"
      target="_blank" className="bg-blue px-5 py-2.5 text-sm text-yellow rounded-sm font-semibold transition hover:bg-black">
      Download Brochure
    </Link>
  )
}

export default DownloadBrochureBtn