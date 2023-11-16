import React from 'react'

import { Helmet } from 'react-helmet'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>test - BtrV1</title>
        <meta property="og:title" content="test - BtrV1" />
      </Helmet>
      <iframe
        src="https://play.teleporthq.io/projects/astonishing-cheery-dove-9103tu/preview/d1b5e013-4211-41b4-982f-6593de478f88"
        allowFullScreen
        className="test-iframe"
      ></iframe>
    </div>
  )
}

export default Test
