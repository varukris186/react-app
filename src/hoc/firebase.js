import firebase from '../connect/auth';
import React, { Component } from 'react';

//A currying Function which 
const fireInteractiveComponent = (WrappedComponent) => {
    return class componentName extends Component {
      constructor(props){
          super(props);
      }  
    
      render() {
        return (
          <div>
             <WrappedComponent firebase={firebase} {...this.props} />
          </div>
        );
      }
    }
    
};

export default fireInteractiveComponent;