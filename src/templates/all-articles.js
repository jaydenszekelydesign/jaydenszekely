import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import Layout from '../components/Layout'
import { kebabCase } from 'lodash'
import Footer from './components/footer'


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
        <Banner>Blog</Banner>
        <div className="article big-padding">
          <div className="left">
            <h3>Read my blog on all things design and what great Creative Solutions can do for your business</h3>
          </div>
          <div className="right">
              {posts
                .map(({ node: post }) => (
                  <Link to={post.fields.slug}>
                    <div className="listing" key={post.id} style={{backgroundImage: 'url("'+post.frontmatter.header+'")'}}>
                      <div className="glaze">
                        <h2>{post.frontmatter.title}</h2>{post.frontmatter.date}
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
      </div>
      <Footer />
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