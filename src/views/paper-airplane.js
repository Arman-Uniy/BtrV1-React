import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './paper-airplane.css'

const PaperAirplane = (props) => {
  return (
    <div className="paper-airplane-container">
      <Helmet>
        <title>paper-airplane - BtrV1</title>
        <meta property="og:title" content="paper-airplane - BtrV1" />
      </Helmet>
      <div className="paper-airplane-container1">
        <div className="paper-airplane-container2">
          <Script
            html={`<iframe src="https://abc6782.github.io/games/papery-planes/index.html" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default PaperAirplane
