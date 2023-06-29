import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react';
const CategoryList = () => {
    let {category}=useParams();
    const [categoryList,setCategoryList]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/'+category)
        .then(res=>res.json())
        .then(json=>setCategoryList(json))
    },[])
    return ( <div>
         {
            categoryList.map((v)=>{
                return (<div key={v.id} className="product">
                <img src={v.image} alt={v.title} className="product-image" />
                <h3 className="product-title">{v.title}</h3>
                <p className="product-category">{v.category}</p>
                <p className="product-price">{v.price}</p>
                <p className="product-description">{v.description}</p>
              </div>)
            })
        }
    </div> );
}
 
export default CategoryList;