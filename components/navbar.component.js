import Image from "next/image";
import useSearch from "../stores/useSearch.store";

const Navbar = () => {
  const search = useSearch();
  return (
    <div className="shadow-md py-4 bg-white text-black w-full">
      <div className="flex grid grid-cols-12 px-32">
        <div className="flex col-span-10 items-center">
          <div className="mr-4">
            <Image
              src={"/logo.png"}
              alt="MangaCUK"
              width={48}
              height={48}
            />
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
  )
}

export default Navbar;