import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './monkey-mart.css'

const MonkeyMart = (props) => {
  return (
    <div className="monkey-mart-container">
      <Helmet>
        <title>monkey-mart - BtrV1</title>
        <meta property="og:title" content="monkey-mart - BtrV1" />
      </Helmet>
      <div className="monkey-mart-container1">
        <div className="monkey-mart-container2">
          <Script
            html={`<iframe src="https://prxyboss101.github.io/monkey-mart/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default MonkeyMart
