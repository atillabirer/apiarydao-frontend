import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'HNYC',
    lpAddresses: {
      97: '0x184d272cc07EDC2b580509a2946b6Ee2EDC158b6',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'HNYC-BNB LP',
    lpAddresses: {
      97: '0x548b67cDCa275259634b31484830d85E946153d7',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.cake,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'APYD-BNB LP',
    lpAddresses: {
      97: '0xa3846382A7FB4acA7353fD0C28f89E6196F84A0E',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
    },
    token: tokens.apyd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'APYD-BUSD LP',
    lpAddresses: {
      97: '0xE929658AC37d9E5f91929e301781A692e1bCa5FF',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.apyd,
    quoteToken: tokens.busd,
  },
  {
    pid:4,
    lpSymbol:"HNYC-BUSD LP",
    token: tokens.cake,
    quoteToken: tokens.busd,
    lpAddresses: {
      97: "0xfe4d56Ea4Fd2eA78Cb2B3Ae662523E54fef26685",
      56: ""
    }
  },
  {
    pid:5,
    lpSymbol:"BNB-BUSD LP",
    token: tokens.cake,
    quoteToken: tokens.busd,
    lpAddresses: {
      97: "0x1A9690aFc6c6b1D3b3cc39Ac7b9aEcBB0047db34",
      56: ""
    }
  }
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
]

export default farms
