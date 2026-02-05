import Link from "next/link";

const DownloadBrochureBtn = () => {
  return (
    <Link
      href="/download-brochure"
      className="bg-blue px-5 py-2.5 text-sm text-yellow rounded-sm font-semibold hover:bg-black"
    >
      DOWNLOAD BROCHURE
    </Link>
  );
};

export default DownloadBrochureBtn;
