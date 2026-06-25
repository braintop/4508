import AddTodo from './Components/AddTodo'
import './App.css'
import GetAllTodos from './Components/GetAllTodos'

function App() {
  return (
    <main className="app">
      <h1>Firebase — שיעור ראשון</h1>
      <AddTodo />
      <GetAllTodos />
    </main>
  )
}

export default App
