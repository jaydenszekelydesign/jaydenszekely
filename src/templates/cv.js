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
import StarRatingComponent from 'react-star-rating-component'
import Footer from './components/footer'

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} - Jayden Szekey - Creative Media</title>
        <meta name="description" content={"My CV – Get to know me and my skills... Let's work together! – Jayden Szekely - Creative Media, Web Designer, UI Designer, Graphic Designer, Video Creator, Film Maker, Photographer, Whangarei, Northland, New Zealand + Digital Nomad"}/>
      </Helmet>
      <Banner background={cvImage}>
        {cvName}
      </Banner>
      <div className="article big-padding">
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
      <img src={cvImage} className="full"/>
      <div className="article big-padding">
      <div className="full-portfolio">
          <h5>PERSONAL QUALITIES</h5>
          <p>
          Loyal, self motivated, goal driven, enthusiastic, creative, problem solver, quick learner, out-of-the-box thinker, excellent communicator, leader, and most importantly - passionate about design.
          </p>
        </div>
        <div className="full-portfolio top-padding">
          <h5>EXPERIENCE</h5>
          <p>
          For the last 3.5 years, I have
freelanced under the name
‘Deslab Creative’ (Formally
‘Next Level Design’) and have
worked with many different
people from start-ups to larger
organisations.
          </p>
          <br /><br />
        </div>
      </div>
      <div className="article primary big-padding">
        <div className="left">
            <h1>Skills:</h1>
        </div>
        <div className="right">
            <ul>
              <li>
                Visual / Product Design <br /><StarRatingComponent name="rate2" editing={false} starCount={5} value={4}  starColor="#fff"  emptyStarColor="rgba(255,255,255,0.5)" />
              </li>
              <li>
                Front-End Web Development
                <br />
                <StarRatingComponent name="rate2" editing={false} starCount={5} value={4}  starColor="#fff"  emptyStarColor="rgba(255,255,255,0.5)" />
              </li>
              <li>
                Graphic Design
                <br />
                <StarRatingComponent name="rate2" editing={false} starCount={5} value={4}  starColor="#fff"  emptyStarColor="rgba(255,255,255,0.5)" />
              </li>
              <li>
                Video Production &amp; Post Production
                <br />
                <StarRatingComponent name="rate2" editing={false} starCount={5} value={3}  starColor="#fff"  emptyStarColor="rgba(255,255,255,0.5)" />
              </li>
              <li>
                Social Media Management
                <br />
                <StarRatingComponent name="rate2" editing={false} starCount={5} value={3}  starColor="#fff"  emptyStarColor="rgba(255,255,255,0.5)" />
              </li>
            </ul>
        </div>
      </div>
      <div className="article big-padding">
        <Quote quoteContents={cvQuote} />
      </div>
      <div className="article">
        <div className="full-portfolio">
            <PostContent content={content}/>
          <br /><br />
        </div>
      </div>
      <Split background="" recommendedTitle="DOWNLOAD MY CV" link='/cv.pdf' authorName="VIEW MY PORTFOLIO" rightLink="/portfolio" rightImage="" />  
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
