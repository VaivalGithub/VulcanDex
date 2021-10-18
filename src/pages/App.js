import React, {Suspense} from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import AddressClaimModal from '../components/claim/AddressClaimModal'
import Header from '../components/Header'
import Polling from '../components/Header/Polling'
import URLWarning from '../components/Header/URLWarning'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import {ApplicationModal} from '../state/application/actions'
import {useModalOpen, useToggleModal} from '../state/application/hooks'
import DarkModeQueryParamReader from '../theme/DarkModeQueryParamReader'
import AddLiquidity from './AddLiquidity'
import {
    RedirectDuplicateTokenIds,
    RedirectOldAddLiquidityPathStructure,
    RedirectToAddLiquidity
} from './AddLiquidity/redirects'
// import Earn from './Earn'
import Manage from './Earn/Manage'
// import MigrateV1 from './MigrateV1'
// import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import Home from './Home/index'
import Farm from './Farm'
import ConnectionPendingFarm from './Farm/ConnectionPending'


import PYRMATIC_P1 from './Farm/Pool1-PYRMATIC'
import PYRLAVA_P1 from './Farm/Pool1-PYRLAVA'


import Staking from './Staking'
import SyrupPools from './SyrupPools'
import Collectibles from './Collectibles'
import Swap from './Swap'
import {RedirectOldRemoveLiquidityPathStructure} from './RemoveLiquidity/redirects'
// import { OpenClaimAddressModalAndRedirectToSwap, RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'
import {RedirectPathToSwapOnly, RedirectToSwap} from './Swap/redirects'
import StakingPage from "./Staking";
import {darken} from "polished";

// import Vote from './Vote'
// import VotePage from './Vote/VotePage'

const AppWrapper = styled.div`
`

const StyledNavLink = styled(NavLink).attrs({})``

const HeaderWrapper = styled.div`
  ${({theme}) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`
const SideBar = styled.div`
`
const ContentArea = styled.div`
`
const BodyWrapper = styled.div`

`
const MenuButton = styled.div`
  
`

const Marginer = styled.div`
  margin-top: 5rem;
`

function TopLevelModals() {
    const open = useModalOpen(ApplicationModal.ADDRESS_CLAIM)
    const toggle = useToggleModal(ApplicationModal.ADDRESS_CLAIM)
    return <AddressClaimModal isOpen={open} onDismiss={toggle}/>
}

