

import React from 'react';
// //import { render } from '@testing-library/react';
export default class ContactUs extends React.Component{
    state ={
        name: '',
        email: '',
        phone: '',
        content: ''
    }

    handleChange = (event)=>{
        const target = event.target;
        const {name, value} = target;
        this.setState({
            [name]: value
        });
    }

render(){

    return(

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
              <input type="text" name="name" value={this.state.name} onChaange={this.handleChange} placeholder="Enter Name" className="form-control"required/>

              <div className="form-gourp">
              <label>Email</label>
              <input type="email" name="email" value={this.state.email} onChaange={this.handleChange}placeholder="Enter Email" className="form-control"required/>
              </div>

              <div className="form-gourp">
              <label>Phone</label>
              <input type="number" name="phone" value={this.state.phone} onChaange={this.handleChange}placeholder="Enter Phone" className="form-control" required/>
              </div>

              <div className="form-gourp">
              <label>Message</label>
              <textarea cols="25" rows="14" type="text" name= "content" value={this.state.content } onChaange={this.handleChange} className="form-control" placeholder="Enter Message"/>
              </div>

              <div className="form-gourp">
              <input type="submit" name="name" className="btn btn-secondary"/>
              </div>                       

            </div>
          </form>
        </div>
      </div>

    )
    }
}
//     // state = {
//     //     email: '',          
//     //     email:'','content:'
//     // }
 //return(
//         <div>
//         <h1> BAISIL</h1>

//         </div>
//     );
// }
// }