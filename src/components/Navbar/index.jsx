import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// component
import Modal from '../Modal';


// Navbar.scss
import './Navbar.scss';

const Navbar = () => {
  const [status, toggleModal] = useState(false);

  const closeModalView = () => {
    toggleModal(false);
  }

  const toggleModalView = () => {
    toggleModal(!status);
  }

  const renderHeader = () => {
    return (
      <div>Create Post</div>
    )
  }

  const post = () => {
    // post to receiving endpoint
    closeModalView();
  }

  const renderContent = () => {
    return (
      <>
        <form>
          <div className="input-control">
            <label className="label">TITLE/TOPIC</label>
            <div className="flex-start align-center">
              <div className="emoji-size">😐</div>
              <input className="input-field input-field__lg" type="text" placeholder="Title/Topic ✍" />
            </div>

          </div>
          <div className="input-control">
            <label className="label">CONTENT</label>
            <input className="input-field" type="text" placeholder="content 🖊" />
          </div>
          <div className="greyline"></div>
          <div className="input-control">
            <button className="button button-sm button-rounded tagpill" title="Create tags">🏞 Image</button>
            <button className="button button-sm button-rounded tagpill ml-10" title="Create tags">Add Tags +</button>
          </div>
        </form>
      </>
    )
  }

  const renderFooter = () => {
    return (
      <>
        <div className="flex-start">
          <button
            className="button cancel-btn"
            onClick={() => closeModalView()}
          >
            Cancel
          </button>
          <button
            className="button button-sm button-dark button-rounded ml-10"
            onClick={() => post()}
          >
            Create
          </button>
        </div>
      </>
    )
  }

  return (
    <div className="header">
      <nav className="navbar fixed-top" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="brand">
            <Link to="/" className="navbar-item">
              <svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2V2C16.5685 2 30 15.4315 30 32V33H20C8.95431 33 0 24.0457 0 13V2Z" fill="black" fill-opacity="0.29" />
                <path d="M13 0V0C25.1503 0 35 9.84974 35 22V29H33C21.9543 29 13 20.0457 13 9V0Z" fill="black" fill-opacity="0.29" />
                <path d="M5 0V0C21.5685 0 35 13.4315 35 30V31H25C13.9543 31 5 22.0457 5 11V0Z" fill="black" fill-opacity="0.29" />
              </svg>

            <span className="brand-name">OPINARI</span>
            </Link>
            <Link to="/" className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
              <span>&#8801;</span>
            </Link>
          </div>
          <div className="nav-menu">
            <div className="navbar-left">
              <Link to="/feeds" className="navbar-item">FEEDS</Link>
              <div className="navbar-btn">
                <button className="button button-inset button-rounded ripple"
                  onClick={() => toggleModalView()}
                >
                  &#9997; What's your opinion
                </button>
              </div>
            </div>
            <div className="navbar-right">
              <Link to="/signup" className="navbar-item">
                SIGN UP
              </Link>
              <Link to="/login" className="navbar-item">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {
        status &&
        <Modal
          renderHeader={renderHeader}
          renderContent={renderContent}
          renderFooter={renderFooter}
          closeModal={closeModalView}
        />
      }
    </div>
  );
};

export default Navbar;
