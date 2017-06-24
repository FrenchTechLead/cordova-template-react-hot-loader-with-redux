import React from 'react';
import {connect} from 'react-redux';
import {resetEvents, volumeUp, volumeDown} from './../actions/HelloActions';

class Hello extends React.Component{
  
  constructor(props){
    super(props);
    document.addEventListener("volumeupbutton", ()=>{this.props.dispatch(volumeUp())}, false);
    document.addEventListener("volumedownbutton", ()=>{this.props.dispatch(volumeDown())}, false);
    // you can add some more events to handle in your app.
  }
  
  render(){
    return <div>
              <p>Push Volume Up / Down button and see what will happen.</p>
              <table>
                    <thead>
                      <th>Event</th>
                      <thead>Count</thead>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Volume + </td>
                        <td>{this.props.volumeUpEvents}</td>
                      </tr>
                      <tr>
                        <td>Volume - </td>
                        <td>{this.props.volumeDownEvents}</td>
                      </tr>
                    </tbody>
              </table>
              <button onClick={()=>this.props.dispatch(resetEvents())}> Reset Values </button>
            </div>;
  }
}

function mapStateToProps(store) {
  return store.helloReducer; 
}
// here we are injecting some vars from the Redux store to our component via props.
export default connect(mapStateToProps)(Hello); 
