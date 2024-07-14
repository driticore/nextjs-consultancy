import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white z-50 inset-x-0 h-20 min-w-full pt-5 pb-8 drop-shadow-2xl fixed">
      <header className="relative backdrop-blur-lg">
        <MaxWidthWrapper>
          <div className="flex justify-between items-center h-full">
            <div className="ml-4 flex items-center">
              <Link href="/">
                  <Image src="/ui/logo.png" width={40} height={40} alt=""></Image>
              </Link>
            </div>
            <ul className="hidden md:flex gap-x-10 text-black">
              <li>
                <Link href={
                  "/#about"
                }>
                  <span className={cn(buttonVariants({variant: "ghost", className: "font-semibold"}))}>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/pages/services">
                  <span className={cn(buttonVariants({variant: "ghost", className: "font-semibold"}))}>Services</span>
                </Link>
              </li>
              <li>
                <Link href="/pages/contacts">
                  <span className={cn(buttonVariants({variant: "ghost", className: "font-semibold"}))}>Contacts</span>
                </Link>
              </li>
            </ul>
            {/* Mobile Menu (Hamburger Menu) Example */}
            <div className="md:hidden">
              {/* Implement your mobile menu here */}
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
