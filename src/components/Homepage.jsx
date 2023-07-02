import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';


const Homepage = () => {
     
    const [productList,setProductList]=useState([])
    useEffect(()=>{
       
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{setProductList(json);})
    },[])
    return ( 
    //     <>
       
    // <div >
    // <div  className="product">
    //     {
    //         productList.map((v)=>{
    //             return (<div key={v.id}>
                   
    //                     <Link to={`/home/productDetails${v.id}`}>
    //             <img src={v.image} alt={v.title} className="product-image" />
    //             <h3 className="product-title">{v.title}</h3>
    //             <p className="product-category">{v.category}</p>
    //             </Link>
              
    //           </div>)
    //         })
    //     }
   
    // </div></div></> 
    
    <div className="container product">
      <div className="row">
        {productList.map((v) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={v.id}>
            <div className="card">
              <div className="card-body">
              <Link to={`/home/productDetails${v.id}`}>
                <img src={v.image} alt={v.title} className="product-image" />
                <h3 className="product-title">{v.title}</h3>
                 <p className="product-category">{v.category}</p>
             </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    
    );
}
 
export default Homepage;