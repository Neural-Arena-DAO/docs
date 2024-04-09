---
sidebar_position: 2
---

# Backend canister

The backend canister, written in the Rust language, is the main component of the platform. 

Its jobs include handling user accounts, registering games and NFTs, and scheduling matches and championships (WIP) that were created by users. All the results from the finished matches and championships are also stored in this canister.

It also manages the users' wallets. Users pay (currently in ICP, but later in NAT - Neural Arena Token, when the DAO is established) to take part in matches and championships. **The more they participate, the more their NFTs earn XP (experience), making them more skilled to win matches and, simultaneously, becoming rarer and more valuable in the NFT marketplaces**. Additionally, the match winner receives a portion of the match's revenue in the platform's token (NAT).

The backend is entirely separate from the games and NFTs. They simply need to adhere to a common standard/interface (API). This way, **an infinite number of games and NFTs can be published**.

The DAO determines which new game or NFT can be added to the platform. It also decides which ones should be removed if they are begin to produce unfair results.

