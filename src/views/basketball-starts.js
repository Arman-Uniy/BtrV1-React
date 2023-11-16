import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './basketball-starts.css'

const BasketballStarts = (props) => {
  return (
    <div className="basketball-starts-container">
      <Helmet>
        <title>Basketball-starts - BtrV1</title>
        <meta property="og:title" content="Basketball-starts - BtrV1" />
      </Helmet>
      <div className="basketball-starts-container1">
        <div className="basketball-starts-container2">
          <Script
            html={`<iframe src="https://ubg98.github.io/BasketballStars/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default BasketballStarts
