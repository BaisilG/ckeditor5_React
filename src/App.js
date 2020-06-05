import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContactUs from './Componets/ContactComponent/Contact';
//import ContactUs from './Componets/ContactComponent/Contact';
function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path="/" component={ContactUs}/>
      </Router>
      
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