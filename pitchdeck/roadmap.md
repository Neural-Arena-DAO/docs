---
sidebar_position: 12
---

# Roadmap

## Q2 2024 (and before)
1. **Create a Canister Development Kit (CDK)** ✅  
Written in Rust, the CDK will be used by game developers to port current games or to create new ones to be published on the platform.

2. **Implement the backend** ✅  
Written in Rust, totally independent of games and NFT's published, it should handle user accounts, register games and NFTs, and schedule matches and keep track of the results.

3. **Implement the frontend UI** ✅  
Written in Typescript, it should be a responsive, mobile-first site, allowing user to logon with Internet Identity or Plug wallet.

4. **Implement the rendering engine** ✅  
Written in Typescript using Three JS + WebGL, it should load and render complex 3D scenes and models, display fluid animations, play music and sound effects.

5. **Implement the Skills trainer** ✅  
Written in Rust using libtorch, it should train the bots using deep reinforcement learning, using the first game/engine as a base to teach the players the skills required to participate in matches.

6. **Implement the NFT generator** ✅  
Written in Rust, it should allow NFT creators to generate NAS-1 (Neural Arena Standard 1) NFTs with different 3d models, neural networks, properties and images, just by editing a config file and copying files to folders, without requiring any coding experience.

## Q3 2024
1. **Write the whitepaper** ✅  
It should include all the Dfinity SNS checklist items.

2. **Publish the first version of the platform for testing and demonstration**  
It should include the first game prototype (Rusty Circuit) and the first NFT prototype (Brains).

3. **Showcase the application**   
Neural Arena is being developed in "stealth mode" for more than a year. Now it's time to show it to the world! We will create accounts on Twitter and a channel in OpenChat, starting a thread at http://forum.dfinity.org/ about it, and build brand awareness.

4. **Open source all platform components**  
Before launching the SNS DAO, all the platform components, that's it, the backend and frontend canisters, Three JS rendering engine, the skills trainer and the NFT generator tools, must be released as open-source on github.

5. **Launch the SNS DAO**  
Create a NNS proposal, including all the relevant information.

6. **Conduct a code audit**  
After the SNS DAO is launched, a proposal to contract an auditing firm, with experience in Rust and on the Internet Computer, will be created. It should conduct an audit of the platform code.

## Q4 2024
1. **Expand the team**  
With the SNS DAO funds, we will be able to expand the team, hiring developers, 3d modelers and animators, and start a marketing department. With the new members, the first NFT and the first game can be polished and finished.

2. **Start partnerships**  
Promote the platform through game and crypto influencers in the social media channels to reach a wider audience.  
Initiate partnerships with game development teams and NFT publishers to attract third-party content creators to the platform.

3. **Write the documentation**  
It should include guides, examples, and technical docs about the platform, enabling developers to start creating games and NFTs.

4. **Release the first NFT**  
The first NFT, for now called "Brains", a collection of zombies obsessed with brains, will be released by the DAO itself.  
The code will be open-sourced when finished and will help other NFT creators to design their own collections.  
**The Neural Arena DAO will be the sole owner of the collection** (the canisters and the source-code) and <u>**all earnings will be transferred to its treasury**</u>.

5. **Publish the first game**  
The first game, currently called "Rusty Circuit", a collection of post apocalyptic arenas where the AI players compete fighting against NPC's, will be released by the DAO too.  
The code will be open-sourced when finished and will help other game developers to design their own games.  
**The Neural Arena DAO will be the sole owner of the game** (the canisters and the source-code) and <u>**all earnings will be transferred to its treasury**</u>.

## Q1 2025 (and beyond)

1. **Create a game launchpad**  
Game developers should have the ability to easily propose the release of their games on the platform with just a few clicks.  
The SNS DAO will then evaluate these proposals and decide whether to approve them.  
The best games should be featured on the front page.

2. **Create a NFT launchpad**  
NFT creators should be able to propose the publication of their NFT collections on the platform by completing a simple form.  
It will up to the SNS DAO to approve these proposals, after evaluating the collections.  
The top NFT collections should be showcased on the front page.

3. **Create a NFT marketplace**  
Due the NAS-1 (Neural Arena Standard 1) distinctive features, the best way to showcase the users' NFT would be create our own marketplace, where all NAS-1 compatible collections could be launched and listed.  
All the earnings with the marketplace will be owned by the Neural Arena DAO.

4. **Support ERC721 Ethereum tokens**  
With the IC HTTPS outcalls feature or with the Ethereum integration currently being implemented by Dfinity, the DAO and any NFT creator could release their collections on Ethereum (or on a L2 EVM chain).  
The NFT data (3d model, properties, neural net etc) would still be stored on IC, just the smart contract would be on Ethereum or a L2, due the costs to store and retrieve data.  
With the liquidity of Ethereum and the volume of its NFT market, the NFT collections would be able reach users outside the IC community. For the first time, a ERC721 NFT could be used on-chain to play games, becoming not just a basic JPG image or avatar.

5. **Add scripting support**  
The rendering engine should support scripting (JS compiled to WASM) to enable games to use more complex visual effects and animations.

6. **Add championships**  
Users should be able to create and participate in championships, where bigger prizes will be distributed to the winners.

7. **On-chain training**  
With the forthcoming support for GPU subnets, users should have the capability to instruct their NFTs in performing tasks, enabling human assistance to develop more sophisticated AI players.