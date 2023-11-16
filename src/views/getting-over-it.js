import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './getting-over-it.css'

const GettingOverIt = (props) => {
  return (
    <div className="getting-over-it-container">
      <Helmet>
        <title>Getting-over-it - BtrV1</title>
        <meta property="og:title" content="Getting-over-it - BtrV1" />
      </Helmet>
      <div className="getting-over-it-container1">
        <div className="getting-over-it-container2">
          <Script
            html={`<iframe src="https://gettingoveritunblocked.github.io/" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default GettingOverIt
