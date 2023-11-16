import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './soccer-random.css'

const SoccerRandom = (props) => {
  return (
    <div className="soccer-random-container">
      <Helmet>
        <title>Soccer-Random - BtrV1</title>
        <meta property="og:title" content="Soccer-Random - BtrV1" />
      </Helmet>
      <div className="soccer-random-container1">
        <div className="soccer-random-container2">
          <Script
            html={`<iframe src="https://ubg98.github.io/SoccerRandom/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
      <div className="soccer-random-container3">
        <span className="soccer-random-text">Space to fix some code</span>
        <h1 className="soccer-random-text1">
          <span>   </span>
          <span className="soccer-random-text3">B</span>
          <span className="soccer-random-text4">y:Arman</span>
        </h1>
      </div>
    </div>
  )
}

export default SoccerRandom
