import AddTodo from './Components/AddTodo'
import './App.css'
import GetAllTodos from './Components/GetAllTodos'
import AddProduct from './Components/AddProduct'
import AskGemini from './Components/AskGemini'
import SimpleChat from './Components/SimpleChat'
function App() {
  return (
    <main className="app">
      <h1>Firebase — שיעור ראשון</h1>
      {/* <AskGemini />  */}
      <AddTodo />
      <GetAllTodos />
      {/* <SimpleChat /> */}
    </main>
  )
}

export default App
