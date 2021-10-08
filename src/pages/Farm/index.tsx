import React from "react";
import FireLogo from '../../assets/images/fire_logo.png'

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
                <div className="toast-container">
                    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                                <strong className="me-auto">Bootstrap</strong>
                                <small className="text-muted">just now</small>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            See? Just like this.
                        </div>
                    </div>
                </div>
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
                        <div className={'row align-items-center gx-5'}>
                            <div className={'col-xxl-3 col-xl-3 col-lg-3 col-md-12 d-flex align-items-center me-auto'}>
                                <img className={'me-2'} width={'17'} src={FireLogo} alt={'Fire Logo'} />
                                <h4 className={'FSize_18 text-white mb-0'}>PYR-MATIC</h4>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>No. of Pools</label>
                                <span className={'FSize_18 text-white'}>07</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Max Participants</label>
                                <span className={'FSize_18 text-white'}>54</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-3 col-md-4 col-sm-4 col-12 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Lockup Duration</label>
                                <span className={'FSize_18 text-white'}>Friday, November 5, 2020 15:54 AM</span>
                            </div>
                        </div>
                    </div>
                    <div className={'py-3'}>
                        <div className={'row align-items-center justify-content-between gx-5'}>
                            <div className={'col-xxl-3 col-xl-3 col-lg-3 col-md-12 d-flex align-items-center me-auto'}>
                                <img className={'me-2'} width={'17'} src={FireLogo} alt={'Fire Logo'} />
                                <h4 className={'FSize_18 text-white mb-0'}>PYR-MATIC</h4>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>No. of Pools</label>
                                <span className={'FSize_18 text-white'}>07</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Max Participants</label>
                                <span className={'FSize_18 text-white'}>54</span>
                            </div>
                            <div className={'col-xxl-auto col-xl-auto col-lg-3 col-md-4 col-sm-4 col-12 mb-3 mb-lg-0'}>
                                <label className={'d-block mb-1'}>Lockup Duration</label>
                                <span className={'FSize_18 text-white'}>Friday, November 5, 2020 15:54 AM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FarmPage;
