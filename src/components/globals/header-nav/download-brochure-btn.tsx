import Link from "next/link";

const DownloadBrochureBtn = () => {
  return (
    <Link
      href="/download-brochure"
      className="px-7 py-2.5 rounded-full bg-[#2F7F78] text-white font-semibold shadow-lg hover:bg-[#fbc02d] hover:text-[#002050] transition-all duration-300"
    >
      Download Brouchure
    </Link>
  );
};

export default DownloadBrochureBtn;
