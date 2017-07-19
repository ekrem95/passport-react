import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentWillMount() {
    axios.get('/api/user')
      .then(res => {
        if (res.data.user === null) {
          window.location.replace('/login');
        }
      });
    axios.get('https://react-eko.herokuapp.com/api/posts')
      .then(res => {
        this.setState({
          data: res.data,
        });
        //console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render () {
    //console.log(this.state.data);
    return (
      <div className="indexContainer">
        <div
          className="index"
          >
          { this.state.data.length > 0 &&
            this.state.data.map(act => {
              return (
                <img
                  key={act._id}
                  src={act.src}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}
