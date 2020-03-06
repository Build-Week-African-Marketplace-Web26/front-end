import React from'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {ProduceList} from "./products/produce/ProduceList";
import {FoodList} from './products/foods/FoodList';
import {ArtifactsList} from './products/artifacts/ArtifactsList';
import {CraftsList} from './products/crafts/CraftsList';
import Pricing from './Pricing';
import Profile from './Profile';
import '../App.css';


export const Dashboard = () => {

    return (
    <Router>
        <section>
            <div className="dash-cont"> 
                <div className ="dash-link-cont" >
                    <Link className ="dashLink" to = '/profile'>Your Profile</Link>
                    <Link className ="dashLink" to = '/view-prices'>Compare Prices</Link>
                    <Link className ="dashLink"to = '/produce'>Produce</Link>
                    <Link className ="dashLink" to = '/foodStore'>FoodStore</Link>    
                    <Link className ="dashLink" to = '/artifacts'>Traditional artifacts</Link>   
                    <Link className ="dashLink"to = '/crafts'>Handmade Crafts </Link>     
                </div>    

                <Switch>
                    <Route exact path ='/profile' component ={Profile} />
                    <Route path ='/view-prices' component ={Pricing} />
                    <Route path ='/produce' component ={ProduceList} />
                    <Route path ='/foodStore' component ={FoodList}/>
                    <Route path ='/artifacts' component ={ArtifactsList} />
                    <Route path ='/crafts' component ={CraftsList}/>
                </Switch>  
            </div>
        </section>
    </Router>
    );
}