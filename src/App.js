/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import img1 from "./images/indihire.jpg";
import { FiArrowUpRight} from "react-icons/fi";
import {HiArrowLeft} from "react-icons/hi";
import {HiArrowRight} from 'react-icons/hi';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <nav class="navbar fixed-top navbar-light bg-light navbar-expand-lg">
        <Link class="navbar-brand" to="/">
         <img src={img1} width="100" height="70" alt=""/>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <Link class="nav-link" to="/Whatwedo">What we do</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/Expertise">Expertise</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/Findjobs">Find Jobs</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Aboutus">About us</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Resources">Resources</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contactus">Contact us</Link>
                </li>
            </ul>
        </div>
    </nav>
    <div className="grid-container">
      <div class="row">
          <div class="col-10" id="column10-1">
            <p>Transforming organizations, driving <br/>value</p>
          <br/>
          </div>
          <div class="col-2" id="column2-1"></div>
      </div>

      <div class="row">
        <div class="col-1" id="column1"></div>
        <div class="col-5" id="column6">
          
        People are the core to our every team, business, and process. 
        We bring value by optimally combining the art and science of finding the right talent and the right role. 
        Our streamlined processes and understanding of industry dynamics empower us to efficiently solve talent and recruitment problems.
        </div>
        <div class="col-2"></div>
        <div class="col-4" id="column3">
        <a href='#'><HiArrowLeft style={{fontSize:'50px',color:'white',marginLeft:'260px',marginTop:'120px'}}/></a>
        <a href='#'><HiArrowRight style={{fontSize:'50px',color:'white',marginTop:'120px'}}/></a></div>
      </div>

      <div class="row">
          <div class="col-10" id="column10-2">
            <Link to="/Whatwedo"><button id="button1" class="btn btn-dark">Learn about our solutions <FiArrowUpRight/></button></Link>
            <Link to="/Findjobs"><button id="button2">Find Jobs <FiArrowUpRight/></button></Link>
          </div>
          <div class="col-2" id="column2-2"></div>
      </div>
    </div>
    </>
  );
}

export default App;
