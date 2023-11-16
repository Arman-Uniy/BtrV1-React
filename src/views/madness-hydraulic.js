import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './madness-hydraulic.css'

const MadnessHydraulic = (props) => {
  return (
    <div className="madness-hydraulic-container">
      <Helmet>
        <title>Madness-Hydraulic - BtrV1</title>
        <meta property="og:title" content="Madness-Hydraulic - BtrV1" />
      </Helmet>
      <div className="madness-hydraulic-container1">
        <div className="madness-hydraulic-container2">
          <Script
            html={`<iframe src="https://educationroomlearning.web.app/games/madnessh/index.html" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default MadnessHydraulic
