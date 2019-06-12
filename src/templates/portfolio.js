import React from 'react'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Banner from './components/banner'
import Quote from './components/Quote'
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
  leftColumn,
  bigImageOne,
  portfolioQuote,
  bigImageTwo,
  portfolioName,
  portfolioImage,
  portfolioPrice,
  portfolioLink,
  
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <Banner background={portfolioImage}>{portfolioName}</Banner>
      <div className="article big-padding">
        
        <div className="left-portfolio">
          <h4 className="accent">{jobDate}</h4>
          {leftColumn}
        </div>
        <div className="right-portfolio">
        <h5>OVERVIEW</h5>
          <p>{portfolioDescription}
          </p><br /><br />
        </div>
      </div>
      <img src={bigImageOne} className="full"/>
      <div className="article big-padding">
        <Quote quoteContents={portfolioQuote} />
      </div>
      <img src={bigImageTwo} className="full"/>
      <div className="article">
        <div className="full-portfolio">
        <p><PostContent content={content}/>
        </p><br /><br />
        </div>
      </div>
      <Split background="" recommendedTitle="DOWNLOAD MY CV" link='/cv.pdf' authorName="VIEW MY PORTFOLIO" rightLink="/portfolio" rightImage="" />  
      

      
      
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
  bigImageOne: PropTypes.file,
  portfolioQuote: PropTypes.string,
  bigImageTwo: PropTypes.file,
  leftColumn: PropTypes.string,
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
        helmet={<Helmet title={`${post.frontmatter.portfolioName} | Jayden Szekely – Creative Solutions and Design located in Whangarei, New Zealand to create the perfect outcomes for you and your business. Web Design, UI Design, Graphic Design, UX Design, Video Editing, Videographer, Designer, Website Builder, CMS, Northland`} />}
        tags={post.frontmatter.tags}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        leftColumn={post.frontmatter.leftColumn}
        jobDate={post.frontmatter.jobDate}
        bigImageOne={post.frontmatter.bigImageOne}
        bigImageTwo={post.frontmatter.bigImageTwo}
        portfolioQuote={post.frontmatter.portfolioQuote}
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
        jobDate,
        leftColumn,
        bigImageOne,
        portfolioQuote,
        bigImageTwo,
        portfolioName,
        portfolioImage,
        portfolioPrice,
        portfolioLink,
      }
    }
  }
`
