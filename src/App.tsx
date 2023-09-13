// import ListGroup from './components/ListGroup'
import 'bootstrap/dist/css/bootstrap.css'
import Button from './components/Button'
import Alert from './components/Alert'
import { useState } from 'react'
//import Alert from './components/Alert'
function App() {
//   const items = ["Rupgonj", "Islamabad", "Dhaka", "Sylhet", "Hridoy","Hossain"];
// const handleSelectItem = (item:string) =>{
//   console.log(item);
// }

const [visibility,setVisivility] = useState(false);
  return (
    <>
      {/* < ListGroup items={items} heading='City'onSelectItem={handleSelectItem}/> */}
      {/* <Alert>
        Hello  <span>World</span>
      </Alert> */}
    {visibility && <Alert onClose={()=>setVisivility(false)}>My Alert</Alert>}
    <Button color='danger' onClick={()=>setVisivility(true)}>
      My Button
    </Button>
    </>
  )
}

export default App
