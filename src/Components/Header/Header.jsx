
import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = props => {
  const refTypewriter = useRef(null);

  useEffect(() => {
    const typeWriter = element => {
      const textArray = [
        "Crafting digital experiences",
        "Node.js maestro",
        "Web 3.0 enthusiast",
        "Bridging tech & creativity"
      ];
      let arrayIndex = 0;
      let charIndex = 0;

      const typing = () => {
        if (charIndex < textArray[arrayIndex].length) {
          element.textContent += textArray[arrayIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typing, 150);
        } else {
          charIndex = 0;
          arrayIndex++;
          if (arrayIndex < textArray.length) {
            element.textContent = '';
            setTimeout(typing, 1500);
          }
        }
      };

      typing();
    };

    if (refTypewriter.current) {
      typeWriter(refTypewriter.current);
    }
  }, []);

  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="static">Hello, I am Misha</span>
          <span className="animated" ref={refTypewriter}></span>
        </h1>
        <div className="buttons">
          <a href="#projects">my portfolio</a>
          <a href="#contact" className="cta">
            get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
