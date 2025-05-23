import './App.css'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import Project from './Components/Project/Project'
import Service from './Components/Service/Service'
import Team from './Components/Teams/Team'
import Testimonial from './Components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <Service/>
      <Project/>
      <Testimonial/>
      <Team/>
      <Contact/>
    </>
  )
}

export default App
