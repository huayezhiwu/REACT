import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.initialAge
      , status: 0
    }
    setTimeout(()=>{
      this.setState({
        status: 1
      })
    }, 800)

  }

  onMakeOlder(){
    this.setState({
      age: this.state.age + 3
    })
  }

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>HOME</h1>
            <div>your name is {this.props.name}, your age is {this.state.age}</div>
            <div>status: { this.state.status}</div>
            <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
          </div>
        </div>
      </div>

    );
  }
}


Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
}