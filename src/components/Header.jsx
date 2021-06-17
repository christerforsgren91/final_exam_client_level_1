import React from 'react'

const Header = () => {
  return (
    <div data-cy='header'>
      <h1 data-cy='header-title' >Viaplay</h1>
      <img data-cy='header-logo' src={"https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg"} alt="logo" />
    </div>
  )
}

export default Header
