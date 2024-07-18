import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            height={38}
            width={123}
            alt="Evently logo"
          />
        </Link>
        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
};

export default Header;
