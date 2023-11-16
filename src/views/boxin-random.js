import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './boxin-random.css'

const BoxinRandom = (props) => {
  return (
    <div className="boxin-random-container">
      <Helmet>
        <title>boxin-random - BtrV1</title>
        <meta property="og:title" content="boxin-random - BtrV1" />
      </Helmet>
      <div className="boxin-random-container1">
        <div className="boxin-random-container2">
          <Script
            html={`<iframe src="https://unblocked-games-786.github.io/Boxing-Random/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default BoxinRandom
