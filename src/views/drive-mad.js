import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './drive-mad.css'

const DriveMad = (props) => {
  return (
    <div className="drive-mad-container">
      <Helmet>
        <title>drive-mad - BtrV1</title>
        <meta property="og:title" content="drive-mad - BtrV1" />
      </Helmet>
      <div className="drive-mad-container1">
        <div className="drive-mad-container2">
          <Script
            html={`<iframe src="https://railingames.github.io/p.html?g=Drive%20Mad" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default DriveMad
