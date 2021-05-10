import React, { Component } from 'react'

export class Updating extends Component {
    render() {
        return (
    <div style={{marginTop:'30px'}} >
            <t style={{fontSize:'30px', fontWeight:'600'}}> Updating</t>
        <p style={{textAlign:'justify',margin:' 5px 320px',
            width:'690px',background:'#d16fad',padding:'5px'}}>
            The next phase in the lifecycle is when a component is updated.
            A component is updated whenever there is a change in the component's state or props.
            React has five built-in methods that gets called, in this order, when a component is updated:
            <ul style={{textAlign:'justify',marginLeft:'200px'}}> 
                <li>getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
            </ul>
            The render() method is required and will always be called, the others are optional 
            and will be called if you define them.
            <h2 style={{textAlign:'center'}}>getDerivedStateFromProps</h2>
            Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.
            This is still the natural place to set the state object based on the initial props.          
            <h2 style={{textAlign:'center'}}>shouldComponentUpdate</h2>
            In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
            The default value is true.   
            <h2 style={{textAlign:'center'}}>render</h2>
            The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.
            <h2  style={{textAlign:'center'}}>getSnapshotBeforeUpdate</h2>
            In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
            If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
            <h2  style={{textAlign:'center'}}>componentDidUpdate</h2>
            The componentDidUpdate method is called after the component is updated in the DOM.
        </p>
     
    </div>
    )
}
}

export default Updating
