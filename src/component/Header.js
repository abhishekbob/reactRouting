import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div className='container'>
               <div style={{fontSize:'40px',padding:'50px',fontWeight:'600'}}>Component Lifecycle </div> 
                <div className='container1'>
                    <Link  to='/Mounting'><button style={{border:'black solid',margin:'10px',padding:'5px',borderColor:'#bf8026',borderRadius:'20%'}}>Mounting</button></Link>
                    <Link  to='/Updating'><button style={{border:'black solid',margin:'10px',padding:'5px',borderColor:'#bf8026',borderRadius:'20%'}}>Updating</button></Link>
                    <Link  to='Unmounting'><button style={{border:'black solid',margin:'10px',padding:'5px',borderColor:'#bf8026',borderRadius:'20%'}}>Unmounting</button></Link>
                </div>
                
                
            </div>
        )
    }
}

export default Header
