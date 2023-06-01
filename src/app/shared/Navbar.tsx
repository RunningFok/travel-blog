"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { nothingYou } from "../font";
import { IonIcon } from "@ionic/react";
import { menu } from "ionicons/icons";
type Props = {};

export default function Navbar(props: Props) {
  return (
    <header className="mb-0 md:sticky lg:sticky top-0 z-30">
      <nav className=" flex flex-row sm:px-10 pt-5 pr-44 justify-between items-center w-full bg-neutral-800 text-wh-10">
        <div className="hidden sm:block">
          <Link href={"/"}>
            <div className="font-bold hover:text-amber-200">CHEUNG CHAU</div>
          </Link>
        </div>
        <div id="dropdown-wrapper" className="block md:hidden lg:hidden">
          <button className="pl-7 items-start peer hover:font-bold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-teal-200">
            <div className="">
              <IonIcon icon={menu} size="large" />
            </div>
          </button>
          <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-teal-200 absolute">
            <a
              className="px-5 py-3 text-wh-900 font-bold hover:bg-amber-200"
              href="/topLocations/#top"
            >
              Things To Do
            </a>
            <a
              className="px-5 py-3 text-wh-900 font-bold hover:bg-amber-200"
              href="/topRestaurants/#top"
            >
              Food & Drink
            </a>
            <a
              className="px-5 py-3 text-wh-900 font-bold hover:bg-amber-200"
              href="/topHotels/#top"
            >
              Hotels
            </a>
          </div>
        </div>
        <div className=" pl-6  flex justify-between items-center gap-10">
          <Link
            href={"#top"}
            className=" text-6xl text-teal-200 font-serif font-thin"
          >
            <div className={nothingYou.className}>chewout</div>
          </Link>
        </div>
        <div className="hidden sm:block">
          <Link href={"#subscribe"}>
            <div className="font-bold hover:text-red-300">SUBSCRIBE</div>
          </Link>
        </div>
      </nav>
      <nav className="hidden sm:block md:flex lg:flex justify-center items-center w-full bg-neutral-800 text-wh-10 pt-1 pb-2 px-10 ">
        <Link
          href={"/topLocations/#top"}
          className="mx-3 hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-teal-200 "
        >
          Things to Do
        </Link>
        <Link
          href={"/topRestaurants/#top"}
          className="mx-3 hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-teal-200 "
        >
          Food & Drink
        </Link>
        <Link
          href={"/topHotels/#top"}
          className="mx-3 hover:font-bold hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-teal-200 "
        >
          Hotels
        </Link>
        <div>
          <button className="mx-3 peer hover:font-bold hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-teal-200 ">
            More
          </button>
          <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-teal-200 absolute">
            <a
              className="px-5 py-3 text-wh-900 font-bold hover:bg-amber-200"
              href="/#trivia"
            >
              Did You Know?
            </a>
            <a
              className="px-5 py-3 text-wh-900 font-bold hover:bg-amber-200"
              href="#footer"
            >
              About Us
            </a>
            <a
              className="px-5 py-3 text-wh-900 font-bold hover:bg-amber-200"
              href="#footer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
