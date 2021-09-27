import React from "react";
import FireLogo from '../../assets/images/fire_logo.png'
import MetaMaskLogo from '../../assets/images/metamask.png'

const FarmPage = () => {
    return (
        <div className="FarmPage pb-5 mb-5">
            <div className="FarmBanner p-3 p-sm-4 p-lg-5 text-white">
                <h3 className={'mb-4'}>Syrup <span className="OrangeColor">Pools</span></h3>
                <p className={'mb-1'}>Just stake some tokens to earn.</p>
                <p className={'mb-1 fw-semibold'}> High APR, low risk.</p>
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
                                <path fill="#fff" d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path>
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
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-7 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Earned</label>
                                <span className={'FSize_18'}>0</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>APR</label>
                                <span className={'FSize_18 text-white'}>54.99%</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-3 col-md-4 col-sm-4 col-7 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Total Staked</label>
                                <span className={'FSize_18 text-white'}>$765,923,091</span>
                                <button type="button" className="bg-transparent border-0 p-0 ms-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Liquidity Tooltip on top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                         fill="none" stroke="#888888"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="feather feather-help-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Ends in</label>
                                <span className={'FSize_18 text-white'}>--</span>
                                <button type="button" className="bg-transparent border-0 p-0 ms-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Multiplier Tooltip on top">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                             fill="none" stroke="#888888"
                                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                             className="feather feather-help-circle">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                        </svg>
                                </button>
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
                                <div className={'row justify-content-between'}>
                                    <div className={'col-xxl-3 col-xl-3 col-lg-3 mb-3 mb-lg-0'}>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            See Token Info
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            View Project Site
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            Add to Metamask
                                            <img className={'ms-2'} width={'17'} src={MetaMaskLogo} alt={'Metamask Logo'} />
                                        </a></p>
                                        <a href={'#'} className={'btn BtnBorderGrey rounded-pill'}>
                                            <svg className={'mb-1 me-2'} xmlns="http://www.w3.org/2000/svg" width="11.798" height="11.813"
                                                 viewBox="0 0 11.798 11.813">
                                                <path fill="#888" d="M5.906,0A5.906,5.906,0,1,0,10.1,10.1L9.037,9.037a4.433,4.433,0,1,1-3.145-7.56A4.3,4.3,0,0,1,8.978,2.82L7.368,4.43H11.8V0L10.041,1.757A5.873,5.873,0,0,0,5.892,0Z"/>
                                            </svg>
                                            Manual
                                        </a>
                                        <button type="button" className="bg-transparent border-0 p-0 ms-2" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Manual Tooltip on top">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                                 fill="none" stroke="#888888"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-help-circle">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={'col-xxl-4 col-xl-4 col-lg mb-3 mb-lg-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <p className="text-white FSize_16">PYR Earned</p>
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="ColorGrey BeforeNone mb-2">0.0</h3>
                                                    <p className={'FSize_18 mb-0'}>0 USD</p>
                                                </div>
                                                <div className="col-auto">
                                                    <button type="button" className="btn BtnGrey py-2 px-3">
                                                        Harvest
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-xxl-4 col-xl-4 col-lg mb-3 mb-lg-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <p className="text-white FSize_16">Enable Farm</p>
                                            <button type="button" className="btn BtnOrange py-2 px-3 w-100">
                                                Enable
                                            </button>
                                        </div>
                                    </div>
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
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-7 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Earned</label>
                                <span className={'FSize_18'}>0</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>APR</label>
                                <span className={'FSize_18 text-white'}>54.99%</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-3 col-md-4 col-sm-4 col-7 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Total Staked</label>
                                <span className={'FSize_18 text-white'}>$765,923,091</span>
                                <button type="button" className="bg-transparent border-0 p-0 ms-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Liquidity Tooltip on top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                         fill="none" stroke="#888888"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="feather feather-help-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </button>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Ends in</label>
                                <span className={'FSize_18 text-white'}>--</span>
                                <button type="button" className="bg-transparent border-0 p-0 ms-2" data-bs-toggle="tooltip"
                                        data-bs-placement="top" title="Multiplier Tooltip on top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                         fill="none" stroke="#888888"
                                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                         className="feather feather-help-circle">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                </button>
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
                                <div className={'row justify-content-between'}>
                                    <div className={'col-xxl-3 col-xl-3 col-lg-3 mb-3 mb-lg-0'}>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            See Token Info
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            View Project Site
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                 viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className="ms-2">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                <polyline points="15 3 21 3 21 9"></polyline>
                                                <line x1="10" y1="14" x2="21" y2="3"></line>
                                            </svg>
                                        </a></p>
                                        <p><a href={"#"} className={'OrangeColor text-decoration-on-hover'}>
                                            Add to Metamask
                                            <img className={'ms-2'} width={'17'} src={MetaMaskLogo} alt={'Metamask Logo'} />
                                        </a></p>
                                        <a href={'#'} className={'btn BtnBorderGrey rounded-pill'}>
                                            <svg className={'mb-1 me-2'} xmlns="http://www.w3.org/2000/svg" width="11.798" height="11.813"
                                                 viewBox="0 0 11.798 11.813">
                                                <path fill="#888" d="M5.906,0A5.906,5.906,0,1,0,10.1,10.1L9.037,9.037a4.433,4.433,0,1,1-3.145-7.56A4.3,4.3,0,0,1,8.978,2.82L7.368,4.43H11.8V0L10.041,1.757A5.873,5.873,0,0,0,5.892,0Z"/>
                                            </svg>
                                            Manual
                                        </a>
                                        <button type="button" className="bg-transparent border-0 p-0 ms-2" data-bs-toggle="tooltip"
                                                data-bs-placement="top" title="Manual Tooltip on top">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                                                 fill="none" stroke="#888888"
                                                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                 className="feather feather-help-circle">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={'col-xxl-4 col-xl-4 col-lg mb-3 mb-lg-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <p className="text-white FSize_16">PYR Earned</p>
                                            <div className="row align-items-center">
                                                <div className="col">
                                                    <h3 className="ColorGrey BeforeNone mb-2">0.0</h3>
                                                    <p className={'FSize_18 mb-0'}>0 USD</p>
                                                </div>
                                                <div className="col-auto">
                                                    <button type="button" className="btn BtnGrey py-2 px-3">
                                                        Harvest
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-xxl-4 col-xl-4 col-lg mb-3 mb-lg-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <p className="text-white FSize_16">Enable Farm</p>
                                            <button type="button" className="btn BtnOrange py-2 px-3 w-100">
                                                Enable
                                            </button>
                                        </div>
                                    </div>
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
