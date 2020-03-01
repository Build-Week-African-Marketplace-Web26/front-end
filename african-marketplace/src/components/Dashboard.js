import React from'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {ProduceList} from "./products/produce/ProduceList";
import {FoodList} from './products/foods/FoodList';
import {ArtifactsList} from './products/artifacts/ArtifactsList';
import {CraftsList} from './products/crafts/CraftsList';


export const Dashboard = () => {

    return (

        <Router>
        <div> 
            <h1>Our products</h1>               
            
                <div className ="dashDiv" >
                <Link className ="dashLink"to = '/produce'>Produce</Link>
                
                 <Link className ="dashLink" to = '/foodStore'>FoodStore</Link>    
                
                 <Link className ="dashLink" to = '/artifacts'>Traditional artifacts</Link>   
                
                  <Link className ="dashLink"to = '/crafts'>Handmade Crafts </Link>     
                </div>     
            

            <Switch>
            <Route path ='/produce' component ={ProduceList} />
            <Route path ='/foodStore' component ={FoodList}/>
            <Route path ='/artifacts' component ={ArtifactsList} />
            <Route path ='/crafts' component ={CraftsList}/>
            </Switch>  
            
        </div>
    </Router>
    )
}