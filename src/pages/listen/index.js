import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const Home = ({children}) => (
  <div>
    <Layout>
      <section>
        <header style={{backgroundImage: 'url("/img/listen.jpg")'}}>
          <h1 className="bannerTitle">Listen to What The Cancer</h1>
        </header>
      </section>
      <section className="article greenLink">
    <p>
    Here at What The Cancer, we believe in helping you understand the sensitive topic of cancer in the sea of misinformation on the internet.  Not only do we provide you with our website with Blog Posts and more, we also have all our Videos and Podcasts on all major services which are listed below to make our content accessible to you and your lifestyle.
    <br></br>
    <br></br>

    <iframe src="https://widget.spreaker.com/player?show_id=3196045&theme=dark&playlist=show&playlist-continuous=false&autoplay=false&live-autoplay=false&chapters-image=true&episode_image_position=left&hide-logo=false&hide-likes=false&hide-comments=false&hide-sharing=false" width="100%" height="350px" frameborder="0"></iframe>

    </p>
    <br></br>
    <br></br>
    </section>
    <Link to="/blog">
      <section>
        <header className="half" style={{backgroundImage: 'url("/img/home.jpg")'}}>
        <svg viewbox="0 0 10 2" className="full-svg">
  <text x="5" y="1" text-anchor="middle" font-size="1" fill="none" stroke-width=".015" stroke="#fff" font-family="sans-serif">Text stroke</text>
</svg>
          <h1 className="half-bannerTitle">Read the Blog.</h1>
        </header>
      </section>
    </Link>
    </Layout>
    

  </div>
  
  
)

export default Home
