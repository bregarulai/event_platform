import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-between wrapper flex-col gap-4 p-5 text-center sm:flex-row">
        <Link className="w-[138px]" href="/">
          <Image
            className="h-auto w-full"
            src="/assets/images/logo.svg"
            height={38}
            width={128}
            alt="logo"
          />
        </Link>
        <p>2024 Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
