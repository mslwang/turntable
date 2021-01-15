import React, { Component } from 'react';
import Navbar from './Navbar';
import {
  Jumbotron,
  Container,
  Button,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render(){
   return (
       <div>
            <Navbar style={styles.navbar} />
       </div>

    );
   }
}

const styles = {
    navbar:{
        marginTop: 0,
        padding: 0,
    },
    container: {
        marginBottom: 100,
    },
    jumbotronStyle: {
        color: 'white',
    }
}
export default App;