import React from 'react'

class Article extends React.Component {
  render() {
    return (
      <div style={{
        position: 'relative',
        zIndex: '1',
        boxShadow: '0 0 2px 0 rgba(0,0,0,.25)',
        width: 700,
        overflow: 'auto',
        padding: 20,
        textAlign: 'left',
        lineHeight: '1.5rem'
      }}>
        <h2>TomoChain — Axie Infinity Partnership Announcement</h2>
        <br/>
        <p>TomoChain is proud to announce our strategic partnership with Axie Infinity, a digital pet community, founded upon the vision of delivering true gameplay and utility to the decentralized gaming space. Axies are digital pets that you can collect, raise, and pit against other Axies in battle.</p>
        <img  style={{
          width: '100%'
        }} src="https://cdn-images-1.medium.com/max/800/1*-sgkMjCBa2WN3vH2guscFA.jpeg" alt="tomo" />
        <p>The Axie team was impressed by TomoChain’s scalability solution demonstrated via PoSV consensus with 150 masternodes. Achieving 2 second block times and over 2000 TPS has proven that the TomoChain platform can ensure stability and security for Axie Infinity’s operation.

TomoChain users now can use native TOMO tokens to play around with Aixe Infinity as an accepted payment for items sold. According to Gameunculus’s pick this December, Axie Infinity was one of the top gaming Dapps that has gained the 3rd biggest sales total so far, behind Decentraland and CryptoKitties.

We will collaborate in cross-chain integration as well as business development and community engagement to connect both communities with each other; as well as continue to raise awareness of blockchain use cases wherever we are presenting.</p>
      </div>
    )
  }
}

export default Article;