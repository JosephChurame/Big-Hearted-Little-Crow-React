import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sign-in5.css'

const SignIn5 = (props) => {
  return (
    <div className="sign-in5-container1 thq-section-padding">
      <div className="sign-in5-max-width thq-section-max-width">
        <div className="sign-in5-container2 thq-section-padding">
          <div className="sign-in5-container3">
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="sign-in5-image1"
            />
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="sign-in5-image2"
            />
          </div>
          <div className="sign-in5-form-root">
            <div className="sign-in5-container4">
              <h2 className="sign-in5-text1 thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-in5-text3">Welcome to SIRIAC RH</span>
                  </Fragment>
                )}
              </h2>
              <p className="sign-in5-text2 thq-body-large">
                Please enter your login details.
              </p>
            </div>
            <form className="sign-in5-form">
              <input
                type="text"
                placeholder="Username"
                className="sign-in5-textinput1 input"
              />
              <input
                type="password"
                placeholder="Password"
                className="sign-in5-textinput2 input"
              />
            </form>
          </div>
        </div>
        <div className="sign-in5-container5">
          <img
            alt={props.image2Alt}
            src={props.image2Src}
            className="sign-in5-image3 thq-img-ratio-4-6"
          />
        </div>
      </div>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="sign-in5-sign-up-image thq-img-ratio-16-9"
      />
      <div className="sign-in5-container6"></div>
    </div>
  )
}

SignIn5.defaultProps = {
  image2Src:
    'https://images.unsplash.com/photo-1518709911915-712d5fd04677?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxzaWduJTIwaW58ZW58MHx8fHwxNzEzMjYwNjUyfDA&ixlib=rb-4.0.3&h=500',
  imageSrc1: '/logo%20siriac.svg',
  imageSrc2: '/cuk%20-%20logo-200w.png',
  image1Src:
    'https://images.unsplash.com/photo-1604076850742-4c7221f3101b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTMxOTg1NzV8MA&ixlib=rb-4.0.3&w=1500',
  image2Alt: 'Image of a lock icon',
  image1Alt: 'Image of a person signing in',
  imageAlt2: 'image',
  imageAlt1: 'image',
  heading1: undefined,
}

SignIn5.propTypes = {
  image2Src: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc2: PropTypes.string,
  image1Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading1: PropTypes.element,
}

export default SignIn5
