import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Banner from './components/banner'
import Split from './components/split'
import Footer from './components/footer'
import Content, { HTMLContent } from '../components/Content'
import Helmet from 'react-helmet'
// import mediumZoom from 'medium-zoom'

export const AboutPageTemplate = ({ title, content, contentComponent, full_image, leftBackground, leftTitle, leftLink, rightTitle, rightDescription, rightUrl, rightBackground }) => {
  const PageContent = contentComponent || Content

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} - Jayden Szekey - Creative Media</title>
        <meta name="description" content={"About Me – Jayden Szekely - Creative Media, Web Designer, UI Designer, Graphic Designer, Video Creator, Film Maker, Photographer, Whangarei, Northland, New Zealand + Digital Nomad"}/>
      </Helmet>
      <Banner background={full_image}>{title}</Banner>
      <div className="article big-padding secondary" >
        <div className="left">
          <h1>01.<br />About:</h1>
        </div>
        <div className="right">
          <PageContent content={content}/>
          <Link to="work-with-me"><br /><h4 className="accent" >Work With Me</h4></Link>
        </div>
      </div>
    </Layout>
              
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  full_image: PropTypes.file,
  leftBackground: PropTypes.file,
  leftTitle: PropTypes.string,
  leftLink: PropTypes.string,
  rightTitle: PropTypes.string,
  rightDescription: PropTypes.string,
  rightUrl: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      full_image={post.frontmatter.full_image}
      leftBackground={post.frontmatter.leftBackground}
      leftTitle={post.frontmatter.leftTitle}
      leftLink={post.frontmatter.leftLink}
      rightTitle={post.frontmatter.rightTitle}
      rightDescription={post.frontmatter.rightDescription}
      rightUrl={post.frontmatter.rightUrl}
      content={post.html}
    />
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) { 
      id
      html
      frontmatter {
        title
        full_image
        leftBackground
        leftTitle
        leftLink
        rightTitle
        rightDescription
        rightUrl
      }
    }
  }
`
