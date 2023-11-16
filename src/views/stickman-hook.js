import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './stickman-hook.css'

const StickmanHook = (props) => {
  return (
    <div className="stickman-hook-container">
      <Helmet>
        <title>stickman-hook - BtrV1</title>
        <meta property="og:title" content="stickman-hook - BtrV1" />
      </Helmet>
      <div className="stickman-hook-container1">
        <div className="stickman-hook-container2">
          <Script
            html={`<iframe src="https://railingames.github.io/p.html?g=Stickman%20Hook" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default StickmanHook
