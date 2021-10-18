import React from "react";
import IconETH from '../../assets/images/icon-eth.jpg'
import IconPyr from '../../assets/images/icon-pyr.jpg'

const FarmPage = () => {
    return (
        <div className="pb-5 mb-5">
            <div className={'p-3 p-sm-4 p-lg-5 FSize_14'}>
                <div className={'row justify-content-center align-items-center h-100'}>
                    <div className={'col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-4 my-4'}>
                        <div className={'ViewListingBox px-4 pb-4'}>
                            <div className={'RemoveListing'}>
                                <div className={'text-center'}>
                                    <div className={'PairImgs'}>
                                        <img className={''} width={'100'} src={IconETH} alt={'Logo'} />
                                        <img className={'align-bottom'} width={'50'} src={IconPyr} alt={'Logo'} />
                                    </div>
                                    <h5 className={'OrangeColor mb-3'}>Remove Liquidity</h5>
                                    <p className={'text-white FSize_16'}>ETH-PYR LP</p>
                                </div>
                                <div className={'TokenDetail d-flex justify-content-between py-3 mb-3'}>
                                    <div className={'border-right flex-grow-1 px-3'}>
                                        <p className={'text-white FSize_16 mb-2'}>ETH</p>
                                        1540
                                    </div>
                                    <div className={'border-right flex-grow-1 px-3'}>
                                        <p className={'text-white FSize_16 mb-2'}>PYR</p>
                                        15402
                                    </div>
                                    <div className={'flex-grow-1 px-3'}>
                                        <p className={'text-white FSize_16 mb-2'}>Pool Token</p>
                                        15402
                                    </div>
                                </div>
                                <div className={'BgBox p-3'}>
                                    <label className={'d-block text-white mb-3'}>Remove Amount</label>
                                    <input type="text" className={'form-control shadow-none border-0 w-100 mb-3'} placeholder={'Amount'} readOnly />
                                    <div className={'d-flex'}>
                                        <button className={'BtnOrange border-0 py-3 px-4 flex-grow-1 me-3'}>Unlock</button>
                                        <button className={'BtnLight border-0 py-3 px-4 flex-grow-1'}>Cancel</button>
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