import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`} aria-label="social media links">
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; 2021 UX Omaha</li>
        <li>
          Built With: Gatsby and Netlify
        </li>
      </ul>
    </footer>
  );
}
