import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './emujsv3.css'

const Emujsv3 = (props) => {
  return (
    <div className="emujsv3-container">
      <Helmet>
        <title>emujsv3 - BtrV1</title>
        <meta property="og:title" content="emujsv3 - BtrV1" />
      </Helmet>
      <div className="emujsv3-container1">
        <div className="emujsv3-container2">
          <Script
            html={`<iframe src="https://arman-uniy.github.io/emupg/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Emujsv3
