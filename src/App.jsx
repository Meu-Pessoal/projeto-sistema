import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error from "./routes/Error"
import Home from "./routes/Home"
import Cliente from "./routes/Cliente"

function App() {

  return (
    // Habilita a navegação por rotas na aplicação
    <BrowserRouter>
        <main>
          {/* Gerencia a exibição dos componentes com base na url */}
          <Routes>
            <Route path="*" element={<Error  />}/>
            <Route path="/" element={<Home  />}/>
            <Route path="/cliente" element={<Cliente  />}/>
          </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App