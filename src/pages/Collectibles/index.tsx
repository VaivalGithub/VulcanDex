import React from "react";
import Imgcollectibles_1 from '../../assets/images/img-collectibles-1.png'
import Imgcollectibles_2 from '../../assets/images/img-collectibles-2.png'
import Imgcollectibles_3 from '../../assets/images/img-collectibles-3.png'

const FarmPage = () => {
    return (
        <div className="CollectiblesPage pb-5 mb-5">
            <div className="FarmBanner p-3 p-sm-4 p-lg-5 text-white">
                <h3 className={'mb-4'}>VulcanDex <span className="OrangeColor">Collectibles</span></h3>
            </div>
            <div className={'p-3 p-sm-4 p-lg-5 FSize_14'}>
                <div className={'row'}>
                    <div className={'col-xl-3 col-lg-4 col-sm-6 mb-4'}>
                        <div className="card border-0 BgDark p-3">
                            <img className={'w-100'} src={Imgcollectibles_1} alt={'Collectibles Images'} />
                        </div>
                    </div>
                    <div className={'col-xl-3 col-lg-4 col-sm-6 mb-4'}>
                        <div className="card border-0 BgDark p-3">
                            <img className={'w-100'} src={Imgcollectibles_2} alt={'Collectibles Images'} />
                        </div>
                    </div>
                    <div className={'col-xl-3 col-lg-4 col-sm-6 mb-4'}>
                        <div className="card border-0 BgDark p-3">
                            <img className={'w-100'} src={Imgcollectibles_3} alt={'Collectibles Images'} />
                        </div>
                    </div>
                    <div className={'col-xl-3 col-lg-4 col-sm-6 mb-4'}>
                        <div className="card border-0 BgDark p-3">
                            <img className={'w-100'} src={Imgcollectibles_1} alt={'Collectibles Images'} />
                        </div>
                    </div>
                    <div className={'col-xl-3 col-lg-4 col-sm-6 mb-4'}>
                        <div className="card border-0 BgDark p-3">
                            <img className={'w-100'} src={Imgcollectibles_1} alt={'Collectibles Images'} />
                        </div>
                    </div>
                    <div className={'col-xl-3 col-lg-4 col-sm-6 mb-4'}>
                        <div className="card border-0 BgDark p-3">
                            <img className={'w-100'} src={Imgcollectibles_2} alt={'Collectibles Images'} />
                        </div>
                    </div>
                    <div className={'col-xl-3 col-lg-4 col-sm-6 mb-4'}>
                        <div className="card border-0 BgDark p-3">
                            <img className={'w-100'} src={Imgcollectibles_3} alt={'Collectibles Images'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FarmPage;
