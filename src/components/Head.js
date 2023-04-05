import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { hamberger, user, youtube } from "../images";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
  const [searchquery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const searchCache = useSelector((state)=>state.search)
  const dispatch = useDispatch();
  // console.log(searchCache)


  

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchCache[searchquery]){
        setSuggestion(searchCache[searchquery]);
      }else{
        suggestqueries();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchquery]);

  const suggestqueries = async () => {
    const data = await fetch(YOUTUBE_SEARCH + searchquery);
    const json = await data.json();
    // console.log("Search Suggest", json[1]);
    setSuggestion(json[1]);
    dispatch(cacheResult({
      [searchquery]: json[1]
    }))
  };

  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg pl-0 pr-0 pt-5 pb-5 justify-between">
      <div className="left flex col-span-1">
        <img
          onClick={handleMenu}
          src={hamberger}
          alt="hambermenu"
          className="h-8 cursor-pointer"
        />

        <img src={youtube} alt="youtube" className="h-8 cursor-pointer" />
      </div>
      <div className="center w-full col-span-10 flex">
        <input
          type="text"
          value={searchquery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border-gray-300 rounded-l-full"
          placeholder="Search Items"
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=>setShowSuggestion(false)}

        />
        <button className="border-gray-300 rounded-r-full">Search</button>
        <div className="mt-10 fixed bg-white w-2/4 shadow-md rounded-lg">
          {suggestion?.map((query) => {
            return <ul className="text-bold p-2">
              {showSuggestion?<li className="">{query}</li>:null}
            </ul>;
          })}
        </div>
      </div>

      <div className="right col-span-1"></div>

      <img src={user} alt="youtube" className="h-8" />
    </div>
  );
};

export default Head;
