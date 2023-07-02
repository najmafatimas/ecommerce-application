import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react';
const ProductDetails = () => {
    let {id}=useParams();
    let [productDetails,setProductDetails]=useState({})
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/'+id)
        .then(res=>res.json())
        .then(json=>setProductDetails(json))
    },[id])
   console.log(productDetails)
    return (<> <div  className="product">
    {
      
     
        //    <div key={productDetails.id}>
        //    <img src={productDetails.image} alt={productDetails.title} className="product-image" />
        //    <h3 className="product-title">{productDetails.title}</h3>
        //    <p className="product-category">{productDetails.category}</p>
        //     <p className="product-price">{productDetails.price}</p>
        //     <p className="product-description">{productDetails.description}</p>
        //     <button className="btn btn-dark">Add Cart</button>
        //  </div>
        <div className="card">
        <div className="card-body">
        <div key={productDetails.id}>
            <img src={productDetails.image} alt={productDetails.title} className="product-image" />
        <h3 className="product-title">{productDetails.title}</h3>
            <p className="product-category">{productDetails.category}</p>
             <p className="product-price">{productDetails.price}</p>
             <p className="product-description">{productDetails.description}</p>
             <button className="btn btn-dark">Add Cart</button>
         </div>
        </div>
      </div>
     
   }
   
</div></> );
}
 
export default ProductDetails;