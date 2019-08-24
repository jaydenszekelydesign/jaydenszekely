import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Email from './components/email'
import TextBanner from './components/textBanner'
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
        <meta name="google-site-verification" content="Qj-P9XrSWXm24DD1HqDrbuEbf2OssAVx8-wgJZwMQlA" />
        <title>Jayden Szekey - Creative Media</title>
        <meta name="description" content={"Jayden Szekely - Creative Media, Web Designer, UI Designer, Graphic Designer, Video Creator, Film Maker, Photographer, Whangarei, Northland, New Zealand + Digital Nomad"}/>
      </Helmet>
      
      <TextBanner background={image}>
        Hi, I'm Jayden Szekely. <br />
        An audacious visual designer<br />
        & nomadic storyteller
      </TextBanner>
      <img src="/img/portfolioPic.jpg" className="full"/>
      <div className="article big-padding secondary" >
        <div className="thin-article-left">
          <PageContent content={content}/>
          <Link to="work-with-me"><br /><h4 className="accent" >Work With Me</h4></Link>
        </div>
      </div>
      <div className="article tertiary big-padding">
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
      <div className="article big-padding secondary" >
        <div className="thin-article-left">
          <p>
        I have had the privelege to work with a variety of clients from small start-ups to large non-profit organisations.  I can not wait to work with you.
          </p>
          
          <Link to="work-with-me"><br /><h4 className="accent" >Work With Me</h4></Link>
        </div>
      </div>
      
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
