import React from 'react'

function Header() {
    return(
        <div class="">
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand mx-5" href="#"><h1>electro.</h1> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="about">about us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">shopping</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="contact">contact us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">FAQs</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
}
export default Header