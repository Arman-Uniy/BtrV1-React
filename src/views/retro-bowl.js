import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './retro-bowl.css'

const RetroBowl = (props) => {
  return (
    <div className="retro-bowl-container">
      <Helmet>
        <title>retro-bowl - BtrV1</title>
        <meta property="og:title" content="retro-bowl - BtrV1" />
      </Helmet>
      <div className="retro-bowl-container1">
        <div className="retro-bowl-container2">
          <Script
            html={`<iframe src="https://educationroomlearning.web.app/games/rb/index.html" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default RetroBowl
