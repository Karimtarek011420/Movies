import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container">
    <Link className="navbar-brand " to="/allmovies">
      <img src="./film-3057394_640.jpg" className='  me-2' alt="" />
      <span className=' fs-4'>MovieMania</span>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/allmovies">allMovies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/trendingmovies"> Famous Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/trendinpeople">People</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/TV">TV</Link>
        </li>
       
       
     
      </ul>
    
    </div>
  </div>
</nav>
  
  
  
  
  
  
  
  
  
  
  
  </>
}
