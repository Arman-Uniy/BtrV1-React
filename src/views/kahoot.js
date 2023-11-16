import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './kahoot.css'

const Kahoot = (props) => {
  return (
    <div className="kahoot-container">
      <Helmet>
        <title>kahoot - BtrV1</title>
        <meta property="og:title" content="kahoot - BtrV1" />
      </Helmet>
      <div className="kahoot-container1">
        <div className="kahoot-container2">
          <Script
            html={`<iframe src="https://khanswers.vercel.app/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
      <div className="kahoot-container3">
        <span className="kahoot-text">Space to fix some code</span>
        <h1 className="kahoot-text1">
          <span>   </span>
          <span className="kahoot-text3">B</span>
          <span className="kahoot-text4">y:Arman</span>
        </h1>
      </div>
    </div>
  )
}

export default Kahoot
