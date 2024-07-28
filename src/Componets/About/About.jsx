import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import Typedjs from './Typedjs/Typedjs'

export default function About() {
const [ApiMosies, setApiMosies] = useState(null)

 async function APIMovies() {
 const{data}=await axios.get("https://api.themoviedb.org/3/trending/movie/week?language=en-US",{
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzU4ZWU1Mjc1ZDk2YTQzNzM1MGY1ZGM2MzI1OWEyOSIsIm5iZiI6MTcyMTMyNzUyOC4xNjM5MDksInN1YiI6IjY1MjFhZDNhMGNiMzM1MTZmZWMyZDkyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7j55Azj2klXonoF0E-4GVcchasoAfqi-3QF2uCt18M",
    },
  })
  setApiMosies(data.results)
}

useEffect(() => {
APIMovies();
}, [])
  return <>
  {ApiMosies===null?<div className=" bg-dark vh-100 d-flex justify-content-center  align-items-center">
      <i class="fa-solid fa-spinner fa-spin-pulse fa-spin-reverse text-white fa-6x"></i>
    </div>:<div className="bg-dark py-5">
        <h1 className=" text-white text-center"><Typedjs/></h1>
      <div className="container  text-center  text-white mt-5 ">

        <div className="row gy-4">
          {ApiMosies.map(function (item, index) {
            return (
              <div key={index} className=" col-md-4">
                <div className="itemcard shadow   rounded rounded-3">
                  <div className=" position-relative overflow-hidden">
                    <img
                      className="w-100"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        item.backdrop_path
                      }
                      alt=""
                    />
                    <div className="py-5 p-2 itemoverview d-flex justify-content-center align-items-center">
                      {item.overview === "" ? (
                        <p>
                          Lorem, ipsum dolor sit amet consectetur
                          adipisicing elit. Beatae, soluta aliquam. Est
                          ipsam fugiat adipisci.
                        </p>
                      ) : (
                        <p> {item.overview.slice(0, 100)}</p>
                      )}
                    </div>
                  </div>
                  <div className=" pt-4">
                    {item.title == null ? (
                      <h5>{item.original_name.slice(0, 30)}</h5>
                    ) : (
                      <h5>{item.title.slice(0, 30)}</h5>
                    )}
                  </div>
                  <div className=" pb-2 d-flex  justify-content-evenly rate">
                    <p className=" fs-6 p-0 m-0 vote_average">
                      media_type: {item.media_type}
                    </p>
                    <p className=" fs-6 vote_average ">
                      vote_average :{item.vote_average}
                      <i class="fa-solid fa-star text-success"></i>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  }
</>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}
