import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - BtrV1</title>
        <meta property="og:title" content="Page - BtrV1" />
      </Helmet>
      <div className="page-container1">
        <h1 className="page-text">
          <span className="page-text01">  Why Are you lost?</span>
          <br className="page-text02"></br>
          <span className="page-text03">
                                 
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="page-text04">404</span>
          <br className="page-text05"></br>
          <span className="page-text06">
                  Error code: 404 (no link available)
          </span>
          <span className="page-text07">
                               
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="page-text08"></br>
          <span className="page-text09">
                                           
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <Link to="/" className="page-navlink">
            Home
          </Link>
          <br className="page-text10"></br>
          <br className="page-text11"></br>
        </h1>
      </div>
    </div>
  )
}

export default Page
