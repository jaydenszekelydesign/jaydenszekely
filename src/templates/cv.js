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
import Pdf from "react-to-pdf";

const ref = React.createRef();

export const CvPostTemplate = ({
  content,
  contentComponent,
  cvDescription,
  image,
  title,
  jobDate,
  leftColumn,
  bigImageOne,
  cvQuote,
  bigImageTwo,
  cvName,
  cvImage,
  cvLink,
  
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      
      <Banner background={cvImage}>
        {cvName}
      </Banner>
      <div className="article big-padding" ref={ref}>
        <div className="left">
          <h4 className="accent">
            {jobDate}
          </h4>
          {leftColumn}
        </div>
        <div className="right">
          <h5>OVERVIEW</h5>
          <p>
            {cvDescription}
          </p>
          <br /><br />
        </div>

      </div>
      <div className="article">
      <div className="left">
          <h4 className="accent">
            {jobDate}
          </h4>
          {leftColumn}
        </div>
        <div className="right">
          <h5>PERSONAL QUALITIES</h5>
          <p>
          Loyal, self motivated, goal driven, enthusiastic, creative, problem solver, quick learner, out-of-the-box thinker, excellent communicator, leader, and most importantly - passionate about design.
          </p>
          <br /><br />
        </div>
      </div>
      <img src={cvImage} className="full"/>
      <div className="article secondary big-padding">
        <div className="left">
            <h1>Skills:</h1>
        </div>
        <div className="right">
            <ul>
              <li>
                Visual / Product Design
              </li>
              <li>
                UI Design / Thinking
              </li>
              <li>
                Front-End Web Development
              </li>
              <li>
                Graphic Design
              </li>
              <li>
                Video Production &amp; Post Production
              </li>
              <li>
                Social Media Management
              </li>
              <li>
                Clear communication
              </li>
              <li>
                Creating clear solutions for clients
              </li>
            </ul>
        </div>
      </div>
      <img src={image} alt="image" className="full" />
      <div className="article big-padding">
        <Quote quoteContents={cvQuote} />
      </div>
      <img src={bigImageTwo} className="full"/>
      <div className="article">
        <div className="full-cv">
          <p>
            <PostContent content={content}/>
          </p>
          <br /><br />
        </div>
      </div>
      <Split background="" recommendedTitle="DOWNLOAD MY CV" link='/work-with-me/cv' authorName="VIEW MY PORTFOLIO" rightLink="/cv" rightImage="" />  
    </div>
    
  )
}

CvPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  cvDescription: PropTypes.string,
  image: PropTypes.file,
  helmet: PropTypes.instanceOf(Helmet),
  cvName: PropTypes.string,
  title: PropTypes.string,
  jobDate: PropTypes.string,
  bigImageOne: PropTypes.file,
  cvQuote: PropTypes.string,
  bigImageTwo: PropTypes.file,
  leftColumn: PropTypes.string,
  cvImage: PropTypes.file,
  cvLink: PropTypes.string,
}

const CvPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <CvPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        cvDescription={post.frontmatter.cvDescription}
        helmet={<Helmet title={`${post.frontmatter.cvName} | Jayden Szekely – Creative Solutions and Design located in Whangarei, New Zealand to create the perfect outcomes for you and your business. Web Design, UI Design, Graphic Design, UX Design, Video Editing, Videographer, Designer, Website Builder, CMS, Northland`} />}
        tags={post.frontmatter.tags}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        leftColumn={post.frontmatter.leftColumn}
        jobDate={post.frontmatter.jobDate}
        bigImageOne={post.frontmatter.bigImageOne}
        bigImageTwo={post.frontmatter.bigImageTwo}
        cvQuote={post.frontmatter.cvQuote}
        cvName={post.frontmatter.cvName}
        cvImage={post.frontmatter.cvImage}
        cvLink={post.frontmatter.cvLink}
      />
    </Layout>
  )
}

CvPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default CvPost

export const cvQuery = graphql`
  query CvPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        tags
        cvDescription,
        image,
        title,
        jobDate,
        leftColumn,
        bigImageOne,
        cvQuote,
        bigImageTwo,
        cvName,
        cvImage,
        cvLink,
      }
    }
  }
`
