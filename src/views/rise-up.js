import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './rise-up.css'

const RiseUp = (props) => {
  return (
    <div className="rise-up-container">
      <Helmet>
        <title>rise-up - BtrV1</title>
        <meta property="og:title" content="rise-up - BtrV1" />
      </Helmet>
      <div className="rise-up-container1">
        <div className="rise-up-container2">
          <Script
            html={`<iframe src="https://railingames.github.io/p.html?g=Rise%20Higher" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default RiseUp
