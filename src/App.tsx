import ListGroup from './components/ListGroup'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  const items = ["Rupgonj", "Islamabad", "Dhaka", "Sylhet", "London"];

  return (
    <>
      < ListGroup items={items} heading='City'/>
    </>
  )
}

export default App
