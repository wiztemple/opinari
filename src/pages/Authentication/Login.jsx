import React, { Component } from 'react';
import './Auth.scss';

class Login extends Component {
  render() {
    return (
      <div className="auth">
        <div className="container">
          <div className="columns">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="">
                <div className="formCard">
                  <h4 className="text-center py-20">Welcome Back</h4>
                  <form>
                    <div className="input-control">
                      <input type="email" className="input-field br-30" placeholder="email" />
                    </div>
                    <div className="input-control">
                      <input type="password" className="input-field br-30" placeholder="password" />
                    </div>
                    <div className="mt-20">
                      <button className="button button-blue button-block button-rounded">Create Account</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
