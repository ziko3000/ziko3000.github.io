import React from 'react';

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node',
    hardhat: 'fa-solid fa-helmet-safety',
    python:'fab fa-python',
    ethereum: 'fab fa-ethereum',
    // solidity: 'your-solidity-icon-class',
    // ethers: 'your-ethers-icon-class',
    // metamask: 'your-metamask-icon-class',
    // ipfs: 'your-ipfs-icon-class',
    // nestjs: 'your-nestjs-icon-class'
  };

  const link = props.link || 'http://';

  return (
    <div className="project">
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.tech.split(' ').map(t => (
              <i className={tech[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>
        {props.children}
        <div className="buttons">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Link <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
