import React,{useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom'
import ReactPlayer from 'react-player';
import {useResultContext} from '../components/contexts/ResultContextProvider'
import Loading from './Loading';
function Results(props) {
    const{results,isLoading,getresults,searchTerm}=useResultContext();
    const[touched,setistouched]=useState(false)
    const location=useLocation();
    
    //console.log(location.pathname)
    useEffect(()=>{if (searchTerm !== '') {
        // if (location.pathname === '/videos') {
        //   getresults(`/search/q=${searchTerm} videos`);
        // } else {
          setistouched(true);
            getresults(`${location.pathname}/q=${searchTerm}&num=40`);
        
      }
    }, [searchTerm, location.pathname]);
    if(!touched){

    return <div className='text-center p-10 mt-10'>
    <h1>HOLA USER</h1>
</div>
    }
    if(isLoading){
        return <Loading/>
    }
    console.log(location.pathname)
    switch (location.pathname) {
        case '/search':
            return ( <div className="sm:px-56 flex flex-wrap justify-between space-y-6">
            {results?.map(({ link, title }, index) => (
              <div key={index} className="md:w-2/5 w-full">
                <a href={link} target="_blank" rel="noreferrer">
                  <p className="text-sm">{link.length > 30 ? link.substring(0, 30) : link}</p>
                  <p className="text-lg hover:underline dark:text-blue-300 text-blue-700  ">{title}</p>
                </a>
              </div>
            ))}
          </div>) ;
           
          
                
        case '/image':
            return ( <div className="flex flex-wrap justify-center items-center">
            {results?.map(({ image, link: { href, title } }, index) => (
              <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                <img src={image?.src} alt={title} loading="lazy" />
                <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
              </a>
            ))}
          </div>);    
        case '/news':
            return ( <div className="sm:px-56 flex flex-wrap justify-between items-center space-y-6">
            {results?.map(({ id, links, source, title }) => (
              <div key={id} className="md:w-2/5 w-full ">
                <a href={links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                  <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
                </a>
                <div className="flex gap-4">
                  <a href={source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {source?.href}</a>
                </div>
              </div>
            ))}
          </div>)  ;
        case '/video':
            return (<div className="flex flex-wrap ">
            {results?.map((video, index) => (
              <div key={index} className="p-2">
                {video.link&&<ReactPlayer url={video.link+ '?showinfo=0&enablejsapi=1&origin=http://localhost:3000'} controls width="355px" height="200px" />}
              </div>
            ))}
          </div>)  ;          
    
        default:
            return "ERROR!";
    
}
    
}

export default Results;


// https://google-search3.p.rapidapi.com/api/v1/images/q=JavaScript&num=40
// https://google-search3.p.rapidapi.com/api/v1/image/q=tesla