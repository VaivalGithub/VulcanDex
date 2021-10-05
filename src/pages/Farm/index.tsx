import React from "react";
import FireLogo from '../../assets/images/fire_logo.png'
import TokenImg from '../../assets/images/img-collectibles-2.png'

const FarmPage = () => {
    return (
        <div className="FarmPage pb-5 mb-5">
            <div className="FarmBanner p-3 p-sm-4 p-lg-5 text-white">
                <h3 className={'mb-4 OrangeColor'}>Farms</h3>
                <p className={'mb-1'}>Stake LP tokens to earn.</p>
                <a className={'OrangeColor FSize_14'} href="#">
                    Community Auctions
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="feather feather-arrow-right ms-2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </a>
            </div>
            <div className={'p-3 p-sm-4 p-lg-5 FSize_14'}>
                <div className={'row align-items-center text-white mb-4'}>
                    <div className={'col-xxl-auto col-lg-auto d-flex align-items-center me-auto mb-3 mb-lg-0 justify-content-center justify-content-lg-start flex-wrap'}>
                        <button type="button" className="btn shadow-none OrangeSvgOnHover p-0 me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" viewBox="0 0 30 20">
                                <g transform="translate(-419 -354)">
                                    <rect fill="#fff" width="8" height="8" rx="1" transform="translate(419 354)"/>
                                    <rect fill="#fff" width="8" height="8" rx="1" transform="translate(430 354)"/>
                                    <rect fill="#fff" width="8" height="8" rx="1" transform="translate(441 354)"/>
                                    <rect fill="#fff" width="8" height="8" rx="1" transform="translate(419 366)"/>
                                    <rect fill="#fff" width="8" height="8" rx="1" transform="translate(430 366)"/>
                                    <rect fill="#fff" width="8" height="8" rx="1" transform="translate(441 366)"/>
                                </g>
                            </svg>
                        </button>
                        <button type="button" className="btn shadow-none OrangeSvgOnHover p-0 me-3">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="th-list" role="img" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#fff"
                                      d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path>
                            </svg>
                        </button>
                        <div className="form-check form-switch FSize_24 me-3">
                            <input className="form-check-input shadow-none border-0 cursor-pointer" type="checkbox" id="Staked" />
                            <label className="form-check-label FSize_14" htmlFor="Staked">
                                Staked Only
                            </label>
                        </div>
                        <div className={'w-100 d-block d-sm-none mb-3'}></div>
                        <div className="form-switch-text-inside p-1 text-white">
                            <button type="button" className="btn btn-lg BtnOrange active shadow-none text-white FSize_16">Live</button>
                            <button type="button" className="btn btn-lg btn-default shadow-none text-white FSize_16">Finished</button>
                        </div>
                    </div>
                    <div className={'col-xxl-2 col-xl col-lg mb-3 mb-lg-0'}>
                        <label className={'fw-semibold text-uppercase mb-1'}>SORT BY</label>
                        <select className={'form-select shadow-none border-0 w-100'}>
                            <option>Hot</option>
                            <option>Cold</option>
                            <option>Coldest</option>
                        </select>
                    </div>
                    <div className={'col-xxl-3 col-xl col-lg'}>
                        <label className={'fw-semibold text-uppercase mb-1'}>Search</label>
                        <input type="text" className={'form-control shadow-none border-0 w-100'} placeholder={'Search Farms'} />
                    </div>
                </div>
                <div id="accordionFarms" className={'BgDark accordion p-3 border-radius-15'}>
                    <div className={'BorderBottom py-3'}>
                        <div className={'row align-items-center justify-content-between gx-2'}>
                            <div className={'col-xxl-3 col-xl-3 col-lg-3 col-md-12 d-flex align-items-center'}>
                                <img className={'me-2'} width={'17'} src={FireLogo} alt={'Fire Logo'} />
                                <h4 className={'FSize_18 text-white mb-0'}>PYR-MATIC</h4>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Status</label>
                                <span className={'FSize_18 text-success'}>Open</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Max Participants</label>
                                <span className={'FSize_18 text-white'}>54</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-3 col-md-4 col-sm-4 col-7 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Lockup Duration</label>
                                <span className={'FSize_18 text-white'}>Friday, November 5, 2020 15:54 AM</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-8 col-sm-8 col-7 mb-3 mb-lg-0'}>
                                <button className="accordion-button shadow-none FSize_18 collapsed bg-transparent p-0 OrangeColor w-auto fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#FarmsCollapse_1"
                                        aria-expanded="false" aria-controls="FarmsCollapse_1">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'BorderBottom'}>
                        <div id="FarmsCollapse_1" className="accordion-collapse collapse" data-bs-parent="#accordionFarms">
                            <div className="p-3 p-sm-4 px-xl-5 py-xl-4">
                                <div className={'row align-items-center'}>
                                    <div className={'col-xxl-3 col-xl-3 col-lg-3 mb-3 mb-lg-0 me-auto'}>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            Get PYR-ETH LP
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            View Contract
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            See Pair Info
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <a href={'#'} className={'btn BtnBorderGrey rounded-pill'}>
                                            <svg className={'mb-1 me-2'} xmlns="http://www.w3.org/2000/svg" width="12.417" height="11.813" viewBox="0 0 12.417 11.813">
                                                <g transform="translate(-494.902 -803.894)">
                                                    <path fill="#535353"
                                                          d="M251.488,18.343l-1.406-1.561.22-2.089-2.055-.435L247.2,12.437l-1.919.858-.259,5.049.259,5.049,1.919.858,1.048-1.821,2.055-.435-.22-2.089Z"
                                                          transform="translate(255.831 791.457)"/>
                                                    <path fill="#888"
                                                          d="M4.289,12.437,3.241,14.258l-2.055.435.22,2.089L0,18.343,1.406,19.9l-.22,2.089,2.055.435L4.289,24.25l1.919-.858v-10.1Z"
                                                          transform="translate(494.902 791.457)"/>
                                                    <g transform="translate(498.432 807.956)">
                                                        <path fill="#f7f0eb"
                                                              d="M247.883,180.21l-.543-.485-2.059,2.307-.259.573.259.521Z"
                                                              transform="translate(-242.601 -179.725)"/>
                                                        <path fill="#fffbf5"
                                                              d="M145.863,233.1l-.515.515,2.165,2.165.514-.576v-1.094l-.544.609Z"
                                                              transform="translate(-145.348 -231.799)"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            Core
                                        </a>
                                    </div>
                                    <div className={'col-xxl-3 col-xl-4 col-lg col-md me-5 mb-3 mb-lg-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <img src={TokenImg} alt={'image'} className={'img-fluid TokenImg'} />
                                                </div>
                                                <div className="col">
                                                    <p>Any Text Comes Here...</p>
                                                    <p>Any Text Comes Here...</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-xxl-4 col-xl-4 col-lg col-md mb-3 mb-lg-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className={'d-flex justify-content-between mb-3 pe-3'}>
                                                <p className="text-white FSize_16 mb-0">Add Minimum 10 LP Tokens</p>
                                                <span><span className={'OrangeColor'}>10</span> ETH</span>
                                            </div>
                                            <input type="text" className={'form-control shadow-none border-0 w-100 mb-3'} placeholder={'Enter value here'} />
                                            <button type="button" className="btn BtnOrange py-2 px-3 me-3">
                                                Approve
                                            </button>
                                            <button type="button" className="btn BtnBorderOrange py-2 px-4">
                                                Lock
                                            </button>
                                        </div>
                                    </div>
                                    {/*This will show in case of Unlock Button*/}
                                        {/*<div className={'col-xxl-4 col-xl-4 col-lg mb-3 mb-lg-0'}>
                                            <button type="button" className="btn BtnBorderOrange py-2 px-4">
                                                Unlock
                                            </button>
                                        </div>*/}
                                    {/*End*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'BorderBottom py-3'}>
                        <div className={'row align-items-center justify-content-between gx-2'}>
                            <div className={'col-xxl-3 col-xl-3 col-lg-3 col-md-12 d-flex align-items-center'}>
                                <img className={'me-2'} width={'17'} src={FireLogo} alt={'Fire Logo'} />
                                <h4 className={'FSize_18 text-white mb-0'}>PYR-MATIC</h4>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Status</label>
                                <span className={'FSize_18 text-danger'}>Closed</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Max Participants</label>
                                <span className={'FSize_18 text-white'}>54</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-3 col-md-4 col-sm-4 col-7 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Lockup Duration</label>
                                <span className={'FSize_18 text-white'}>Friday, November 5, 2020 15:54 AM</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-8 col-sm-8 col-7 mb-3 mb-lg-0'}>
                                <button className="accordion-button shadow-none FSize_18 collapsed bg-transparent p-0 OrangeColor w-auto fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#FarmsCollapse_2"
                                        aria-expanded="false" aria-controls="FarmsCollapse_2">
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'BorderBottom'}>
                        <div id="FarmsCollapse_2" className="accordion-collapse collapse" data-bs-parent="#accordionFarms">
                            <div className="p-3 p-sm-4 px-xl-5 py-xl-4">
                                <div className={'row align-items-center'}>
                                    <div className={'col-xxl-3 col-xl-3 col-lg-3 mb-3 mb-lg-0 me-auto'}>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            Get PYR-ETH LP
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            View Contract
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            See Pair Info
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <a href={'#'} className={'btn BtnBorderGrey rounded-pill'}>
                                            <svg className={'mb-1 me-2'} xmlns="http://www.w3.org/2000/svg" width="12.417" height="11.813" viewBox="0 0 12.417 11.813">
                                                <g transform="translate(-494.902 -803.894)">
                                                    <path fill="#535353"
                                                          d="M251.488,18.343l-1.406-1.561.22-2.089-2.055-.435L247.2,12.437l-1.919.858-.259,5.049.259,5.049,1.919.858,1.048-1.821,2.055-.435-.22-2.089Z"
                                                          transform="translate(255.831 791.457)"/>
                                                    <path fill="#888"
                                                          d="M4.289,12.437,3.241,14.258l-2.055.435.22,2.089L0,18.343,1.406,19.9l-.22,2.089,2.055.435L4.289,24.25l1.919-.858v-10.1Z"
                                                          transform="translate(494.902 791.457)"/>
                                                    <g transform="translate(498.432 807.956)">
                                                        <path fill="#f7f0eb"
                                                              d="M247.883,180.21l-.543-.485-2.059,2.307-.259.573.259.521Z"
                                                              transform="translate(-242.601 -179.725)"/>
                                                        <path fill="#fffbf5"
                                                              d="M145.863,233.1l-.515.515,2.165,2.165.514-.576v-1.094l-.544.609Z"
                                                              transform="translate(-145.348 -231.799)"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            Core
                                        </a>
                                    </div>
                                    <div className={'col-xxl-3 col-xl-4 col-lg col-md me-5 mb-3 mb-lg-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className="row align-items-center">
                                                <div className="col-auto">
                                                    <img src={TokenImg} alt={'image'} className={'img-fluid TokenImg'} />
                                                </div>
                                                <div className="col">
                                                    <p>Any Text Comes Here...</p>
                                                    <p>Any Text Comes Here...</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-xxl-4 col-xl-4 col-lg col-md mb-3 mb-lg-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className={'d-flex justify-content-between mb-3 pe-3'}>
                                                <p className="text-white FSize_16 mb-0">Add Minimum 10 LP Tokens</p>
                                                <span><span className={'OrangeColor'}>10</span> ETH</span>
                                            </div>
                                            <input type="text" className={'form-control shadow-none border-0 w-100 mb-3'} placeholder={'Enter value here'} />
                                            <button type="button" className="btn BtnOrange py-2 px-3 me-3">
                                                Approve
                                            </button>
                                            <button type="button" className="btn BtnBorderOrange py-2 px-4">
                                                Lock
                                            </button>
                                        </div>
                                    </div>
                                    {/*This will show in case of Unlock Button*/}
                                    {/*<div className={'col-xxl-4 col-xl-4 col-lg mb-3 mb-lg-0'}>
                                            <button type="button" className="btn BtnBorderOrange py-2 px-4">
                                                Unlock
                                            </button>
                                        </div>*/}
                                    {/*End*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FarmPage;
