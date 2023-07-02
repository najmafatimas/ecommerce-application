import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [productList,setProductList]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json))
    },[])
    return ( <><div  className="product">
        {
            productList.map((v)=>{
                return (<div key={v.id}>
                   
                        <Link to={`/home/productDetails${v.id}`}>
                <img src={v.image} alt={v.title} className="product-image" />
                <h3 className="product-title">{v.title}</h3>
                <p className="product-category">{v.category}</p>
                </Link>
              
              </div>)
            })
        }
   
    </div></> );
}
 
export default Homepage;