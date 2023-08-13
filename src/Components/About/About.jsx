import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who am I?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Misha Fam.</h4>
            <p>
              I am a Web 3 developer and Node.js developer from Ukraine with more than 4 years of experience. I worked on numerous projects in Fintech and many more.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better. I also love photography, a hobby
              I'm taking along since the good old film cameras. Oh, and rice with milk; I have a
              passion for rice with milk!
            </p>
          </div>
          <div className="title">
            <h3>What do I do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm Node.js Back-end programmer.</h4>
            <p>
                <strong style={{ fontWeight: 'bold' }}>Node.js Mastery:</strong> I create responsive APIs, WebSocket services, and async microservices.
                <br />
                <strong style={{ fontWeight: 'bold' }}>Performance Focus:</strong> I optimize code for lightning-fast response times and high scalability.
                <br />
                <strong style={{ fontWeight: 'bold' }}>Clean Collaboration:</strong> I write clean, documented code for seamless teamwork and future evolution.           </p>
            <p>
            <strong style={{ fontWeight: 'bold' }}>Technologies:</strong> Node.js
Express.js
RESTful APIs
WebSocket Services
Microservices Architecture
Database Design (SQL/NoSQL)
Caching Strategies
Authentication & Authorization
Server Optimization
GraphQL
Message Queues (e.g., RabbitMQ, Kafka)
ORM/ODM (e.g., Sequelize, Mongoose),Cloud Platforms (e.g., AWS, Azure, Google Cloud)
                <br />
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Blockchain and Ethereum</h4>
            <p>
            <p>
    <strong style={{ fontWeight: 'bold' }}>Smart Contracts Maven:</strong> I create secure, efficient contracts for diverse applications.
    <br />
    <strong style={{ fontWeight: 'bold' }}>Hardhat Aficionado:</strong> Leveraged Hardhat for efficient Ethereum development.
    <br />
    <strong style={{ fontWeight: 'bold' }}>Vision to Reality:</strong> Translated concepts into impactful blockchain solutions.
</p>

            </p>
            <p>
            <strong style={{ fontWeight: 'bold' }}>Technologies:</strong> Ethereum Blockchain
Solidity Smart Contracts
Web3.js: Ethereum JavaScript API
Hardhat: Ethereum Development Environment
MetaMask: Ethereum Wallet and Browser Extension
DeFi Protocols
ERC-20 & ERC-721 Tokens
IPFS: Decentralized Storage
Chainlink: Decentralized Oracle Network
Testnets: Ropsten, Rinkeby, Kovan
Mainnet Deployment & Auditing
                <br />
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
