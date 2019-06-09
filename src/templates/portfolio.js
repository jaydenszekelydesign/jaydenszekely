import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Split from './components/split'
import Content, { HTMLContent } from '../components/Content'

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  portfolioDescription,
  image,
  title,
  jobDate,
  portfolioName,
  portfolioImage,
  portfolioPrice,
  portfolioLink,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <Banner background={portfolioImage}>{portfolioName}</Banner>
      <div className="article">
        <div class="left-portfolio">
          <h4>DEC – 2018</h4>
          <a>Graphic Design</a><br />
          <a>Branding</a><br />
          <a>Video</a>
        </div>
        <div class="right-portfolio">
          <p>{portfolioDescription}
          </p><br /><br />
        </div>
      </div>
      <img src="../../img/home.jpg" className="full"/>
      <div className="secondHalf">
      <p className="article">
        <PostContent content={content} className="full" />
      </p>
      </div>
      
      
      
      <Link to="/cv">
      <section>
        <header className="half" style={{backgroundImage: 'url("/img/home.jpg")'}}>
          <h1 className="trans-out">MY CV</h1>
          <h1 className="half-bannerTitle">My CV.</h1>
        </header>
      </section>
    </Link>
      
      
    </div>
  )
}

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  portfolioDescription: PropTypes.string,
  image: PropTypes.file,
  helmet: PropTypes.instanceOf(Helmet),
  portfolioName: PropTypes.string,
  title: PropTypes.string,
  jobDate: PropTypes.string,
  portfolioImage: PropTypes.file,
  portfolioPrice: PropTypes.string,
  portfolioLink: PropTypes.string,
}

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PortfolioPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        portfolioDescription={post.frontmatter.portfolioDescription}
        helmet={<Helmet title={`${post.frontmatter.portfolioName} | A Portfolio from What The Cancer`} />}
        tags={post.frontmatter.tags}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        jobDate={post.frontmatter.jobDate}
        portfolioName={post.frontmatter.portfolioName}
        portfolioImage={post.frontmatter.portfolioImage}
        portfolioPrice={post.frontmatter.portfolioPrice}
        portfolioLink={post.frontmatter.portfolioLink}
      />
    </Layout>
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const portfolioQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        portfolioDescription,
        image,
        title,
        portfolioName,
        portfolioImage,
        portfolioPrice,
        portfolioLink,
      }
    }
  }
`
