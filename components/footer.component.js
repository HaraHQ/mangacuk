import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="shadow-inner w-full h-3"></div>
      <div className="py-6 px-32 grid grid-cols-4 gap-6">
        <div></div>
        <div className="flex flex-col items-center">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="MangaCUK"
              width={64}
              height={64}
            />
          </Link>
          <div className="text-sm">©️ 2022 Mangacuk</div>
        </div>
        <div className="flex flex-col">
          <Link href={"/page/privacy"}>▶️ Privacy Policy</Link>
          <Link href={"/page/dmca"}>▶️ DMCA Notices</Link>
          <Link href={"/page/content"}>▶️ Content Policy</Link>
        </div>
        <div></div>
      </div>
    </footer>
  )
}

export default Footer;