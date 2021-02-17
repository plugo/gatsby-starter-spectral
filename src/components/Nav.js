import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
    return (
        <nav id="nav" class="navigation" role="navigation">
      <ul>
        <li className="special navigation_button">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle" aria-label="Open menu"
          >
            <span className="navigation_icon"></span>
          </a>

          <div id="menu" className="navigation_nav">
            <ul className="navigation_list">
              <li className="navigation_item">
                <Link to="/" className="navigation_link">Home</Link>
              </li>
              <li className="navigation_item">
                <Link to="/About" className="navigation_link">About</Link>
              </li>
              <li className="navigation_item">
                <Link to="/Projects" className="navigation_link">Projects</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu" aria-label="Close menu"
            >
              {''}
            </a>
          </div>

        </li>
      </ul>
    </nav>
    );
}
