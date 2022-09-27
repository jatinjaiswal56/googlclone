import React, { useContext, useState } from "react";

const ResultContext = React.createContext();

const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

function ResultContextProvider(props) {
  const [results, Setresults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [searchTerm, setsearchTerm] = useState("India Today");

  const getresults = async (type) => {
    setisLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-User-Agent": "desktop",
        "X-Proxy-Location": "EU",
        "X-RapidAPI-Key": process.env.REACT_APP_KEY,
        "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
      }
      
    });
    const data=await response.json();
    console.log(data)
    if(type.includes("/news")){
      Setresults(data.entries)
    }
    else if(type.includes("/image")){
      Setresults(data.image_results)
    }else{
      Setresults(data.results);
    }
    // Setresults(data);
    setisLoading(false);
  };
  return (
    <ResultContext.Provider value={{getresults,results,searchTerm,setsearchTerm,isLoading}}>
        {props.children}
        </ResultContext.Provider>
  )
}

export default ResultContextProvider;
export const useResultContext=()=>useContext(ResultContext)