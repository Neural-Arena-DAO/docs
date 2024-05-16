---
sidebar_position: 7
---

# Market cap

With 21% of the total supply for sale, the market cap range will be:

### Circulating supply

| Raised directly (ICP) | Raised NF (ICP) | M Cap (ICP) | M Cap (USD) |
| --------------------: | --------------: | --------------: | --------------: |
| 100,000 | 72,000 | 399,286 | $4,791,428 |
| 300,000 | 72,000 | 677,857 | $8,134,285 |

![valuation](./img/mcap-circ.png)

### Fully diluted

| Raised directly (ICP) | Raised NF (ICP) | M Cap (ICP) | M Cap (USD) |
| --------------------: | --------------: | --------------: | --------------: |
| 100,000 | 72,000 | 1,023,810 | $12,285,714 |
| 300,000 | 72,000 | 1,738,095 | $20,857,142 |

![valuation](./img/mcap-total.png)



Notes:
1. For the circulating supply calculation, the ICPCoins formula was used (at genesis):  
<small>**circulating_supply = total_supply - treasury** (see: [defi_aggregator](https://github.com/Neutrinomic/defi_aggregator/blob/4659c3592ababa5e8c94257e26161773e43090df/src/main.mo#L1162))</small>
2. For the fully diluted calculation, the total supply at genesis was used
3. Considering a ICP/USD ratio of $ 12,00
4. Assuming 72,000 ICP as the Neuron Fund (NF) participation; however, this value can fluctuate daily and will only be known exactly when the swap ends.
