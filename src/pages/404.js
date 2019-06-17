import React from 'react'
import Layout from '../components/Layout'
import Banner from '../templates/components/banner'
import Footer from '../templates/components/footer'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Ugh - Page Not Found (404) - Jayden Szekey - Creative Media</title>
    </Helmet>
    <Banner background="../img/ugh.jpg" subCaption="Ugh, You may have come across a page that does not exist or is broken...">Page Not Found</Banner>
    
  </Layout>
)

export default NotFoundPage
