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
          <title>Galavanting With Jayden - Digital Nomad and Travel Blogger – Creative Media, Web Designer, UI Designer, Graphic Designer, Video Creator, Film Maker, Photographer, Whangarei, Northland, New Zealand</title>
        </Helmet>
        <Banner background="img/blog-header.jpg" subCaption="Introducing Galavanting with Jayden">Stories of Earth</Banner>
        <div className="article big-padding">
          <div className="full-portfolio">
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