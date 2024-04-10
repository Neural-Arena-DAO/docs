---
sidebar_position: 8

---

# NFT Canisters

Each NFT collection, to be able to be published on the platform, should implement the **ICRC-7** standard. Supporting **ICRC-7**, that is **the definitive IC NFT standard** (drafted by the IC dev community; not by a single entity), permits the NFT to be listed in any IC marketplace that supports it.

The NFT must also implement the Neural Arena Standard-1 (**NAS-1**). The NAS-1 (to be documented) includes metadata and a couple of methods used to verify and retrieve data about the collection.

We also plan to support Ethereum's NFT standard (**ERC721**) in future, leveraging the Internet Computer's HTTP outcalls (or the Ethereum integration when it's done by Dfinity). NAS-1 compatible ERC721 smart contracts could then be used, gathering a broader range of users from beyond the IC community to participate.