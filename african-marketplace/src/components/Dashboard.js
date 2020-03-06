import React from'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Fruits from "./products/fruitsCato/Fruits"
import Cereals from './products/cerealsCato/Cereals';
import AnimalProducts from './products/animalCato/AnimalProducts'
import Beans from './products/beansCato/Beans';
import Vegetables from './products/vegetableCato/Vegetables'
import Others from './products/othersCato/Others'
import {connect} from 'react-redux';
import {getItems} from '../action'


const Dashboard = ({getItems}) => {

    return (

        <Router>
        <div> 
            <h1>Our products</h1>               
            
                <div className ="dashDiv" >
                <Link className ="dashLink"to = '/animalproducts'>Animal Products</Link>
                
                 <Link className ="dashLink" to = '/beans'>Beans</Link>    
                
                 <Link className ="dashLink" to = '/cereals'>Cereals</Link>   
                
                  <Link className ="dashLink"to = '/fruits'> Fruits</Link>  
                  <Link className ="dashLink"to = '/vegetables'>Vegetables </Link> 
                  <Link className ="dashLink"to = '/others'>Others</Link>    
                </div>     
            

            <Switch>
            <Route path ='/animalproducts' component ={AnimalProducts} />
            <Route path ='/beans' component ={Beans}/>
            <Route path ='/cereals' component ={Cereals} />
            <Route path ='/fruits' component ={Fruits}/>
            <Route path ='/vegetables' component ={Vegetables}/>
            <Route path ='/others' component ={Others}/>
            </Switch>            
        </div>
    </Router>
    )
}

const mapStateToProps = (state)=>{
    return{        
    itemsList: state.itemsList
    }
  }

export default connect(mapStateToProps,{getItems})(Dashboard);
