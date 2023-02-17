
import './App.css';
import { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setProducts } from './actions/productAction';
import Child from './Child';

function App(props) {

  const [appname, setAppName] = useState("my-app");
  const products1=useSelector((state)=>state);
  const dispatch=useDispatch();

  console.log(products1.allProducts.products[0].name);
  useEffect(() => {

  }, [appname]);
  return (
    <div className="App">
      <p>Hello</p>
      <p>{products1.allProducts.products[0].name}</p>
      <button onClick={setMoreData}>Click</button>
      <Child></Child>
    </div>
  );

  function setMoreData(){
    const d=[
      {
        id:126,
        name:"rk",
        Depart:"IT"
      },
      {
        id:124,
        name:"raju",
        Depart:"Finance"
      }
    ]
    dispatch(setProducts(d));
  }

}
export default App;
