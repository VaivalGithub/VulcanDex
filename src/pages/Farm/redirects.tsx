import React from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import FarmPage from './index'

export function RedirectToFarm() {
  return <Redirect to="/Farm/" />
}

const OLD_PATH_STRUCTURE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/
export function RedirectOldFarmPathStructure(props: RouteComponentProps<{ currencyIdB: string }>) {
  
  const {
    match: {
      params: { currencyIdB }
    }
  } = props
  const match = currencyIdB.match(OLD_PATH_STRUCTURE)
  console.log("match",match)

  if (match?.length) {
    return <Redirect to={`/Farm/${match[1]}/${match[2]}`} />
  }

  return <FarmPage  />
}

export function RedirectDuplicateFarmTokenIds(props: RouteComponentProps<{ currencyIdA: string; currencyIdB: string }>) {
  const {
    match: {
      params: { currencyIdA, currencyIdB }
    }
  } = props
  if (currencyIdA.toLowerCase() === currencyIdB.toLowerCase()) {
    return <Redirect to={`/Farm/${currencyIdA}`} />
  }
  return <FarmPage  />
}
