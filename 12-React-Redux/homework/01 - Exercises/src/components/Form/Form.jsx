import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Caja from '../../assets/caja.png';
import './form.css';
import {addProduct} from '../../redux/actions/actions';

function Form() {
   const [product, setProduct] = useState({ name: '', price: '', id: '' });

   function handleInputChange(e) {
      e.preventDefault();
      setProduct({ ...product, [e.target.name]: e.target.value });
   }

   function haandleSubmit(){
      addProduct({
         ...product,
         id: Date.now()
      })
   }
   return (
      <form onSubmit={haandleSubmit()} className='formBg'>
         <div className='inputBox'>
            <label>Nombre: </label>
            <input
               name='name'
               onChange={handleInputChange}
               value={product.name}
            />
         </div>
         <div className='inputBox'>
            <label>Precio:</label>
            <input
               type='number'
               name='price'
               onChange={handleInputChange}
               value={product.price}
            />
         </div>
         <button className='formBtn'>¡ADD!</button>
         <img src={Caja} alt='' className='logo' />
      </form>
   );
}

export function mapDispatchToProps() {
   const dispatch = useDispatch()
   return{
      addProduct: function(product){
         dispatch(addProduct(product))
      }
   }
}

export default connect(null, mapDispatchToProps)(Form);
