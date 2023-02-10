import { connect } from 'react-redux';
import React from 'react';
import './products.css';
//El componente Card lo exportamos haciendo destructuring para poder testearlo
import Card from '../Card/Card'
import {getStoreName} from '../redux/actions/actions';

export function Products(list, getStorName, storeName) {
   React.useEffect(() => {
      getStorName();
   },[])
   return (
      <>
         <div className='productsBg'>
            <h1 className='productsTl'>{storeName}</h1>

            <div className='productsList'>
               {list.map(product => (
                  <Card
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  key={product.id}
                  />
               ))}
            </div>
         </div>
      </>
   );
}

export function mapStateToProps(state) {
   return{
      list: state.lisst,
      storeName: state.getStorName
   }
}

export function mapDispatchToProps(dispatch){
   dispatch()
}

export default connect(mapStateToProps, null)(Products);
