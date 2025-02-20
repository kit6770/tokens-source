import React, { JSX } from 'react'

import chains from './chain.json'
import {formatNumberWithBrackets} from './formatNumberWithBrackets'

export type Chain = {
  chainId: number
  symbol: string
  shotSymbol: string
}

export function getChain(chainId: number): Chain | undefined {
  return chains.find((chain: Chain) => chain.chainId === chainId)
}

export function formatAmount(
  amount: number,
  prefix?: string,
  subfix?: string,
): JSX.Element {
  if (!amount) {
    return <span>{'0.00'}</span>
  }
  if (amount >= 1000000000000) {
    return (
      <span>
        {prefix}
        {(amount / 1000000000000).toFixed(2)}T{subfix && ` ${subfix}`}
      </span>
    )
  } else if (amount >= 1000000000) {
    return (
      <span>
        {prefix}
        {(amount / 1000000000).toFixed(2)}B{subfix && ` ${subfix}`}
      </span>
    )
  } else if (amount >= 1000000) {
    return (
      <span>
        {prefix}
        {(amount / 1000000).toFixed(2)}M{subfix && ` ${subfix}`}
      </span>
    )
  } else if (amount >= 1000) {
    return (
      <span>
        {prefix}
        {(amount / 1000).toFixed(2)}K{subfix && ` ${subfix}`}
      </span>
    )
  } else {
    return (
      <span>
        {prefix}
        {formatNumberWithBrackets(+amount)}
        {subfix && ` ${subfix}`}
      </span>
    )
  }
}
export function getColor(type: number) {
  const upColor = '#00B953'
  const downColor = '#E25C5C'
  const defaultColor = '#979797'

  if (type >= 0) {
    return upColor
  } else if (type < 0) {
    return downColor
  } else {
    return defaultColor
  }
}

export const formatAddress = (address: string, before = 5, after = 4) => {
  if (address) {
    const start = address.substring(0, before)
    const end = address.substring(address.length - after, address.length)
    if (address.length < 10) {
      return address
    }
    return `${start}...${end}`
  }
  return address
}
