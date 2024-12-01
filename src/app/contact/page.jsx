import React from 'react'
import Header from '../component/common/Header'
import Footer from '../component/common/Footer'
import ContactBanner from '../component/Contact/ContactBanner'
import Section1 from '../component/Contact/Section1'
import Section2 from '../component/Contact/Section2'

const page = () => {
  return (
    <div>
      <Header />
      <ContactBanner />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  )
}

export default page