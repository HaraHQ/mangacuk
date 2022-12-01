import { CSSTransition } from "react-transition-group";

import useSearch from "../stores/useSearch.store";

const Search = () => {
  const showSearch = useSearch().show;
  return (
    <CSSTransition in={showSearch} timeout={300} classNames="navbar" unmountOnExit>
      <div className="flex justify-center p-10 bg-[#f1f1f1]">
        <div className="flex">
          <input type="text" name="search" className="w-[600px] ring ring-4 ring-green-300 p-3" />
          <div className="p-2 text-2xl">🔍</div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Search;