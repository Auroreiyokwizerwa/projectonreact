import { Modal,Button } from 'react-bootstrap';
import React  from 'react';
import '../components/styles.css/cards.css'
import NewItem from './NewItem';
import Navbar from './Navbar';

const Cards = ({item}) => {
    const { Id, title,description, date, price, category, status, Img, amount } = item;
    return (
        <section>
        < div className='cards'>
            <div className='image-box'>
                <img src={Img} alt="image" />
            </div>
            <div className='details'>
                <p>{Id}</p>
                <p>{title}</p>
                <p>{description}</p>
                <p>{date}</p>
                <p>price-{price}Rs</p>
                <p>{category}</p>
                <p>{status}</p>
                <p> {amount}</p>
                <button>Add to Cart</button>
            </div>
            
        </div>
        </section>
    )
}

export default Cards