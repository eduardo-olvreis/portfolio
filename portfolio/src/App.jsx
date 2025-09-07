import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
  )
}

export default App
