import React from 'react'
import styled from 'styled-components'
// import Settings from '../Settings'
import { RowBetween } from '../Row'
// import { TYPE } from '../../theme'
import TheLogo from '../../assets/images/fire_logo.png'

const StyledSwapHeader = styled.div`
  padding: 12px 1rem 0px 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
  color: ${({ theme }) => theme.text2};
`

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",   background: "#1A1917", fontSize: "25px", textAlign: "center",borderRadius: "50%",display: "table",padding: "10px", margin: "auto",marginTop:'-10%'}}>
      <img alt="logo" src={TheLogo} width="50px" style={{margin:'auto', display:'block'}} />
      </div>
      <RowBetween>
        {/* <TYPE.black fontWeight={500}>Swap</TYPE.black> */}
        {/* <br />
        <Settings /> */}
      </RowBetween>
    </StyledSwapHeader>
  )
}
