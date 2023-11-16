import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>BtrV1</title>
        <meta property="og:title" content="BtrV1" />
      </Helmet>
      <div className="home-container01">
        <span className="home-text">V 1.4</span>
      </div>
      <div className="home-container02">
        <img alt="image" src="/pacman_hd-200h.png" className="home-image" />
        <div className="home-container03">
          <span className="home-text1">Btr Games</span>
          <h1 className="home-text2">I am Just Better</h1>
        </div>
      </div>
      <div className="home-container04">
        <div className="home-container05">
          <Link to="/getting-over-it12" className="home-navlink">
            <img
              alt="image"
              src="/retro-bowl-300h-300h.png"
              className="home-image01"
            />
          </Link>
        </div>
        <div className="home-container06">
          <Link to="/basketball-random" className="home-navlink01">
            <img
              alt="image"
              src="/basket-random-300h-300h.png"
              className="home-image02"
            />
          </Link>
        </div>
        <div className="home-container07">
          <Link to="/getting-over-it11" className="home-navlink02">
            <img
              alt="image"
              src="/images%20(1)-300h.png"
              className="home-image03"
            />
          </Link>
        </div>
        <div className="home-container08">
          <Link to="/getting-over-it1" className="home-navlink03">
            <img
              alt="image"
              src="/getting-over-it-300h-300h.png"
              className="home-image04"
            />
          </Link>
        </div>
      </div>
      <div className="home-container09">
        <div className="home-container10">
          <Link to="/fnaf1" className="home-navlink04">
            <img
              alt="image"
              src="/fnaf-300h-300h.png"
              className="home-image05"
            />
          </Link>
        </div>
        <div className="home-container11">
          <Link to="/fnaf2" className="home-navlink05">
            <img
              alt="image"
              src="/fnaf%202-300h-300h.png"
              className="home-image06"
            />
          </Link>
        </div>
        <div className="home-container12">
          <Link to="/fnaf3" className="home-navlink06">
            <img
              alt="image"
              src="/fnaf3-300h-300h.png"
              className="home-image07"
            />
          </Link>
        </div>
        <div className="home-container13">
          <Link to="/fnaf4" className="home-navlink07">
            <img
              alt="image"
              src="/fnaf-4-300h-300h.png"
              className="home-image08"
            />
          </Link>
        </div>
      </div>
      <div className="home-container14">
        <div className="home-container15">
          <a
            href="https://sm64-9ot.pages.dev/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="image"
              src="/images%20(3)-300h.jpeg"
              className="home-image09"
            />
          </a>
        </div>
        <div className="home-container16">
          <Link to="/monkey-mart1" className="home-navlink08">
            <img alt="image" src="/splash-300h.jpg" className="home-image10" />
          </Link>
        </div>
        <div className="home-container17">
          <Link to="/fnaf-custom" className="home-navlink09">
            <img
              alt="image"
              src="/images%20(4)-300h.jpeg"
              className="home-image11"
            />
          </Link>
        </div>
        <div className="home-container18">
          <Link to="/boxin-random" className="home-navlink10">
            <img
              alt="image"
              src="/images%20(5)-300h.jpeg"
              className="home-image12"
            />
          </Link>
        </div>
      </div>
      <div className="home-container19">
        <div className="home-container20">
          <Link to="/volley-random" className="home-navlink11">
            <img
              alt="image"
              src="/qfskpygvczeqrcoh5wimyy_-tn1b3ozlcnai3xv--vx-olcrgeiqljuwi2mrraddwjpvq3eevpt9gwf8t417-ugyxdxcke_06xdsrqsfjnnx40wxvziebon-msqzyivawq9ivnvtlho6qanid3pzlvmfnjruk62zoqe%3Ds2048-300h.jpg"
              className="home-image13"
            />
          </Link>
        </div>
        <div className="home-container21">
          <Link to="/soccer-random" className="home-navlink12">
            <img
              alt="image"
              src="/soccer-random-300h.png"
              className="home-image14"
            />
          </Link>
        </div>
        <div className="home-container22">
          <Link to="/madness-hydraulic" className="home-navlink13">
            <img
              alt="image"
              src="/hydraulic-300h.webp"
              className="home-image15"
            />
          </Link>
        </div>
        <div className="home-container23">
          <Link to="/basketball-starts" className="home-navlink14">
            <img
              alt="image"
              src="/basketball-stars-300h-300h.png"
              className="home-image16"
            />
          </Link>
        </div>
      </div>
      <div className="home-container24">
        <Link to="/page-2" className="home-navlink15 button">
          &gt;
        </Link>
      </div>
    </div>
  )
}

export default Home
