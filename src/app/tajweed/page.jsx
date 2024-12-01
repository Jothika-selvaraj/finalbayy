import React from 'react'
import Header from '../component/common/Header'
import Section1 from '../component/Tajweed/Section1'
import Section2 from '../component/Tajweed/Section2'
import Section3 from '../component/Tajweed/Section3'
import Footer from '../component/common/Footer'

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