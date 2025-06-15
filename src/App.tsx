import Contato from './components/Contato'
import Habilidade from './components/Habilidade'
import Header from './components/Header/Header'
import Projetos from './components/Projetos'
import Introduction from './components/Sobre'
import { GlobalCss } from './styles'

const App = () => {
  return (
    <div>
      <GlobalCss />
      <div className="container">
        <Header />
        <Introduction />
        <Habilidade />
        <Projetos />
        <Contato />
      </div>
    </div>
  )
}

export default App
