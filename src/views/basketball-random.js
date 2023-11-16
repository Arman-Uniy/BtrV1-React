import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './basketball-random.css'

const BasketballRandom = (props) => {
  return (
    <div className="basketball-random-container">
      <Helmet>
        <title>Basketball-random - BtrV1</title>
        <meta property="og:title" content="Basketball-random - BtrV1" />
      </Helmet>
      <div className="basketball-random-container1">
        <div className="basketball-random-container2">
          <Script
            html={`<iframe src="https://basketrandom.github.io/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default BasketballRandom
