import React from 'react'

const HeaderComponent = () => {
    return (
        <div>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#home">One Piece of Bread Banking</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       {/* Link pages here */}
      </li>
    </ul>
    <span class="navbar-text">
      Getcho Bread up
    </span>
  </div>
</nav>
        </div>
    )
}

export default HeaderComponent
