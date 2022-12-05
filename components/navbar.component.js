import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import useSearch from "../stores/useSearch.store";

const Navbar = ({ readNav = false, readData = false }) => {
  const [read, setRead] = useState(false);
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  const navbarRef = useRef();

  const control = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < navbarRef.current?.offsetHeight) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    setLastY(window.scrollY);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', control);
      return () => {
        window.removeEventListener('scroll', control);
      }
    }
  }, [lastY])

  const search = useSearch();

  const moveToTop = () => {
    var element = document.getElementById("navbar");
    element.scrollIntoView({behavior:"smooth", block: "end", inline:"nearest"});
  }

  return (
    <>
      <div id="navbar" className="shadow-md py-4 bg-white text-black w-full" ref={navbarRef}>
        <div className="flex grid grid-cols-12 px-32">
          <div className="flex col-span-10 items-center">
            <div className="mr-4">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  alt="MangaCUK"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
            <div className="flex">
              <div className="mr-4 select-none cursor-pointer" onClick={() => search.toggle()}>Search</div>
              <div className="mr-4 select-none cursor-pointer">Manga Updates</div>
              <div className="mr-4 select-none cursor-pointer">Browse</div>
            </div>
          </div>
          <div className="flex flex-row-reverse col-span-2 items-center select-none cursor-pointer">
            <div className="bounce-sm py-3 px-4 rounded-md bg-red-500 hover:bg-red-600 active:bg-red-700 text-white text-xl">
              👍 Sign-in
            </div>
          </div>
        </div>
      </div>
      { readNav ? (
        <div className={`shadow-md flex justify-between py-4 bg-black text-white w-full h-16 z-50 ${show ? 'sticky top-0' : 'hidden'} `}>
          <div className="flex text-2xl font-semibold ml-4">{readData ? readData.manga.title : "Read on MangaCuk"}
            <div className="text-yellow-500 px-2">{readData ? readData.manga.episode.title : ""}</div>
          </div>
          <div className="flex mr-4">
            <div className="select-none cursor-pointer px-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-lg text-white rounded-full">ℹ️ Info</div>
            <div className={`select-none px-4 ${readData?.manga?.episode?.previous ? `cursor-pointer bg-red-500 hover:bg-red-600 active:bg-red-700` : `cursor-not-allowed bg-slate-500`} text-lg text-white rounded-full ml-2`}>◀️ Prev</div>
            <div className={`select-none px-4 ${readData?.manga?.episode?.next ? `cursor-pointer bg-red-500 hover:bg-red-600 active:bg-red-700` : `cursor-not-allowed bg-slate-500`} text-lg text-white rounded-full ml-2`}>▶️ Next</div>
            <div className="select-none cursor-pointer px-4 bg-red-500 hover:bg-red-600 active:bg-red-700 text-lg text-white rounded-full ml-2" onClick={moveToTop}>🔝 Top</div>
          </div>
        </div>
      ) : false}
    </>
  )
}

export default Navbar;