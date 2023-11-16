import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page-2.css'

const Page2 = (props) => {
  return (
    <div className="page2-container">
      <Helmet>
        <title>page-2 - BtrV1</title>
        <meta property="og:title" content="page-2 - BtrV1" />
      </Helmet>
      <div className="page2-container01">
        <span className="page2-text">V 1.6</span>
      </div>
      <div className="page2-container02">
        <img alt="image" src="/pacman_hd-200h.png" className="page2-image" />
        <div className="page2-container03">
          <span className="page2-text1">Btr Games</span>
          <h1 className="page2-text2">I am Just Better</h1>
        </div>
      </div>
      <div className="page2-container04">
        <div className="page2-container05">
          <Link to="/getting-over-it13" className="page2-navlink">
            <img
              alt="image"
              src="/paperly-planes-300h.png"
              className="page2-image1"
            />
          </Link>
        </div>
        <div className="page2-container06">
          <Link to="/getting-over-it14" className="page2-navlink1">
            <img
              alt="image"
              src="/images%20(7)-300h.jpeg"
              className="page2-image2"
            />
          </Link>
        </div>
        <div className="page2-container07">
          <Link to="/drive-mad" className="page2-navlink2">
            <img
              alt="image"
              src="/drivemad-300h.png"
              className="page2-image3"
            />
          </Link>
        </div>
        <div className="page2-container08">
          <Link to="/stickman-hook" className="page2-navlink3">
            <img
              alt="image"
              src="/stickmanhook-300h.png"
              className="page2-image4"
            />
          </Link>
        </div>
      </div>
      <div className="page2-container09">
        <div className="page2-container10">
          <Link to="/getting-over-it13" className="page2-navlink4">
            <img
              alt="image"
              src="/download-300h.jpeg"
              className="page2-image5"
            />
          </Link>
        </div>
      </div>
      <div className="page2-container11">
        <button type="button" className="page2-button button">
          &lt;
        </button>
      </div>
    </div>
  )
}

export default Page2
