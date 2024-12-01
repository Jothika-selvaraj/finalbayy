import React from 'react'
import Header from '../component/common/Header'
import Footer from '../component/common/Footer'
import FaqBanner from '../component/Faq/FaqBanner'
import FaqSection from '../component/Faq/FaqSection'

const page = () => {
  return (
    <div>
       <Header />
       <FaqBanner />
       <FaqSection />
       <Footer />
    </div>
  )
}

export default page