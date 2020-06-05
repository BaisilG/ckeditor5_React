import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContactUs from './Componets/ContactComponent/Contact';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <form className="form-group">

            <h1>
              Contact Us!!!
            </h1>
            <h2>
              --------------------------------------------------------------------------------------
            </h2>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter Name" className="form-control"required/>

              <div className="form-gourp">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter Email" className="form-control"required/>
              </div>

              <div className="form-gourp">
              <label>Phone</label>
              <input type="number" name="phone" placeholder="Enter Phone" className="form-control" required/>
              </div>

              <div className="form-gourp">
              <label>Message</label>
              <textarea cols="25" rows="14" className="form-control" placeholder="Enter Message"/>
              </div>

              <div className="form-gourp">
              <input type="submit" name="name" className="btn btn-secondary"/>
              </div>                       

            </div>
          </form>
        </div>
      </div>
      
     </div>
  );

}

export default App;


// <Router>
//         <ContactUs>
//           <h1>Baisil Geevarghese</h1>
//         </ContactUs>
//         <Route exact path="/" component={ContactUs }/>
//       </Router>