import React from 'react';
import { connect } from 'react-redux';
import './card.css';
import {useDispatch} from 'react-redux'
import * as action from '../../redux/actions/actions'

export function Card({ name, price }) {
   const dispatch = useDispatch()
   function handleDelete(){
      dispatch(action.deleteProduct(id))
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
         dispatch(deleteProduct(id))
      }
   }
}

export default connect(null, mapDispatchToProps)(Card);
