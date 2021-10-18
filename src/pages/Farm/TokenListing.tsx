import React from "react";
import IconETH from '../../assets/images/icon-eth.jpg'
import IconPyr from '../../assets/images/icon-pyr.jpg'

const FarmPage = () => {
    return (
        <div className="pb-5 mb-5">
            <div className={'p-3 p-sm-4 p-lg-5 FSize_14'}>
                <div className={'row justify-content-center align-items-center h-100'}>
                    <div className={'col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-4 my-4'}>
                        <div className={'ViewListingBox p-4'}>
                            <button className={'BtnLight border-0 py-3 px-4 w-100 mb-4'}>Add Liquidity</button>
                            <div className={'d-flex justify-content-between align-items-center mb-3'}>
                                <h5 className={'text-white'}>Your liquidity</h5>
                            </div>
                            <div className={'TradingPairBorder mb-4'}>
                                <div className={'TradingPair p-3 d-flex align-items-center'}>
                                    <div className={'PairImgs me-3'}>
                                        <img className={''} width={'38'} src={IconETH} alt={'Logo'} />
                                        <img className={'align-bottom'} width={'28'} src={IconPyr} alt={'Logo'} />
                                    </div>
                                    <h5 className={'text-uppercase text-white fw-normal mb-0'}><a className={'text-white'} href={'#'}>ETH - PYR</a></h5>
                                </div>
                                <div className={'p-3 d-flex justify-content-between'}>
                                    <div className={''}>
                                        <h6 className={'text-white fw-normal FSize_16'}>Pool Token / Share</h6>
                                        <p className={'mb-0'}>1.5384 / 1200.4729</p>
                                    </div>
                                    <div className={''}>
                                        <h6 className={'text-white fw-normal FSize_16'}>Date</h6>
                                        <p className={'mb-0'}>10/09/2016</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'TradingPairBorder mb-4'}>
                                <div className={'TradingPair p-3 d-flex align-items-center'}>
                                    <div className={'PairImgs me-3'}>
                                        <img className={''} width={'38'} src={IconETH} alt={'Logo'} />
                                        <img className={'align-bottom'} width={'28'} src={IconPyr} alt={'Logo'} />
                                    </div>
                                    <h5 className={'text-uppercase text-white fw-normal mb-0'}><a className={'text-white'} href={'#'}>MATIC-PYR</a></h5>
                                </div>
                                <div className={'p-3 d-flex justify-content-between'}>
                                    <div className={''}>
                                        <h6 className={'text-white fw-normal FSize_16'}>Pool Token / Share</h6>
                                        <p className={'mb-0'}>1.5384 / 1200.4729</p>
                                    </div>
                                    <div className={''}>
                                        <h6 className={'text-white fw-normal FSize_16'}>Date</h6>
                                        <p className={'mb-0'}>10/09/2016</p>
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