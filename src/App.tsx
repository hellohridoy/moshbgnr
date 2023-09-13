// import ListGroup from './components/ListGroup'
import 'bootstrap/dist/css/bootstrap.css'
import Alert from './components/Alert'
function App() {
//   const items = ["Rupgonj", "Islamabad", "Dhaka", "Sylhet", "Hridoy","Hossain"];
// const handleSelectItem = (item:string) =>{
//   console.log(item);
// }
  return (
    <>
      {/* < ListGroup items={items} heading='City'onSelectItem={handleSelectItem}/> */}
      <Alert>
        Hello  <span>World</span>
      </Alert>
    </>
  )
}

export default App
