import React from 'react';
import { connect } from 'react-redux';
import './card.css';

export function Card({ name, price }) {
   function handleDelete(){
      deleteProduct(id)
   }
   return (
      <div className='cardBg'>
         <h5>{name}: </h5>
         <h5>${price}</h5>
         <button className='cardBtn' onClick={handleDelete}>X</button>
      </div>
   );
}

export function mapDispatchToProps() {
   return{
      deleteProduct: function(id){
         dispatchEvent(deleteProduct(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(Card);
