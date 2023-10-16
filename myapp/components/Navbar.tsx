"use client"

import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import { NAV_LINKS } from "@/constants"


const Navbar = () => {

  const [providers,setProviders] = useState<null | any>(null);

  const setUpProviders = async() => {
    try {

      const response = await getProviders();
      setProviders(response);
      console.log("providers : ",providers);
      
    } catch (error : any) {
      console.log("Error while setting providers : ",error);
      throw new Error("Failed To Set Providers " + error.message);
    }
  };

  useEffect(() => {
    setUpProviders();
  },[])


  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar