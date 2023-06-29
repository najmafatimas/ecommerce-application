import {useEffect,useState} from 'react'
const Homepage = () => {
    const [productList,setProductList]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProductList(json))
    },[])
    return ( <div>
        {
            productList.map((v)=>{
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
 
export default Homepage;