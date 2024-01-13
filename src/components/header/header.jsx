import React from 'react';

function Header({ handleScrollToSection }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleScrollToSection('section1')}>
              Section 1
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('section2')}>
              Section 2
            </button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection('section3')}>
              Section 3
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
