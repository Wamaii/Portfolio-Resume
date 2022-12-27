import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'



export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar scrollbar-track-gray-400\20 scrollbar-thumb-orange-400/'>
      <Head>
        <title>Create Next App</title>
      </Head>

      
      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>


      <section id='experience' className='snap-center'>
        <Experience />
      </section>

    
      <section id='skills' className='snap-start'>
          <Skills/>
      </section>

     
      <section id='contact' className='snap-start'>
          <ContactMe/>
      </section>

      <Link href="#hero">
          <footer className='sticky bottom-5 w-full cursor-pointer'>
              <div className='flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  </svg>
              </div>
          </footer>
      </Link>

    </div>
  )
}
