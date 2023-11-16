import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './volley-random.css'

const VolleyRandom = (props) => {
  return (
    <div className="volley-random-container">
      <Helmet>
        <title>Volley-Random - BtrV1</title>
        <meta property="og:title" content="Volley-Random - BtrV1" />
      </Helmet>
      <div className="volley-random-container1">
        <div className="volley-random-container2">
          <Script
            html={`<iframe src="https://ubg98.github.io/VolleyRandom/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
      <div className="volley-random-container3">
        <span className="volley-random-text">Space to fix some code</span>
        <h1 className="volley-random-text1">
          <span>   </span>
          <span className="volley-random-text3">B</span>
          <span className="volley-random-text4">y:Arman</span>
        </h1>
      </div>
    </div>
  )
}

export default VolleyRandom
