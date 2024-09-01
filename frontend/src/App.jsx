import './App.css'
import Home from "./pages/home/home.jsx"
import {Navigate, Routes,Route} from "react-router-dom"
import { useContext } from 'react'
import {FileContext} from "./context/fileContext.jsx"
import Chat from "./pages/chat/chat.jsx"
import SelectionPage from "./components/selectionPage.jsx"
import Quiz from "./pages/quiz/quiz.jsx"
function App() {
  const {fileContext} = useContext(FileContext)
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = '/selection' element = {fileContext? <SelectionPage/>:<Navigate to = "/"/>} />
        <Route path = '/quiz' element = {fileContext? <Quiz/>:<Navigate to = "/"/>}/>
        <Route path = '/chat' element = {fileContext? <Chat/>:<Navigate to =  "/"/>}/>
      </Routes>
    </div>
  )
}

export default App
