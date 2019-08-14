import React from 'react'
import Layout from '../components/Layout'
import Banner from '../templates/components/banner'
import Footer from '../templates/components/footer'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Page Coming Soon</title>
    </Helmet>
    <Banner subCaption="Oops, Sorry!">Page Coming Soon</Banner>
    
  </Layout>
)

export default NotFoundPage
