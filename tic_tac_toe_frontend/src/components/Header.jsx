import React from 'react';
import logo from '../assets/logo-ocean.svg';

/**
 * PUBLIC_INTERFACE
 * Header renders the app title and brand.
 */
export default function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Ocean Professional Tic Tac Toe Home">
          <img className="brand-logo" src={logo} alt="" />
          <h1 className="brand-title">Tic Tac Toe</h1>
          <span className="brand-sub">Ocean Professional</span>
        </a>
      </div>
    </header>
  );
}
