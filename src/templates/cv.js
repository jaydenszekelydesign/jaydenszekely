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
    <div className="page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} - Jayden Szekey - Creative Media</title>
        <meta name="description" content={"My CV – Get to know me and my skills... Let's work together! – Jayden Szekely - Creative Media, Web Designer, UI Designer, Graphic Designer, Video Creator, Film Maker, Photographer, Whangarei, Northland, New Zealand + Digital Nomad"}/>
      </Helmet>
      <Banner background={cvImage}>
        {cvName}
      </Banner>
      <div className="article big-padding secondary" >
        <div className="left">
          <h1 className="accent">Hello!</h1>
        </div>
        <div className="right">
          <p>{cvDescription}</p>
          <a href="https://drive.google.com/open?id=1rNDI_6OPdE0XdYBa3ODBMfN8dWtPmRxW" target="_blank"><br /><h4 className="accent" >Download my CV</h4></a>
        </div>
      </div>
      <img src={cvImage} className="full"/>
      <div className="article big-padding">
      <div className="left">
          <h2>Personal Qualities:</h2>
      </div>
      <div className="right">
          <p>
          Loyal, self motivated, goal driven, enthusiastic, creative, problem solver,
quick learner, out-of-the-box thinker, excellent communicator, leader, and
most importantly - passionate about great (whilst functional) design.
          </p>
        </div>
      </div>
      <div className="article tertiary big-padding">
        <div className="left">
          <h2>Experience:</h2>
        </div>
        <div className="right">
          <p>
            I have experience working with a range of clients and in-house positions for
            independent ventures, small companies and large non-profit organisations
            and I am now looking for my next challenge.
          </p>
          <h4 className="half-top-padding">Freelance Creative</h4>
          <p>
            2015 to Current<br />
            Freelance – NZ
          </p>
          <h4 className="half-top-padding">Marketing Manager</h4>
          <p>
            May 2019 to Current (Part Time)<br />
            The Outdoor Room Company – Whangarei, NZ
          </p>
          <h4 className="half-top-padding">Design &amp; Production Intern</h4>
          <p>
            Feb 2019 to June 2019<br />
            ARISE Church – Whangarei, NZ
          </p>
        </div>
      </div>
      <div className="article big-padding">
      <div className="left">
          <h2>Qualifications &amp; Awards:</h2>
      </div>
      <div className="right">
          <p>
            New Zealand Certificate in Arts and Design<br />
            New Zealand Certificate in Digital Media<br />
            Honours from the Awwwards & Nomination from CSS Nectar<br />
          </p>
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
      <div className="article big-padding secondary" >
        <div className="left">
          <h1 className="accent">Thanks!</h1>
        </div>
        <div className="right">
          <p>I look forward to working with you.  Please feel free to get in touch if you have any questions, I can't wait to meet you!</p>
          <a href="https://drive.google.com/open?id=1rNDI_6OPdE0XdYBa3ODBMfN8dWtPmRxW" target="_blank"><br /><h4 className="accent" >Download my CV</h4></a>
        </div>
      </div>
      <Footer />
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
