import React, { Component } from 'react'
import '../CSS/Header.css'
import logo from'../images/logo.png'
import notificationImg from '../images/Notifications.svg'
import profileImg from '../images/profile.png'


class Header extends Component {
  render() {
    return (
      <>
        <div class="header-cont arrange-col">
            <div class="logo-cont">
                <div class="toggle-cont">
                    <div class="toggle-line"/>
                    <div class="toggle-line"/>
                    <div class="toggle-line"/>
                    <div class="toggle-line"/>
                </div>
                <img class="logo-img" src={logo} alt="logo" width="50" height="50" />
            </div>
            <div class="search-cont">
                <input class="search" type="text" placeholder="search tests, live class, videos, assignments, doubts etc.. "/>
            </div>
            <div class="notification-cont">
                <img   src={notificationImg} alt="logo" width="25" height="30" />
            </div>
            <div class="profile-cont">
                <img  src={profileImg} alt="logo" width="30" height="30" />
                <h3>TESTING</h3>
            </div>
        </div>
      </>
    )
  }
}

export default Header
