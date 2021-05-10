import React, { Component } from 'react';


export class Mounting extends Component {
    render() {
        return (
    <div style={{marginTop:'30px'}} >
                <t style={{fontSize:'30px', fontWeight:'600'}}> Mounting</t>
        <p style={{textAlign:'justify',margin:' 5px 320px',width:'690px',
                background:'pink',padding:'5px'}}>
                Mounting means putting elements into the DOM.
                React has four built-in methods that gets called, in this order, when mounting a component:
                <ul style={{textAlign:'justify',marginLeft:'200px'}}> 
                    <li>constructor()</li>
                    <li>getDerivedStateFromProps()</li>
                    <li>render()</li>
                    <li>componentDidMount()</li>
                </ul>
                The render() method is required and will always be called, the others are optional 
                and will be called if you define them.
                <h2 style={{textAlign:'center'}}>constructor</h2>
                The constructor() method is called before anything else, when the component 
                is initiated, and it is the natural place to set up the initial state and other initial values.
                The constructor() method is called with the props, as arguments, and you should
                always start by calling the super(props) before anything else, this will initiate
                the parent's constructor method and allows the component to inherit methods from
                its parent (React.Component).          
                <h2 style={{textAlign:'center'}}>getDerivedStateFromProps</h2>
                The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.
                This is the natural place to set the state object based on the initial props.
                It takes state as an argument, and returns an object with changes to the state.
                <h2 style={{textAlign:'center'}}>render</h2>
                The render() method is required, and is the method that actually outputs the HTML to the DOM. 
                <h2  style={{textAlign:'center'}}>componentDidMount</h2>
                The componentDidMount() method is called after the component is rendered.
                This is where you run statements that requires that the component is already placed in the DOM.
        </p>    
    </div>
        )
    }
}

export default Mounting
