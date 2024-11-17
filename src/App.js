import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const AppLayout = ()=>{
    return(
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
            
        
    )
}

const heading = <button type="button" class="btn btn-primary">Primary</button>
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)