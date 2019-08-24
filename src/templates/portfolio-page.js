import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import TextBanner from './components/textBanner'
import Layout from '../components/Layout'

export default class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Work (Portfolio) - Jayden Szekey - Creative Media</title>
          <meta name="description" content={"View my Portfolio – Jayden Szekely - Creative Media, Web Designer, UI Designer, Graphic Designer, Video Creator, Film Maker, Photographer, Whangarei, Northland, New Zealand + Digital Nomad"}/>
        </Helmet>
        <TextBanner>My Work</TextBanner>
        <div className="article big-padding secondary" >
        <div className="left">
          <h1>01.</h1>
        </div>
        <div className="right">
          <p>
            I have a passion to create stunning and functional solutions for my clients.  This collection highlights only a handful of my work and I am happy to provide further samples of my work if there is something in particular you would like to see. <h4>Please Note that I am still adding content to my new portfolio, please check back in a couple of days for an updated curation.</h4> 
          </p>
          <Link to="work-with-me"><br /><h4 className="accent" >Work With Me</h4></Link>
        </div>
      </div>
        <div>

            {posts
              .map(({ node: post }) => (

                <Link to={post.fields.slug}>
                  <div className="listing" key={post.id} style={{backgroundImage: 'url("'+post.frontmatter.portfolioImage+'")'}}>
                    <div className="glaze">
                      <h2 className="no-margin-bottom">{post.frontmatter.portfolioName}</h2>{post.frontmatter.jobDate}
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </Layout>
    )
  }
}

Portfolio.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { discoverable: { eq: "yes" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          
          
          fields {
            slug
          }
          frontmatter {
            portfolioDescription,
            discoverable,
            image,
            portfolioName,
            portfolioImage,
            jobDate,
            portfolioLink,
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`