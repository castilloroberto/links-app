import React, { CSSProperties } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Editar } from './Editar';
import { Links } from './Links';

export const App = () => {
    return (
        <Router>
            <div>

            <nav className="navbar navbar-dark" style={{backgroundColor:'#000000'}}>
                    <div className="container-fluid">
                        <h2 style={{color:'white'}}>Links App</h2>
                    </div>
            </nav>
            <nav 
            style={styles.nav}>
            
                <span>
                <Link style={styles.link} to="/">Links</Link>
                </span>
                <span>
                <Link style={styles.link} to="/editar">Agregar</Link>
                </span>
            
            
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/editar">
            <Editar />
          </Route>
          <Route path="/">
            <Links />
          </Route>

        </Switch>

        
      </div>
    </Router>
    )
}

interface StylesProps{
    link:CSSProperties
    nav:CSSProperties
}
const styles:StylesProps = {    
    link:{
        textDecoration:'none',
        color:'#333',
        borderBottom:'solid 1px black',
        // boxShadow:'0 0 6px gray',
        fontSize:25
    },
    nav:{
        display:'flex',
        width:'100vw',
        padding:10,
        justifyContent:'space-around'
    }
}