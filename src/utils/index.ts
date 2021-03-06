import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
import { abi as IUniswapV2Router02ABI } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json'
import PYR_MATIC_POOL1_ABI from '../constants/abis/pyrMaticPool1.json'

import { ROUTER_ADDRESS } from '../constants'
import { ChainId, JSBI, Percent, Token, CurrencyAmount, Currency, ETHER } from '@uniswap/sdk'
import { TokenAddressMap } from '../state/lists/hooks'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

// const ETHERSCAN_PREFIXES: { [chainId in ChainId]: string } = {
//   1: '',
//   3: 'ropsten.',
//   4: 'rinkeby.',
//   5: 'goerli.',
//   42: 'kovan.',
//   137: 'matic.'
// }

export function getEtherscanLink(
  chainId: ChainId,
  data: string,
  type: 'transaction' | 'token' | 'address' | 'block'
): string {
  // const prefix = `https://${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[1]}etherscan.io`
  const prefix = 'https://polygonscan.com/'

  switch (type) {
    case 'transaction': {
      return `${prefix}/tx/${data}`
    }
    case 'token': {
      return `${prefix}/token/${data}`
    }
    case 'block': {
      return `${prefix}/block/${data}`
    }
    case 'address':
    default: {
      return `${prefix}/address/${data}`
    }
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000))
}

export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
  if (slippage < 0 || slippage > 10000) {
    throw Error(`Unexpected slippage value: ${slippage}`)
  }
  return [
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000))
  ]
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

// account is optional
export function getRouterContract(_: number, library: Web3Provider, account?: string): Contract {
  return getContract(ROUTER_ADDRESS, IUniswapV2Router02ABI, library, account)
}


export function getPYR_P1_Contract(_: number, library: Web3Provider, poolAddress: string , account?: string): Contract {
  return getContract(poolAddress , PYR_MATIC_POOL1_ABI, library, account)
}

export function getPYRMATIC_P1_Contract(_: number, library: Web3Provider, account?: string): Contract {
  const PYRMATIC_P1 = '0x61F8D581DB380bA25f3c8BCbb1007dA7F845ca31'//'0x10487Dae82E01207B31773bfD6E9d1B45F9d4c08'//'0xB3cC3dcc48E1B825b4628e9384829D04536C7b5F'
  return getContract(PYRMATIC_P1, PYR_MATIC_POOL1_ABI, library, account)
}


export function getPYRLAVA_P1_Contract(_: number, library: Web3Provider, account?: string): Contract {
  const PYRLAVA_P1 = '0xD229A6ed98a3370770549A66908af53Ec57A74b2'
  return getContract(PYRLAVA_P1, PYR_MATIC_POOL1_ABI, library, account)
}


export function getPYRUSDC_P1_Contract(_: number, library: Web3Provider, account?: string): Contract {
  const PYRUSDC_P1 = '0x7b30Cc75F9ee201249e13DEb4b2867086895A59e'
  return getContract(PYRUSDC_P1, PYR_MATIC_POOL1_ABI, library, account)
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function isTokenOnList(defaultTokens: TokenAddressMap, currency?: Currency): boolean {
  if (currency === ETHER) return true
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address])
}
