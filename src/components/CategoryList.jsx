import { useParams } from "react-router-dom";
import {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
const CategoryList = () => {
    let {category}=useParams();
    const [categoryList,setCategoryList]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/'+category)
        .then(res=>res.json())
        .then(json=>setCategoryList(json))
    },[category])
   
    return ( 
    <>
    <div  className="product">
         {
           
            categoryList.map((v)=>{
                return (
            <Link to={`/home/productDetails${v.id}`}>
                <img src={v.image} alt={v.title} className="product-image" />
                <h3 className="product-title">{v.title}</h3>
                <p className="product-category">{v.category}</p>
                </Link>)
            })
        }
    </div></> );
}
 
export default CategoryList;