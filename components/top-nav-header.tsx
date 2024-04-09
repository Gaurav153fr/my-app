/* eslint-disable @next/next/no-img-element */
import { ModeToggle } from "./theme-toggle";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="w-full flex justify-between md:px-10 px-2  py-2 shadow-md   bg-background">
        <Link href="/" className="hover:text-foreground/70">
          <img
            src="/fv.png"
            alt="logo"
            className="w-5 hover:opacity-70"
            loading="lazy"
          />
          <span>हिंदी</span>
        </Link>
        <span className="flex">
          {/* <Link href='/admin' className={cn(buttonVariants({variant:'secondary'}),"w- flex justiy-around mr-2" )}>Admin</Link> */}
          <ModeToggle />{" "}
        </span>
      </nav>
    </>
  );
}
