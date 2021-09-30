// import { ChainId, TokenAmount } from '@uniswap/sdk'
import {ChainId} from '@uniswap/sdk'

import React, {useState} from 'react'
import {Text} from 'rebass'
import {NavLink} from 'react-router-dom'
import {darken} from 'polished'
import {useTranslation} from 'react-i18next'

import styled from 'styled-components'
import '../../assets/style/custom.scss'
import Logo from '../../assets/svg/logo.png'
// import LogoDark from '../../assets/svg/logo_white.svg'
import {useActiveWeb3React} from '../../hooks'
// import { useDarkModeManager } from '../../state/user/hooks'
// import { useETHBalances, useAggregateUniBalance } from '../../state/wallet/hooks'
import {useETHBalances} from '../../state/wallet/hooks'

import {CardNoise} from '../earn/styled'
// import { CountUp } from 'use-count-up'
import {TYPE, ExternalLink} from '../../theme'
import {YellowCard} from '../Card'
// import { Moon, Sun } from 'react-feather'
import Menu from '../Menu'
import Settings from '../Settings'

import Row, {RowFixed} from '../Row'
import Web3Status from '../Web3Status'
import ClaimModal from '../claim/ClaimModal'
import {useToggleSelfClaimModal, useShowClaimPopup} from '../../state/application/hooks'
import {useUserHasAvailableClaim} from '../../state/claim/hooks'
import {useUserHasSubmittedClaim} from '../../state/transactions/hooks'
import {Dots} from '../swap/styleds'
import Modal from '../Modal'
import UniBalanceContent from './UniBalanceContent'
// import usePrevious from '../../hooks/usePrevious'


const HeaderFrame = styled.div`
  background-color:#191817;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 1rem 1rem 7rem;
  z-index: 2;
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({theme}) => theme.mediaWidth.upToLarge`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    border-radius: 12px 12px 0 0;
    background-color: ${({theme}) => theme.bg1};
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({theme}) => theme.mediaWidth.upToMedium`
   flex-direction: row-reverse;
    align-items: center;
  `};
`

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const HeaderRow = styled(RowFixed)`
  ${({theme}) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

const HeaderLinks = styled(Row)`
  justify-content: center;
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme, active}) => (!active ? theme.bg1 : theme.bg3)};
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  :focus {
    border: 1px solid blue;
  }
`

const UNIAmount = styled(AccountElement)`
  color: white;
  padding: 4px 8px;
  height: 36px;
  font-weight: 500;
  background-color: ${({theme}) => theme.bg3};
  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #ff007a 0%, #2172e5 100%), #edeef2;
`

const UNIWrapper = styled.span`
  width: fit-content;
  position: relative;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 0.9;
  }
`

const HideSmall = styled.span`
  ${({theme}) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

const NetworkCard = styled(YellowCard)`
  border-radius: 12px;
  padding: 8px 12px;
  font-size:16px;
  border: solid 1px #F3841E;
  font-weight: 600;
  ${({theme}) => theme.mediaWidth.upToSmall`
    margin: 0;
    margin-right: 0.5rem;
    width: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  `};
`

const BalanceText = styled(Text)`
  ${({theme}) => theme.mediaWidth.upToExtraSmall`
    display: none;
  `};
`

const Title = styled.a`
  
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
  }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
    activeClassName
})`
  ${({theme}) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme}) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 12px;
    color: ${({theme}) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({theme}) => darken(0.1, theme.text1)};
  }
`

const StyledExternalLink = styled(ExternalLink).attrs({
    activeClassName
})<{ isActive?: boolean }>`
  ${({theme}) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme}) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
    color: ${({theme}) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({theme}) => darken(0.1, theme.text1)};
  }

  ${({theme}) => theme.mediaWidth.upToExtraSmall`
      display: none;
`}
`

export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({theme}) => theme.bg3};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({theme}) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({theme}) => theme.text1};
  }
