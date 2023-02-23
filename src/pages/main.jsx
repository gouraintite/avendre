import Nav from '../components/nav'
import Banner from '../components/banner'
import Feature from '../components/features'
import About from '../components/about'
import Footer from '../components/footers'
import FadeReload from '../components/fadeReload'
import '../App.css'

function Main() {

  return (
    <FadeReload >
      <div className='lg:mx-20 md:mx-20'>
        <Nav />
        <div className='pt-20'></div>
        <Banner />
        <Feature />
        <About />
      </div>
      <Footer />
    </FadeReload>
  )
}

export default Main
