import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './fnaf1.css'

const Fnaf1 = (props) => {
  return (
    <div className="fnaf1-container">
      <Helmet>
        <title>fnaf1 - BtrV1</title>
        <meta property="og:title" content="fnaf1 - BtrV1" />
      </Helmet>
      <div className="fnaf1-container1">
        <div className="fnaf1-container2">
          <Script
            html={`<iframe src="https://fnafunblocked.github.io/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
      <div className="fnaf1-container3">
        <span className="fnaf1-text">Space to fix some code</span>
        <h1 className="fnaf1-text1">
          <span>   </span>
          <span className="fnaf1-text3">B</span>
          <span className="fnaf1-text4">y:Arman</span>
        </h1>
      </div>
    </div>
  )
}

export default Fnaf1
