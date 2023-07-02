import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './SignUp/Navbar';
import Homepage from './SignUp/Homepage';
import Navbar1 from './SignUp/Navbar1';
import CategoryList from './SignUp/CategoryList';
import ProductDetails from './SignUp/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
         
      <Switch>
      <Route exact path='/'>
      <Navbar/>
       
      </Route>
      <Route  path='/hello'>
       <Navbar1/>
        <Homepage/>
      </Route>
      <Route  path='/hello:category'>
       <Navbar1/>
        <CategoryList/>
      </Route>
      <Route  path='/home/productDetails:id'>
      <Navbar1/>
        <ProductDetails/>
      </Route>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