export default function App() {
    return (
        <Suspense fallback={null}>
            <Route component={GoogleAnalyticsReporter}/>
            <Route component={DarkModeQueryParamReader}/>
            <AppWrapper>
                <URLWarning/>
                <HeaderWrapper className="Header">
                    <Header/>
                </HeaderWrapper>
                <BodyWrapper id="MenuCustomDropDown" className="d-flex align-items-stretch">
                    <MenuButton id="MenuBtn" role="button" data-bs-toggle="dropdown" aria-expanded="false" className="btn shadow-none p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16">
                            <g transform="translate(-57 -38)">
                                <rect fill="#fa7005" width="20" height="2" transform="translate(57 38)"/>
                                <rect fill="#fa7005" width="10" height="2" transform="translate(57 45)"/>
                                <rect fill="#fa7005" width="20" height="2" transform="translate(57 52)"/>
                            </g>
                        </svg>
                    </MenuButton>
                    <div id="SideBar" aria-labelledby="MenuBtn" className={'dropdown-menu p-2 border-0 position-static d-flex flex-column'}>
                        <ul className="list-unstyled mb-auto">
                            <li className="mb-4">
                                <StyledNavLink id={`Home`} to={'/Home'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g transform="translate(-10675 291)">
                                            <path fill="#fa7005" d="M19.483,8.709h0L11.314.54a1.843,1.843,0,0,0-2.607,0L.543,8.7l-.008.008a1.843,1.843,0,0,0,1.227,3.141l.057,0h.326v6.011A2.16,2.16,0,0,0,4.3,20.024H7.5a.587.587,0,0,0,.587-.587V14.724a.985.985,0,0,1,.984-.984h1.885a.985.985,0,0,1,.984.984v4.713a.587.587,0,0,0,.587.587h3.2a2.16,2.16,0,0,0,2.158-2.157V11.855h.3a1.844,1.844,0,0,0,1.3-3.146Zm0,0"
                                                  transform="translate(10676.742 -288.696)"/>
                                            <rect fill="none" width="24" height="24"
                                                  transform="translate(10675 -291)"/>
                                        </g>
                                    </svg>
                                    <span>Home</span>
                                </StyledNavLink>
                            </li>
                            <li className="dropdown mb-4">
                                <a className="dropdown-toggle" href="#" id="TradeSubMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g transform="translate(-10649 291)">
                                            <g transform="translate(10651.491 -288.696)">
                                                <path fill="#fa7005"
                                                      d="M137.564,130.334a.4.4,0,0,0-.782,0v2.336H136v8.009h.782v2a.4.4,0,0,0,.782,0v-2h.782V132.67h-.782Zm0,0"
                                                      transform="translate(-130.525 -125.662)"/>
                                                <path fill="#fa7005"
                                                      d="M277.564,90.334a.4.4,0,0,0-.782,0V92.67H276v8.009h.782v2a.4.4,0,0,0,.782,0v-2h.782V92.67h-.782Zm0,0"
                                                      transform="translate(-265.05 -86.996)"/>
                                                <path fill="#fa7005"
                                                      d="M-2.436.334A.366.366,0,0,0-2.827,0a.366.366,0,0,0-.391.334V2.67H-4v8.009h.782v2a.366.366,0,0,0,.391.334.366.366,0,0,0,.391-.334v-2h.782V2.67h-.782Zm0,0"
                                                      transform="translate(4)"/>
                                                <path fill="#fa7005"
                                                      d="M418.346,212.67h-.782v-2.336a.4.4,0,0,0-.782,0v2.336H416v8.009h.782v2a.4.4,0,0,0,.782,0v-2h.782Zm0,0"
                                                      transform="translate(-399.574 -202.992)"/>
                                            </g>
                                            <rect fill="none" width="24" height="24" transform="translate(10649 -291)"/>
                                        </g>
                                    </svg>
                                    <span>Trade</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark p-2" aria-labelledby="TradeSubMenu">
                                    <li>
                                        <StyledNavLink id={`manage-pool-nav-link`} to={'/swap?outputCurrency=0x348e62131fce2F4e0d5ead3Fe1719Bc039B380A9'}>
                                            {('Swap')}
                                        </StyledNavLink>
                                    </li>
                                    <li>
                                        <StyledNavLink id={`pool-nav-link`} to={'/pool'}>
                                            {('Manage Pools')}
                                        </StyledNavLink>
                                    </li>
                                    <li>
                                        <StyledNavLink id={`Add-Liquidity-nav-link`} to={'/add/0x348e62131fce2F4e0d5ead3Fe1719Bc039B380A9'}>
                                            {('Add Liquidity')}
                                        </StyledNavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <StyledNavLink id={`Farm`} to={'/Farm'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24.023" height="24" viewBox="0 0 24.023 24">
                                        <g transform="translate(-10621 291)">
                                            <g transform="translate(10621.455 -288.696)">
                                                <path fill="#fa7005"
                                                      d="M5.524,195a5.524,5.524,0,1,0,5.524,5.524A5.524,5.524,0,0,0,5.524,195Zm0,7.6A2.071,2.071,0,1,1,7.6,200.524,2.074,2.074,0,0,1,5.524,202.6Zm0,0"
                                                      transform="translate(0 -186.024)"/>
                                                <path fill="#fa7005"
                                                      d="M105.69,300a.69.69,0,1,0,.69.69A.691.691,0,0,0,105.69,300Zm0,0"
                                                      transform="translate(-100.167 -286.191)"/>
                                                <path fill="#fa7005"
                                                      d="M363.381,47.071a.691.691,0,0,1,.69-.69V45A2.074,2.074,0,0,0,362,47.071v2.071h1.381Zm0,0"
                                                      transform="translate(-345.337 -42.929)"/>
                                                <path fill="#fa7005"
                                                      d="M19.841,141.9a5.519,5.519,0,0,1,7.544-2.02v-.742a2.765,2.765,0,0,0-2.762-2.762H15.3a8.278,8.278,0,0,0-9.848.513l.879,1.065a6.906,6.906,0,0,1,11.16,3.946Zm0,0"
                                                      transform="translate(-5.198 -128.786)"/>
                                                <path fill="#fa7005"
                                                      d="M271.648,315H270v2.071h1.516a5.545,5.545,0,0,1,.132-2.071Zm0,0"
                                                      transform="translate(-257.572 -300.5)"/>
                                                <path fill="#fa7005"
                                                      d="M336.143,255a4.143,4.143,0,1,0,4.143,4.143A4.143,4.143,0,0,0,336.143,255Zm0,4.833a.69.69,0,1,1,.69-.69A.69.69,0,0,1,336.143,259.833Zm0,0"
                                                      transform="translate(-316.718 -243.262)"/>
                                                <path fill="#fa7005"
                                                      d="M46.381,5.059a9.646,9.646,0,0,1,7.046,1.156h2.69L54.848,1.381h1.2V0H45V1.381h1.381Zm0,0"
                                                      transform="translate(-42.929)"/>
                                            </g>
                                            <rect fill="none" width="24" height="24" transform="translate(10621 -291)"/>
                                        </g>
                                    </svg>
                                    <span>Farms</span>
                                </StyledNavLink>
                            </li>
                            <li className="mb-4">
                                <StyledNavLink id={`Staking`} to={'/Staking'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g transform="translate(-10597 291)">
                                            <g transform="translate(10603.531 -288.696)">
                                                <g transform="translate(0)">
                                                    <path fill="#fa7005"
                                                          d="M24.3,4.781a2.145,2.145,0,0,1,.655,4.044.358.358,0,1,0,.322.639A2.861,2.861,0,0,0,24.4,4.073a.358.358,0,1,0-.1.708Z"
                                                          transform="translate(-15.412 -2.614)"/>
                                                    <path fill="#fa7005"
                                                          d="M2.224,22.108a.358.358,0,1,1-.436.565,6.3,6.3,0,0,1-.633-.558l.24,2.26H2.86a.358.358,0,1,1,0,.715H1.072a.332.332,0,0,0-.247.1.339.339,0,0,0-.111.254.358.358,0,0,0,.358.358h9.3a.332.332,0,0,0,.247-.1.339.339,0,0,0,.111-.254.358.358,0,0,0-.358-.358H4.648a.358.358,0,1,1,0-.715h5.4l.24-2.26a6.3,6.3,0,0,1-.633.558.357.357,0,0,1-.436-.565,5.721,5.721,0,0,0-.293-9.268.145.145,0,0,1-.032-.018,5.021,5.021,0,0,0-.679-.39.715.715,0,0,1-.4-.533L7.366,9H4.076l-.447,2.9a.718.718,0,0,1-.4.533,5.718,5.718,0,0,0-1.008,9.676Zm6.887-6.526a.358.358,0,1,1,.615-.361,4.647,4.647,0,0,1-6.365,6.365.358.358,0,1,1,.361-.615,3.935,3.935,0,0,0,5.388-5.388ZM2.435,14.3a4.638,4.638,0,0,1,5.646-.719.358.358,0,1,1-.361.615A3.935,3.935,0,0,0,2.331,19.58a.358.358,0,0,1-.125.49.368.368,0,0,1-.182.05.358.358,0,0,1-.308-.179A4.638,4.638,0,0,1,2.435,14.3Z"
                                                          transform="translate(0 -5.782)"/>
                                                    <path fill="#fa7005"
                                                          d="M10.358,2.5h3.576a.358.358,0,0,0,.358-.358V1.788H12.5a.358.358,0,1,1,0-.715h1.788V.358A.358.358,0,0,0,13.933,0H10.358A.358.358,0,0,0,10,.358v.715h1.073a.358.358,0,1,1,0,.715H10v.358A.358.358,0,0,0,10.358,2.5Z"
                                                          transform="translate(-6.424)"/>
                                                </g>
                                            </g>
                                            <rect fill="none" width="24" height="24"
                                                  transform="translate(10597 -291)"/>
                                        </g>
                                    </svg>
                                    <span>Staking</span>
                                </StyledNavLink>
                            </li>
                            {/*<li className="mb-4">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g transform="translate(-10572 291)">
                                            <path fill="#fa7005"
                                                  d="M6.231,22.561a6.231,6.231,0,1,0,6.231,6.231A6.238,6.238,0,0,0,6.231,22.561Zm0,10.8a4.57,4.57,0,1,1,4.57-4.57A4.575,4.575,0,0,1,6.231,33.362Zm0-7.062a2.493,2.493,0,1,0,2.493,2.493A2.5,2.5,0,0,0,6.231,26.3Zm0,3.323a.831.831,0,1,1,.831-.831A.832.832,0,0,1,6.231,29.623Zm15.038-.831a6.235,6.235,0,0,1-8.292,5.882.831.831,0,1,1,.549-1.568,4.57,4.57,0,1,0-.07-8.6.831.831,0,1,1-.575-1.559,6.235,6.235,0,0,1,8.388,5.848ZM4.434,20.609a6.232,6.232,0,0,1,12.4-.048.831.831,0,0,1-1.652.177,4.57,4.57,0,0,0-9.091.035.831.831,0,0,1-.826.749q-.041,0-.083,0a.831.831,0,0,1-.745-.909Zm8.681.374a.831.831,0,0,1-.745.909c-.028,0-.056,0-.083,0a.831.831,0,0,1-.826-.749.831.831,0,0,0-1.651-.021.831.831,0,0,1-1.649-.206,2.493,2.493,0,0,1,4.954.062Zm2.511,8.4a.831.831,0,0,0-.9-1.358.831.831,0,0,1-.622-1.541,2.493,2.493,0,1,1,0,4.622.831.831,0,0,1,.622-1.541A.83.83,0,0,0,15.626,29.38Z"
                                                  transform="translate(10573.52 -303.696)"/>
                                            <rect fill="none" width="24" height="24"
                                                  transform="translate(10572 -291)"/>
                                        </g>
                                    </svg>
                                    <span>Collectibles</span>
                                </a>
                            </li>
                            <li className="mb-4">
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g transform="translate(-10547 291)">
                                            <g transform="translate(10551.295 -288.696)">
                                                <g transform="translate(3.425 0)">
                                                    <ellipse fill="#fa7005" cx="4.479" cy="4.479" rx="4.479" ry="4.479"/>
                                                </g>
                                                <g transform="translate(0 10.012)">
                                                    <path fill="#fa7005"
                                                          d="M61.8,256a7.9,7.9,0,0,0-7.9,7.9A2.108,2.108,0,0,0,56,266.012H67.6A2.108,2.108,0,0,0,69.7,263.9,7.9,7.9,0,0,0,61.8,256Z"
                                                          transform="translate(-53.895 -256)"/>
                                                </g>
                                            </g>
                                            <rect fill="none" width="24" height="24" transform="translate(10547 -291)"/>
                                        </g>
                                    </svg>
                                    <span>Profile</span>
                                </a>
                            </li>*/}
                        </ul>
                        <div className="dropdown ForCollapseView text-center">
                            <a href="#" id="SettingOptions" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#888888"
                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                </svg>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark p-2" aria-labelledby="SettingOptions">
                                <li><a href="#">Dark Mode</a></li>
                                <li><a href="#">Light Mode</a></li>
                                <li><a href="#">English</a></li>
                                <li><a href="#">Dutch</a></li>
                            </ul>
                        </div>
                        <div className={'ForDesktopView justify-content-between align-items-start px-3'}>
                            <div className={'d-flex align-items-center'}>
                                <button type="button" className={'p-0 bg-transparent OrangeStrokeSvgOnHover border-0'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888888"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="5"></circle>
                                        <line x1="12" y1="1" x2="12" y2="3"></line>
                                        <line x1="12" y1="21" x2="12" y2="23"></line>
                                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                                        <line x1="1" y1="12" x2="3" y2="12"></line>
                                        <line x1="21" y1="12" x2="23" y2="12"></line>
                                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                                    </svg>
                                </button>
                                <span className={'px-1'}>/</span>
                                <button type="button" className={'p-0 bg-transparent OrangeStrokeSvgOnHover active border-0'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888888"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="dropdown text-uppercase LanduageDropDown">
                                <button className="p-0 border-0 bg-transparent text-white" type="button" id="ChooseLanguage" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg className={'me-2'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FA7005"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="2" y1="12" x2="22" y2="12"></line>
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                                    </svg>
                                    En
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark p-2" aria-labelledby="ChooseLanguage">
                                    <li><a className="dropdown-item px-2" href="#">En</a></li>
                                    <li><a className="dropdown-item px-2" href="#">Dutch</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ContentArea id="ContentArea">
                        <Popups/>
                        <Polling/>
                        <TopLevelModals/>
                        <Web3ReactManager>
                            <Switch>
                                <Route exact strict path="/" component={Home} />
                                <Route exact strict path="/home" component={Home}/>
                                <Route exact strict path="/swap" component={Swap}/>
                                {/* <Route exact strict path="/claim" component={OpenClaimAddressModalAndRedirectToSwap} /> */}
                                <Route exact strict path="/swap/:outputCurrency" component={RedirectToSwap}/>
                                <Route exact strict path="/send" component={RedirectPathToSwapOnly}/>
                                <Route exact strict path="/find" component={PoolFinder}/>
                                <Route exact strict path="/pool" component={Pool}/>
                                {/* <Route exact strict path="/uni" component={Earn} /> */}
                                {/* <Route exact strict path="/vote" component={Vote} /> */}
                                <Route exact strict path="/create" component={RedirectToAddLiquidity}/>
                                <Route exact path="/add" component={AddLiquidity}/>
                                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure}/>
                                <Route exact path="/add/:currencyIdA/:currencyIdB"
                                       component={RedirectDuplicateTokenIds}/>
                                <Route exact path="/create" component={AddLiquidity}/>
                                <Route exact path="/create/:currencyIdA"
                                       component={RedirectOldAddLiquidityPathStructure}/>
                                <Route exact path="/create/:currencyIdA/:currencyIdB"
                                       component={RedirectDuplicateTokenIds}/>
                               
                                <Route exact strict path="/remove/v1/:address" component={RemoveV1Exchange}/>
                                <Route exact strict path="/remove/:tokens"
                                       component={RedirectOldRemoveLiquidityPathStructure}/>
                                <Route exact strict path="/remove/:currencyIdA/:currencyIdB"
                                       component={RemoveLiquidity}/>
                                {/* <Route exact strict path="/migrate/v1" component={MigrateV1} /> */}
                                {/* <Route exact strict path="/migrate/v1/:address" component={MigrateV1Exchange} /> */}
                                <Route exact strict path="/uni/:currencyIdA/:currencyIdB" component={Manage}/>
                               
                               
                                {/* <Route exact strict path="/Farm"
                                       component={Farm}/> */}
                               
                               
                               <Route exact path="/Farm" component={Farm}/>
                               {/* <Route exact path="/FarmDetails-PYRMATIC" component={ConnectedFarmDetails}/> */}

                               
       //                             <Route exact path="/FarmDetails-PYRMATIC" component={PYRMATIC_P1 }/>
                               <Route exact path="/FarmDetails-PYRLAVA" component={PYRLAVA_P1 }/>

                             
                            
                               
                               
                                <Route exact strict path="/Staking"
                                       component={StakingPage}/>
                                <Route exact strict path="/SyrupPools"
                                       component={SyrupPools}/>
                                <Route exact strict path="/Collectibles"
                                       component={Collectibles}/>
                                {/* <Route exact strict path="/vote/:id" component={VotePage} /> */}
                                <Route component={RedirectPathToSwapOnly}/>
                            </Switch>
                        </Web3ReactManager>
                        {/*<Marginer/>*/}
                    </ContentArea>
                </BodyWrapper>
            </AppWrapper>
        </Suspense>
    )
}
