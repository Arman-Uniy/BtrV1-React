import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './sm64.css'

const Sm64 = (props) => {
  return (
    <div className="sm64-container">
      <Helmet>
        <title>Sm64 - BtrV1</title>
        <meta property="og:title" content="Sm64 - BtrV1" />
      </Helmet>
      <div className="sm64-container1">
        <div className="sm64-container2">
          <Script
            html={`<iframe src="https://arkshocer.github.io/sm64/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
      <div className="sm64-container3">
        <span className="sm64-text">Space to fix some code</span>
        <h1 className="sm64-text1">
          <span>   </span>
          <span className="sm64-text3">B</span>
          <span className="sm64-text4">y:Arman</span>
        </h1>
      </div>
    </div>
  )
}

export default Sm64
