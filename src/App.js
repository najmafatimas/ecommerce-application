
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Navbar1 from './components/Navbar1';
import CategoryList from './components/CategoryList';
import ProductDetails from './components/ProductDetails';
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
      <Route  path='/categories:category'>
       <Navbar1/>
        <CategoryList/>
      </Route>
      <Route  path='/home/productDetails:id'>
      <Navbar1/>
        <ProductDetails/>
      </Route>
      <Route  path='/about'>
       <Navbar1/>
        
      </Route>
      <Route  path='/contact'>
       <Navbar1/>
        
      </Route>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
