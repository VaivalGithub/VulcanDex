import React from 'react'
import styled from 'styled-components'
// import Settings from '../Settings'
//import {RowBetween} from '../Row'
// import { TYPE } from '../../theme'
import TheLogo from '../../assets/images/fire_logo.png'

const StyledSwapHeader = styled.div`
  position:absolute;
  left:0;
  right:0;
  margin-left:auto;
  margin-right:auto;
  top: -53px;
  width: 106px;
  height: 106px;
  background-color: #1A1917;
  color: ${({theme}) => theme.text2};
`

export default function SwapHeader() {
    return (
        <div className={'pt-5'}>
            <StyledSwapHeader className="d-flex justify-content-center align-items-center rounded-circle">
                <img alt="logo" src={TheLogo} />
            </StyledSwapHeader>
        </div>
    )
}
