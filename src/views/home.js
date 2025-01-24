import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import SignIn5 from '../components/sign-in5'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Big Hearted Little Crow</title>
        <meta property="og:title" content="Big Hearted Little Crow" />
      </Helmet>
      <SignIn5
        heading1={
          <Fragment>
            <span className="home-text">Welcome to SIRIAC RH</span>
          </Fragment>
        }
      ></SignIn5>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
    </div>
  )
}

export default Home
