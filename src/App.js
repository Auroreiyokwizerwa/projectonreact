import React ,{useState} from 'react';
import Navbar from './components/Navbar';
import MyShop from './components/Linginier';
import Cart from './components/Cart';
import NewItem from './components/NewItem';

const App = () => {
  const [show,setShow] = useState(false);
  const [cart,setCart] = useState([]);


  const AddNewItem= (newitem) =>{
console.log(newitem)
  }

  return(
    <>
    <Navbar setShow={setShow} />
    <MyShop setShow={setShow} show={show} /> 
    <Cart /> 
<NewItem  onAdd={NewItem}/>
    </>



  )
}
export default App