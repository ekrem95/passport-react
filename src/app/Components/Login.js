import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Nav extends Component {
  render () {
    return (
      <div className="nav">
        <h2 className="page-header" style={{ marginTop: 190 }}>Account Login</h2>
        <form method="post" action="/login">
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    );
  }
}
