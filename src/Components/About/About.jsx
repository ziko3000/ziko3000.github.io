import React from 'react';
import './About.css';

const About = props => {
  return (
    <section id="about" >
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who am I?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Min(Maxim) Pham.</h4>
            <p>
              I am a Node.js developer from Ukraine with more than 4 years of experience. I worked on numerous projects in Fintech and many more.
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
            <div className="tech-list">
  <div className="tech-item" data-aos="fade-up">Node.js</div>
  <div className="tech-item" data-aos="fade-up">Express.js</div>
  <div className="tech-item" data-aos="fade-up">Nest.js</div>
  <div className="tech-item" data-aos="fade-up">RESTful APIs</div>
  <div className="tech-item" data-aos="fade-up">WebSocket Services</div>
  <div className="tech-item" data-aos="fade-up">Microservices Architecture</div>
  <div className="tech-item" data-aos="fade-up">Database Design (SQL/NoSQL)</div>
  <div className="tech-item" data-aos="fade-up">Caching Strategies</div>
  <div className="tech-item" data-aos="fade-up">Authentication & Authorization</div>
  <div className="tech-item" data-aos="fade-up">Server Optimization</div>
  <div className="tech-item" data-aos="fade-up">GraphQL</div>
  <div className="tech-item" data-aos="fade-up">Message Queues (e.g., RabbitMQ, Kafka)</div>
  <div className="tech-item" data-aos="fade-up">ORM/ODM (e.g., Sequelize, Mongoose)</div>
  <div className="tech-item" data-aos="fade-up">Cloud Platforms (e.g., AWS, Azure, Google Cloud)</div>
</div>
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
            <div className="tech-list">
  <div className="tech-item" data-aos="fade-up">Ethereum Blockchain</div>
  <div className="tech-item" data-aos="fade-up">Solidity Smart Contracts</div>
  <div className="tech-item" data-aos="fade-up">Ethers</div>
  <div className="tech-item" data-aos="fade-up">Hardhat: Ethereum Development Environment</div>
  <div className="tech-item" data-aos="fade-up">MetaMask: Ethereum Wallet and Browser Extension</div>
  <div className="tech-item" data-aos="fade-up">DeFi Protocols</div>
  <div className="tech-item" data-aos="fade-up">ERC-20 & ERC-721 Tokens</div>
  <div className="tech-item" data-aos="fade-up">IPFS: Decentralized Storage</div>
  <div className="tech-item" data-aos="fade-up">Chainlink: Decentralized Oracle Network</div>
  <div className="tech-item" data-aos="fade-up">Testnets: Ropsten, Rinkeby, Kovan</div>
  <div className="tech-item" data-aos="fade-up">Mainnet Deployment & Auditing</div>
</div>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
