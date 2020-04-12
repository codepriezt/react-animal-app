import  React from 'react';
import {render} from 'react-dom';
import { Router , Link }  from "@reach/router";
import SearchParams from './searchParams';
import Details from "./Details";




const App = () => {
return (
<React.StrictMode>
    <Router>
    <div>
        <header>
            <Link to="/"> Adopt Me !</Link>
        </header>

        <SearchParams path="/"/>
        <Details path="/details/:id"/>
    </div>
    </Router>
 
    </React.StrictMode>
)

};





render(
    <App/>,
    document.getElementById('root')
);