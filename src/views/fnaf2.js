import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './fnaf2.css'

const Fnaf2 = (props) => {
  return (
    <div className="fnaf2-container">
      <Helmet>
        <title>fnaf2 - BtrV1</title>
        <meta property="og:title" content="fnaf2 - BtrV1" />
      </Helmet>
      <div className="fnaf2-container1">
        <div className="fnaf2-container2">
          <Script
            html={`<iframe src="https://fnafunblocked.github.io/2/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
      <div className="fnaf2-container3">
        <span className="fnaf2-text">Space to fix some code</span>
        <h1 className="fnaf2-text1">
          <span>   </span>
          <span className="fnaf2-text3">B</span>
          <span className="fnaf2-text4">y:Arman</span>
        </h1>
      </div>
    </div>
  )
}

export default Fnaf2
