import React from 'react'
import './style.css'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand header-text" href="#">Digital Agency</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Testimonials</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Contacts</a>
          </li>
        </ul>
    
      </div>
    </div>
  </nav>
  )
}

export default NavBar