`

const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
    [ChainId.RINKEBY]: 'Rinkeby',
    [ChainId.MATIC]: 'Matic',
    [ChainId.ROPSTEN]: 'Ropsten',
    [ChainId.GÖRLI]: 'Görli',
    [ChainId.KOVAN]: 'Kovan'
}

export default function Header() {
    const {account, chainId} = useActiveWeb3React()
    const {t} = useTranslation()

    const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
    // const [isDark] = useDarkModeManager()
    // const [darkMode, toggleDarkMode] = useDarkModeManager()

    const toggleClaimModal = useToggleSelfClaimModal()

    const availableClaim: boolean = useUserHasAvailableClaim(account)

    const {claimTxn} = useUserHasSubmittedClaim(account ?? undefined)

    // const aggregateBalance: TokenAmount | undefined = useAggregateUniBalance()

    const [showUniBalanceModal, setShowUniBalanceModal] = useState(false)
    const showClaimPopup = useShowClaimPopup()

    // const countUpValue = aggregateBalance?.toFixed(0) ?? '0'
    // const countUpValuePrevious = usePrevious(countUpValue) ?? '0'

    return (
        <HeaderFrame className="HeaderFrame d-flex align-items-center justify-content-between flex-wrap">
            <ClaimModal/>
            <Modal isOpen={showUniBalanceModal} onDismiss={() => setShowUniBalanceModal(false)}>
                <UniBalanceContent setShowUniBalanceModal={setShowUniBalanceModal}/>
            </Modal>
            <HeaderRow className="d-block d-md-flex HeaderRow text-center">
                <Title href=".">
                    <UniIcon>
                        {/* <img width={'24px'} src={darkMode ? LogoDark : Logo} alt="logo" /> */}
                        <img width={'162px'} height="43px" src={Logo} alt="logo"/>
                    </UniIcon>
                </Title>
                <HeaderLinks className="MenuLinks flex-wrap ms-0 ms-sm-4 ms-md-5">
                    <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
                        {t('swap')}
                    </StyledNavLink>
                    <StyledNavLink
                        id={`pool-nav-link`}
                        to={'/pool'}
                        isActive={(match, {pathname}) =>
                            Boolean(match) ||
                            pathname.startsWith('/add') ||
                            pathname.startsWith('/remove') ||
                            pathname.startsWith('/create') ||
                            pathname.startsWith('/find')
                        }
                    >
                        {t('pool')}
                    </StyledNavLink>
                    <a className="btn BtnOrange shadow-none rounded py-1 px-3 me-2 minHeightNone" target="_blank" href="https://market.vulcanforged.com/">
                        Marketplace
                    </a>
                    <a className="btn BtnOrange shadow-none rounded py-1 px-3 minHeightNone" target="_blank" href="https://myforge.vulcanforged.com/">
                        My Forge
                    </a>
                    {/*<StyledNavLink id={`Rewards-nav-link`} to={'/Rewards'}>
                        {t('Rewards')}
                    </StyledNavLink>
                    <StyledNavLink id={`Charts-nav-link`} to={'/Charts'}>
                        Charts <span style={{fontSize: '8px',marginLeft: '3px'}}>↗</span>
                    </StyledNavLink>
                    <StyledNavLink id={`IDO-nav-link`} to={'/IDO'}>
                        IDO <span style={{fontSize: '8px',marginLeft: '3px'}}>↗</span>
                    </StyledNavLink>*/}
                    {/* <StyledNavLink id={`stake-nav-link`} to={'/uni'}>
            UNI
          </StyledNavLink> */}
                    {/* <StyledNavLink id={`stake-nav-link`} to={'/vote'}>
            Vote
          </StyledNavLink> */}
                    {/* <StyledExternalLink id={`stake-nav-link`} href={'https://uniswap.info'}>
            Charts <span style={{ fontSize: '11px' }}>↗</span>
          </StyledExternalLink> */}
                </HeaderLinks>
            </HeaderRow>
            <HeaderControls className="HeaderControls">
                <HeaderLinks className="MenuLinks Second">
                    <StyledExternalLink id={`stake-nav-link`} href={'https://wallet.polygon.technology/login?next=%2Fbridge'}>
                        Bridge Assets <span style={{fontSize: '8px',marginLeft: '3px'}}>↗</span>
                    </StyledExternalLink>
                </HeaderLinks>
                <HeaderElement>
                    <HideSmall className="NetworkButton">
                        {chainId && NETWORK_LABELS[chainId] && (
                            <NetworkCard title={NETWORK_LABELS[chainId]}>{NETWORK_LABELS[chainId]}</NetworkCard>
                        )}
                    </HideSmall>
                    {availableClaim && !showClaimPopup && (
                        <UNIWrapper onClick={toggleClaimModal}>
                            <UNIAmount active={!!account && !availableClaim} style={{pointerEvents: 'auto'}}>
                                <TYPE.white padding="0 2px">
                                    {claimTxn && !claimTxn?.receipt ? <Dots>Claiming UNI</Dots> : 'Claim UNI'}
                                </TYPE.white>
                            </UNIAmount>
                            <CardNoise/>
                        </UNIWrapper>
                    )}
                    {/* {!availableClaim && aggregateBalance && (
            <UNIWrapper onClick={() => setShowUniBalanceModal(true)}>
              <UNIAmount active={!!account && !availableClaim} style={{ pointerEvents: 'auto' }}>
                {account && (
                  <HideSmall>
                    <TYPE.white
                      style={{
                        paddingRight: '.4rem'
                      }}
                    >
                      <CountUp
                        key={countUpValue}
                        isCounting
                        start={parseFloat(countUpValuePrevious)}
                        end={parseFloat(countUpValue)}
                        thousandsSeparator={','}
                        duration={1}
                      />
                    </TYPE.white>
                  </HideSmall>
                )}
                UNI
              </UNIAmount>
              <CardNoise />
            </UNIWrapper>
          )} */}
                    <AccountElement active={!!account} style={{pointerEvents: 'auto'}}>
                        {account && userEthBalance ? (
                            <BalanceText style={{flexShrink: 0}} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                                {userEthBalance?.toSignificant(4)} ETH
                            </BalanceText>
                        ) : null}
                        <Web3Status/>
                    </AccountElement>
                </HeaderElement>
                <HeaderElementWrap>
                    {/* <StyledMenuButton onClick={() => toggleDarkMode()}>
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </StyledMenuButton> */}
                    <Settings/>
                    <Menu/>
                </HeaderElementWrap>
            </HeaderControls>
        </HeaderFrame>
    )
}
