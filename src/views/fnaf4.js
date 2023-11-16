import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './fnaf4.css'

const Fnaf4 = (props) => {
  return (
    <div className="fnaf4-container">
      <Helmet>
        <title>fnaf4 - BtrV1</title>
        <meta property="og:title" content="fnaf4 - BtrV1" />
      </Helmet>
      <div className="fnaf4-container1">
        <div className="fnaf4-container2">
          <Script
            html={`<iframe src="https://fnafunblocked.github.io/4/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
      <div className="fnaf4-container3">
        <span className="fnaf4-text">Space to fix some code</span>
        <h1 className="fnaf4-text1">
          <span>   </span>
          <span className="fnaf4-text3">B</span>
          <span className="fnaf4-text4">y:Arman</span>
        </h1>
      </div>
    </div>
  )
}

export default Fnaf4
