import Header from "./components/Header/Header.jsx"
import Hero from "./components/Hero/Hero.jsx"
import About from "./components/About/About.jsx"
import Projects from "./components/Projects/Projects.jsx"
import Contact from "./components/Contact/Contact.jsx"

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
      </main>
      <footer>
        <Contact></Contact>
      </footer>
    </div>
  )
}

export default App
