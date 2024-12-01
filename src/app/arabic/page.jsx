import React from 'react'
import Header from '../component/common/Header'
import Section1 from '../component/Arabic/Section1'
import Section3 from '../component/Arabic/Section3'
import Footer from '../component/common/Footer'
import Section2 from '../component/Arabic/Section2'

const page = () => {
  return (
    <div>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Footer />
    </div>
  )
}

export default page