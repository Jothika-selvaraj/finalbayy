'use client'

import Header from '@/app/component/common/Header';
import Section1 from './component/Home/Section1';
import Banner from './component/Home/Banner';
import Section2 from './component/Home/Section2';
import Section3 from './component/Home/Section3';
import Testimonials from './component/Home/Testimonials';
import Blog from './component/Home/Blog';
import Faq from './component/Home/Faq';
import Footer from './component/common/Footer';





export default function Home() {
  return (
    <>
    <Header/>
    <Banner />
    <Section1 />
    <Section2 />
    <Section3 />
     <Testimonials />
     <Blog />
      <Faq />
     <Footer />
    </>
  )
}
