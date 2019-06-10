import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Email from './components/email'
import Banner from './components/banner'
import Montage from '../components/Montage'
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
      <Banner background={image}>{title}</Banner>
      <div className="article big-padding">
      <div className="left-portfolio">
          <h4>I provide Creative Solutions for every problem.<br /><br /><hr /></h4>
          <img src={imageOne} />
        </div>
        <div className="right-portfolio">
        <p><PageContent content={content}/>
        </p><br /><br />
        </div>
      </div>
      <Link to={announcementLink}>
        <Montage montageTitle={announcementBlurb} imgOne={imageOne} imgTwo={imageTwo} imgThree={imageThree} imgFour={imageFour} imgFive={imageFive} imgSix={imageSix} imgSeven={imageSeven} imgEight={imageEight} imgNine={imageNine} imgTen={imageTen} imgEleven={imageEleven} imgTwelve={imageTwelve} imgThirteen={imageThirteen} imgFourteen={imageFourteen} imgFifteen={imageFifteen}/> 
      </Link>
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
