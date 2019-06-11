import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import Layout from '../components/Layout'
import { kebabCase } from 'lodash'
import Style from 'styled-components'


export default class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    

    return (
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>All Articles Jayden Szekely - Creative Media, Web Designer, UI Designer, Graphic Designer, Video Creator, Film Maker, Photographer, Whangarei, Northland, New Zealand + Digital Nomad</title>
        </Helmet>
        <div className="article">
          <div className="left-portfolio">
            <h2>Read my blog on all things design and what great Creative Solutions can do for your business</h2>
            <h4 className="accent">Refine Posts by Category</h4>
            <a href="/tags/food">Food</a><br />
            <a href="/tags/exercise">Exercise</a><br />
            <a href="/tags/sleep">Sleep</a><br />
            <a href="/tags/spirituality">Spirituality</a><br />
            <a href="/tags/">More Categories</a>
          </div>
          <div className="right-portfolio">
              {posts
                .map(({ node: post }) => (
                  <Link to={post.fields.slug}>
                    <div className="listing" key={post.id} style={{backgroundImage: 'url("'+post.frontmatter.header+'")'}}>
                      <div className="glaze">
                        <h1>{post.frontmatter.title}</h1>{post.frontmatter.date}
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
      </div>
        
      </Layout>
    )
  }
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          
          
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            header
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`