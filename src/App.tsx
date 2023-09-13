import ListGroup from './components/ListGroup'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  const items = ["Rupgonj", "Islamabad", "Dhaka", "Sylhet", "Hridoy","Hossain"];
const handleSelectItem = (item:string) =>{
  console.log(item);
}
  return (
    <>
      < ListGroup items={items} heading='City'onSelectItem={handleSelectItem}/>
    </>
  )
}

export default App
