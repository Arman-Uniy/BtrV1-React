import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './super-street-fighter-ii-turbo-revival.css'

const SuperStreetFighterIITurboRevival = (props) => {
  return (
    <div className="super-street-fighter-ii-turbo-revival-container">
      <Helmet>
        <title>Super-Street-Fighter-II-Turbo-Revival - BtrV1</title>
        <meta
          property="og:title"
          content="Super-Street-Fighter-II-Turbo-Revival - BtrV1"
        />
      </Helmet>
      <div className="super-street-fighter-ii-turbo-revival-container1">
        <div className="super-street-fighter-ii-turbo-revival-container2">
          <Script
            html={`<iframe src="https://superteamxx.github.io/GBA-Emulator-Unblocked/launcher.html#super_street_fighter_2_turbo_revival" width="100%" height="100%" style="border:none;">
</iframe> `}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default SuperStreetFighterIITurboRevival
