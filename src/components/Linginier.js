import React  from 'react';
import list from './data';
import Cards from './Cards';
import { Modal,Button } from 'react-bootstrap';
import NewItem from './NewItem';
import linginier from './styles.css/linginier.css'


const Linginier = (props) => {
  return(
    <section>

<Modal show={props.show}>
    <Modal.Header>
        <Modal.Title>
            ADD NEW ITEM
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <NewItem />
    </Modal.Body>
    <Modal.Footer>
        <Button onClick={()=>props.setShow(false)} variant="secondary" >
            Close
        </Button>  
    </Modal.Footer>
   </Modal>
        {
            list.map(( item ) => (
                <Cards  item={item}  />
            ))
         }
    </section>
    

  )
}
export default Linginier