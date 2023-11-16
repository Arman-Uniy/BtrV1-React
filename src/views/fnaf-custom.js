import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './fnaf-custom.css'

const FnafCustom = (props) => {
  return (
    <div className="fnaf-custom-container">
      <Helmet>
        <title>fnaf-custom - BtrV1</title>
        <meta property="og:title" content="fnaf-custom - BtrV1" />
      </Helmet>
      <div className="fnaf-custom-container1">
        <div className="fnaf-custom-container2">
          <div className="fnaf-custom-container3">
            <Script
              html={`<iframe src="https://wellsousaaa.github.io/Five-Nights-at-Freddys-Web/" width="100%" height="100%" style="border:none;">
</iframe> `}
            ></Script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FnafCustom
