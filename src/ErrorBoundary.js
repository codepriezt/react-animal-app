//mostly code from reactjs.org/docs/error-boundaries.html

import React , {Component} from 'react';
import { Link } from '@reach/router';


class ErrorBoundary extends  Component {

    state = {hasError :false}

    static getDerivedStateFromError(){
        return {hasError:true};
    }

    componentDidCatch(error , info  ){
        console.error("ErrorBoundary caught an error" , error , info);
    }

    render(){
        if(this.state.hasError){
            return(
                <h1>
                    There was an error with this page
                </h1>
            )
        }
    }
}