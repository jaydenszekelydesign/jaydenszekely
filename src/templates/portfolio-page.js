import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import Layout from '../components/Layout'

export default class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Banner>Portfolio</Banner>
        <div className="article">

            {posts
              .map(({ node: post }) => (

                <Link to={post.fields.slug}>
                  <div className="listing" key={post.id} style={{backgroundImage: 'url("'+post.frontmatter.portfolioImage+'")'}}>
                    <div className="glaze">
                      <h1>{post.frontmatter.portfolioName}</h1>{post.frontmatter.portfolioPrice}
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
      filter: { frontmatter: { templateKey: { eq: "portfolio" } }}
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
            image,
            portfolioName,
            portfolioImage,
            portfolioPrice,
            portfolioLink,
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`