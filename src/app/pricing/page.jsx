import React from 'react'
import Header from '../component/common/Header'
import Pricing from '../component/Pricing/Pricing'
import Section from '../component/Pricing/Section'
import Footer from '../component/common/Footer'

const page = () => {
  return (
    <div>
        <Header />
        <Pricing />
        <Section />
        <Footer />
    </div>
  )
}

export default page