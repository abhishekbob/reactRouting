import React, { Component } from 'react'

export class Unmounting extends Component {
    render() {
        return (
        <div style={{marginTop:'30px'}} >
            <t style={{fontSize:'30px', fontWeight:'600'}}> Unmounting</t>
            <p style={{textAlign:'justify',margin:' 5px 320px',width:'690px',
            background:'#d13698',padding:'5px'}}>
                    The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.
                    React has only one built-in method that gets called when a component is unmounted:
                <ul style={{textAlign:'justify',marginLeft:'200px'}}> 
                    <li>componentWillUnmount()</li>
                </ul>
                <h2 style={{textAlign:'center'}}>componentWillUnmount</h2>
                    The componentWillUnmount method is called when the component is about to be removed from the DOM.
            </p>
     </div>
    )
}
}

export default Unmounting
