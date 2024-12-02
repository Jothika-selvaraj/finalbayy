import React from 'react'
import Header from '../component/common/Header'
import Footer from '../component/common/Footer'
import Coursebanner from '../component/Course/Coursebanner'
import Section1 from '../component/Course/Section1'
import Section from '../component/Course/Section'
import Section2 from '../component/Course/Section2'

const page = () => {
  return (
    <div>
        <Header />
        <Coursebanner />
        <Section />
        <Section1 />
        <Section2 />
        <Footer />
    </div>
  )
}

export default page