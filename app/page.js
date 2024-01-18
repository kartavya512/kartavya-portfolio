
import Navbar from './components/Navbar'
import My from './components/my'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Work from './components/Work'

export default function Home() {
  return (
    < div className='bg-white lg:mr-[10%] lg:ml-[10%] lg:border'>
      <My></My>
      <Skills />
      <Work />
      <Footer />

    </div>
  )
}
