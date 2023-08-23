import React from 'react';
import Project from './Project';
import './Projects.css';
import MsgBoardImg from './Images/MsBoardImg.jpg';
import StockPriceImg from './Images/StockPriceImg.jpg';
import Tidio from './Images/Tidio.jpg';
import Techcom from './Images/Techcom.jpg';


const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
          <p className="separator" />
          <p className="subtitle">
            Here's a list of most of the projects I've been working on lately. Take a look at them!
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="SpartanFunds"
            img={MsgBoardImg}
            tech="js node ethereum"
            
            link="https://spartanfunds.ca/"
          >
            <small>
              Built using Node, Express, MongoDB, CSS + Bulma, React.js.
            </small>
            <p>
            Optimized API response time by using best practices for error handling, data validation, and middleware Implemented caching strategies using Redis, resulting in a 30% reduction in server response time 
            </p>
          </Project>
          <Project
            title="Electric Capital."
            img={StockPriceImg}
            tech="js node css ethereum "
            link="https://www.electriccapital.com/"
          >
            <small>
            Designed and developed a DeFi project on Ethereum blockchain using Solidity, Ethers.js, Node.js, and TypeScript 

            </small>
            <p>Implemented smart contract functionality for a decentralized exchange and liquidity pools 
Designed and integrated a custom token for the platform and developed airdrop and staking 
              </p>
          </Project>
          <Project
            title="Tidio"
            img={Tidio}
            tech="js node css "
            link="https://www.tidio.com/"
          >
            <small>
            Developed and maintained a real-time chat application using Node.js, TypeScript, and Socket.io 
            </small>
            <p>Optimized database queries and implemented indexing, resulting in a 50% reduction in query execution time Implemented user authentication and authorization using JWT tokens and role-based access control 
Used Redis to implement chat message caching and reduce response time </p>
          </Project>
          <Project
            title="Techcombank"
            img={Techcom}
            tech="js node css "
            link="https://techcombank.com/"
          >
            <small>
            Developed and maintained a real-time chat application using Node.js, TypeScript, and Socket.io 
            
            </small>
            <p>Crafted 20+ RESTful APIs for account management, payment gateways, and data analytics, enhancing the robustness of the application. 
Profiled and optimized application bottlenecks, achieving a 60% increase in server response times and a 25% reduction in page load times. </p>
          </Project>
 
        </div>
      </div>
    </section>
  );
};

export default Projects;
