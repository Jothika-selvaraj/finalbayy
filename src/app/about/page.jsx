import React from 'react'
import Header from '../component/common/Header'
import Footer from '../component/common/Footer'

const page = () => {
  return (
    <div>
      <Header />
        <div>
        <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <section className="max-w-3xl">
        <p className="mb-4">
          Welcome to Bayyinah. We are dedicated to...
        </p>
      </section>
    </main>
        </div>

      <Footer/>
    </div>
  )
}

export default page