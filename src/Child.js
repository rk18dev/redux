import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Child=(props)=>{
const products1=useSelector((state)=>state);


    useEffect(() => {

    });
    return(<>
        <h1>This is Child</h1>
        <p>{products1.allProducts.products[0].name}</p>
        </>);
      
}

export default Child