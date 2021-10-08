import React from "react";
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
                <div className={'row text-white mb-4'}>
                    <div className={'col-md-auto col-lg-auto col-xl-auto col-xxl-auto me-auto mb-3 mb-lg-0'}>
                        <a href="" className="text-uppercase text-white FSize_14">
                            Go Back
                            <svg width="25" height="25" className={'d-block mt-1'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path fill="#EB7527" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className={'col-12 col-sm-6 col-md-4 col-lg col-xl col-xxl-2 mb-3 mb-lg-0'}>
                        <label className={'fw-semibold text-uppercase mb-1'}>SORT BY</label>
                        <select className={'form-select shadow-none border-0 w-100'}>
                            <option>Hot</option>
                            <option>Cold</option>
                            <option>Coldest</option>
                        </select>
                    </div>
                    <div className={'col-12 col-sm-6 col-md-4 col-lg col-xl col-xxl-3 col-xl'}>
                        <label className={'fw-semibold text-uppercase mb-1'}>Search</label>
                        <input type="text" className={'form-control shadow-none border-0 w-100'} placeholder={'Search Farms'} />
                    </div>
                </div>
                <div className={'BgDark border-radius-15 mb-4'}>
                    <div className={'row justify-content-between'}>
                        <div className={'col-sm-12 col-md-8 col-lg-8 col-xl-9 col-xxl-9'}>
                            <div className={'BorderBottom p-4'}>
                                <div className={'row'}>
                                    <div className={'col-xxl col-xl-4 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className="row">
                                                <div className="col-auto mb-3 mb-xxl-0">
                                                    <img src={TokenImg} alt={'image'} className={'img-fluid TokenImg'} />
                                                </div>
                                                <div className="col">
                                                    <p className={'mb-0'}>Cum voluptatem qui. Rerum aut culpa aspernatur officiis aut. Aut eaque quidem. Volu- ptatem cupiditate vel quo voluptatum qui qui.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-xxl col-xl-4 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className={'d-flex justify-content-between mb-3 pe-3'}>
                                                <p className="text-white FSize_16 mb-0">Enable Farm</p>
                                                <span><span className={'OrangeColor'}>10</span> ETH</span>
                                            </div>
                                            <input type="text" className={'form-control shadow-none border-0 w-100 mb-3'} placeholder={'Enter value here'} />
                                            <button type="button" className="btn BtnOrange py-2 px-3 me-3 mb-3 mb-xxl-0">
                                                Approve
                                            </button>
                                            <button type="button" className="btn BtnBorderOrange py-2 px-4">
                                                Lock
                                            </button>
                                        </div>
                                    </div>
                                    <div className={'col-xxl-3 col-xl-4 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className={'row justify-content-between h-100'}>
                                            <div className={'col-12 mb-3'}>
                                                <label className={'d-block mb-1'}>Lockup Duration</label>
                                                <span className={'FSize_18 text-white'}>Friday, November 5, 2020 15:54 AM</span>
                                            </div>
                                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                                <label className={'d-block mb-1'}>Max Participants</label>
                                                <span className={'FSize_18 text-white'}>54</span>
                                            </div>
                                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                                <label className={'d-block mb-1'}>Status</label>
                                                <span className={'FSize_18 text-danger'}>Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'p-4'}>
                                <div className={'row'}>

                                    <div className={'col-xxl col-xl-4 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className="row">
                                                <div className="col-auto mb-3 mb-xxl-0">
                                                    <img src={TokenImg} alt={'image'} className={'img-fluid TokenImg'} />
                                                </div>
                                                <div className="col">
                                                    <p className={'mb-0'}>Cum voluptatem qui. Rerum aut culpa aspernatur officiis aut. Aut eaque quidem. Volu- ptatem cupiditate vel quo voluptatum qui qui.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-xxl col-xl-4 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className={'d-flex justify-content-between mb-3 pe-3'}>
                                                <p className="text-white FSize_16 mb-0">Enable Farm</p>
                                                <span><span className={'OrangeColor'}>10</span> ETH</span>
                                            </div>
                                            <input type="text" className={'form-control shadow-none border-0 w-100 mb-3'} placeholder={'Enter value here'} />
                                            <button type="button" className="btn BtnOrange py-2 px-3 me-3 mb-3 mb-xxl-0">
                                                Approve
                                            </button>
                                            <button type="button" className="btn BtnBorderOrange py-2 px-4">
                                                Lock
                                            </button>
                                        </div>
                                    </div>
                                    <div className={'col-xxl-3 col-xl-4 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className={'row justify-content-between h-100'}>
                                            <div className={'col-12 mb-3'}>
                                                <label className={'d-block mb-1'}>Lockup Duration</label>
                                                <span className={'FSize_18 text-white'}>Friday, November 5, 2020 15:54 AM</span>
                                            </div>
                                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                                <label className={'d-block mb-1'}>Max Participants</label>
                                                <span className={'FSize_18 text-white'}>54</span>
                                            </div>
                                            <div className={'col-xxl-auto col-xl-auto col-lg-auto col-md-4 col-sm-4 col-5 mb-3 mb-lg-0'}>
                                                <label className={'d-block mb-1'}>Status</label>
                                                <span className={'FSize_18 text-success'}>Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3'}>
                            <div className={'border-start border-color-grey pe-4 ps-5 py-4 text-center text-sm-start h-100'}>
                                <button type="button" className="btn BtnBorderOrange py-2 px-4 mb-4">
                                    Disconenct Waller
                                </button>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FarmPage;
