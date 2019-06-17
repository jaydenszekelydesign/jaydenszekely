import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Email from './components/email'
import Banner from './components/banner'
import Footer from './components/footer'
import Quote from './components/Quote'
import Montage from '../components/Montage'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'


export const HomePageTemplate = ({ 
  title,
  content, 
  contentComponent,
  image,
  announcementBlurb,
  announcementImage,
  announcementLink,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
  imageNine,
  imageTen,
  imageEleven,
  imageTwelve,
  imageThirteen,
  imageFourteen,
  imageFifteen
}) => {
  const PageContent = contentComponent || Content

  return ( 
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jayden Szekey - Creative Media</title>
        <meta name="description" content={"Jayden Szekely - Creative Media, Web Designer, UI Designer, Graphic Designer, Video Creator, Film Maker, Photographer, Whangarei, Northland, New Zealand + Digital Nomad"}/>
      </Helmet>
      <Banner background={image}>{title}</Banner>
      <div className="article big-padding secondary" >
        <div className="full-portfolio">
          <PageContent content={content}/><br /><br />
          <Link className="accent" to="work-with-me">Work With Me</Link>
        </div>
      </div>
      <div className="article primary big-padding">
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
      <div className="article primary big-padding">
        <div className="left">
            <h1>Clients:</h1>
        </div>
        <div className="right">
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
          </p>
        </div>
      </div>
      <div className="article big-padding">
        <Quote quoteContents="Great design is fundamental in a digital age to communicate a message / a story through websites, video, print, social media and more" />
      </div>
      <Link to={announcementLink}>
        <Montage montageTitle={announcementBlurb} imgOne={imageOne} imgTwo={imageTwo} imgThree={imageThree} imgFour={imageFour} imgFive={imageFive} imgSix={imageSix} imgSeven={imageSeven} imgEight={imageEight} imgNine={imageNine} imgTen={imageTen} imgEleven={imageEleven} imgTwelve={imageTwelve} imgThirteen={imageThirteen} imgFourteen={imageFourteen} imgFifteen={imageFifteen}/> 
      </Link>
      <Footer />
    </Layout>
              
  )
}

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  image: PropTypes.file,
  announcementBlurb: PropTypes.string,
  announcementLink: PropTypes.string,
  announcementImage: PropTypes.file,
  imageOne: PropTypes.file,
  imageTwo: PropTypes.file,
  imageThree: PropTypes.file,
  imageFour: PropTypes.file,
  imageFive: PropTypes.file,
  imageSix: PropTypes.file,
  imageSeven: PropTypes.file,
  imageEight: PropTypes.file,
  imageNine: PropTypes.file,
  imageTen: PropTypes.file,
  imageEleven: PropTypes.file,
  imageTwelve: PropTypes.file,
  imageThirteen: PropTypes.file,
  imageFourteen: PropTypes.file,
  imageFifteen: PropTypes.file,
  contentComponent: PropTypes.func,
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <HomePageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
      image={post.frontmatter.image}
      announcementBlurb={post.frontmatter.announcementBlurb}
      announcementLink={post.frontmatter.announcementLink}
      announcementImage={post.frontmatter.announcementImage}
      image={post.frontmatter.image}
      imageOne={post.frontmatter.imageOne}
      imageTwo={post.frontmatter.imageTwo}
      imageThree={post.frontmatter.imageThree}
      imageFour={post.frontmatter.imageFour}
      imageFive={post.frontmatter.imageFive}
      imageSix={post.frontmatter.imageSix}
      imageSeven={post.frontmatter.imageSeven}
      imageEight={post.frontmatter.imageEight}
      imageNine={post.frontmatter.imageNine}
      imageTen={post.frontmatter.imageTen}
      imageEleven={post.frontmatter.imageEleven}
      imageTwelve={post.frontmatter.imageTwelve}
      imageThirteen={post.frontmatter.imageThirteen}
      imageFourteen={post.frontmatter.imageFourteen}
      imageFifteen={post.frontmatter.imageFifteen}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) { 
      id
      html
      frontmatter {
        title
        image
        announcementBlurb
        announcementLink
        announcementImage
        imageOne
        imageTwo
        imageThree
        imageFour
        imageFive
        imageSix
        imageSeven
        imageEight
        imageNine
        imageTen
        imageEleven
        imageTwelve
        imageThirteen
        imageFourteen
        imageFifteen
      }
    }
  }
`
