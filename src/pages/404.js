import React from 'react'
import Layout from '../components/Layout'
import Banner from '../templates/components/banner'
import Footer from '../templates/components/footer'

const NotFoundPage = () => (
  <Layout>
    <Banner subCaption="Ugh, You may have come across a page that does not exist or is broken...">Page Not Found</Banner>
    <img src="../img/ugh.jpg" className="full" />
    <Footer />
    
  </Layout>
)

export default NotFoundPage
