import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './fnaf3.css'

const Fnaf3 = (props) => {
  return (
    <div className="fnaf3-container">
      <Helmet>
        <title>fnaf3 - BtrV1</title>
        <meta property="og:title" content="fnaf3 - BtrV1" />
      </Helmet>
      <div className="fnaf3-container1">
        <div className="fnaf3-container2">
          <Script
            html={`<iframe src="https://fnafunblocked.github.io/3/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
      <div className="fnaf3-container3">
        <span className="fnaf3-text">Space to fix some code</span>
        <h1 className="fnaf3-text1">
          <span>   </span>
          <span className="fnaf3-text3">B</span>
          <span className="fnaf3-text4">y:Arman</span>
        </h1>
      </div>
    </div>
  )
}

export default Fnaf3
