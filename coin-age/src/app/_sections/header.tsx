import Link from "next/link";
import Image from "next/image";
import NavPopUps from "../_components/navPopUps";

export default function Header() {
  return (
    <header className="w-full h-fit lg:sticky top-0">
      <nav className="flex justify-between items-center px-3 py-5 border-b border-borderColor transition-colors duration-300 lg:justify-end lg:py-[16.5px] lg:font-normal lg:px-5">
        <Link
          href="/"
          className="flex items-center gap-2 w-fit h-fit lg:hidden"
        >
          <Image src="assets/logo.svg" alt="Logo" width={48} height={48} />
          <p className="text-white text-sm font-semibold">OpenBook</p>
        </Link>

        <NavPopUps />
      </nav>
    </header>
  );
}
