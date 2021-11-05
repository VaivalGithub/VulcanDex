import React, { useState, useEffect } from "react";
// import IconETH from '../../assets/images/icon-eth.jpg'
// import IconPyr from '../../assets/images/icon-pyr.jpg'
import { usePYRUSDC_POOL1_Contract } from '../../hooks/useContract'
import { useActiveWeb3React } from '../../hooks'
import { useParams } from 'react-router-dom';
import { getPYR_P1_Contract, calculateGasMargin } from '../../utils'
import { TransactionResponse } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
import { useTransactionAdder } from '../../state/transactions/hooks'
import ReactGA from 'react-ga'
import { useHistory } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LockingDetails = () => {
    const history = useHistory();

    const { account, chainId, library } = useActiveWeb3React()
    var params: any = useParams();
    const pairName = params.pair;
    const poolNumber = params.pool;
    const pool = params.lockingContractAddress
    let Pool1Function: any = usePYRUSDC_POOL1_Contract(pool)
    const [UserCntLocksForToken, GetUserCntLocksForToken] = useState('');
    const [UseLock, setUseLock] = useState([]);

    function timeConverter(UNIX_timestamp: any) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }

    const addTransaction = useTransactionAdder()



    async function Withdraw(_index: any, _lockID: any, _amountToLock: any) {
        alert("_index"+_index)
        alert("_lockID"+_lockID)
        alert("_amountToLock"+_amountToLock)
        if (Date.now().toString() < (UseLock[0]?.[3])  ) {


            toast.error("Still locked, please wait", {

                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,


            })
        }
        if (!chainId || !library || !account) return
        const router = getPYR_P1_Contract(chainId, library, pool, account)
        // alert("back")
        let estimate = router.estimateGas.withdrawWithFixedTime
        let args: Array<number | number | number>;
        let method: (...args: any) => Promise<TransactionResponse>;
        // alert("reached1")
        let value: BigNumber | null
        method = router.withdrawWithFixedTime
        // alert("reached2")
        args = [

            Number(_index),
            Number(_lockID),
            _amountToLock
        ]
        value = null

        alert("reached3"+estimate)

        await estimate(...args, value ? { value } : {})
            .then(estimatedGasLimit =>
                method(...args, {
                    ...(value ? { value } : {}),
                    gasLimit: calculateGasMargin(estimatedGasLimit)
                }).then(response => {

                    // alert("done"+response)

                    addTransaction(response)


                    ReactGA.event({
                        category: 'Locking',
                        action: 'withdrawWithFixedTime',
                    })
                })
            )
            .catch(error => {
                if (error?.code !== 4001) {
                    console.error(error)
                }
            })



    }

    function toNonExponential(value: any) {
        // if value is not a number try to convert it to number
        if (typeof value !== "number") {
            value = parseFloat(value);

            // after convert, if value is not a number return empty string
            if (isNaN(value)) {
                return "";
            }
        }

        var sign;
        var e;

        // if value is negative, save "-" in sign variable and calculate the absolute value
        if (value < 0) {
            sign = "-";
            value = Math.abs(value);
        }
        else {
            sign = "";
        }

        // if value is between 0 and 1
        if (value < 1.0) {
            // get e value
            e = parseInt(value.toString().split('e-')[1]);

            // if value is exponential convert it to non exponential
            if (e) {
                value *= Math.pow(10, e - 1);
                value = '0.' + (new Array(e)).join('0') + value.toString().substring(2);
            }
        }
        else {
            // get e value
            e = parseInt(value.toString().split('e+')[1]);

            // if value is exponential convert it to non exponential
            if (e) {
                value /= Math.pow(10, e);
                value += (new Array(e + 1)).join('0');
            }
        }

        // if value has negative sign, add to it
        return sign + value;
    }


  
    // try{
    //  if(account==null || account==''){
    //     // alert(account)
    //      history.push("/Farm");
    //  }
   
    
    useEffect(
        () => {
            try{
            const intervalId = setInterval(() => {  //assign interval to a variable to clear it.

            Pool1Function.getUserCntLocksForToken(account)
                .then(async (result2: any) => {

                    GetUserCntLocksForToken(result2)
                    let array3: any = []


                    for (let i = 0; i < result2; i++) {

                        let res3: any = await Pool1Function.getUserLockForTokenAtIndex(account, i)
                        let data = res3.toString()
                        let splitted = data.split(',');
                        array3.push(splitted)
                    }
                    setUseLock(array3)

                })

            }, 5000)
            return () => clearInterval(intervalId); //This is important

        }
        catch(err){
           return   Pool1Function.getUserCntLocksForToken(account)
           .then(async (result2: any) => {

               GetUserCntLocksForToken(result2)
               let array3: any = []


               for (let i = 0; i < result2; i++) {

                   let res3: any = await Pool1Function.getUserLockForTokenAtIndex(account, i)
                   let data = res3.toString()
                   let splitted = data.split(',');
                   array3.push(splitted)
               }
               setUseLock(array3)

           })
        }

        },
        [5000] //useEffect will run only one time
        //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
    )
    let menuItems = [];


try{
    return (
        <div className="pb-5 mb-5">


<ToastContainer style={{ width: "300px", fontSize: '14px' }}
                position="top-right"
                autoClose={false}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={'p-3 p-sm-4 p-lg-5 FSize_14'}>
                <div className={'row justify-content-center align-items-center h-100'}>
                    <div className={'col-11 col-sm-9 col-md-8 col-lg-7 col-xl-6 col-xxl-4 my-4'}>
                        <div className={'ViewListingBox p-4'}>
                            {/* <button className={'BtnLight border-0 py-3 px-4 w-100 mb-4'}>Add Liquidity</button> */}
                            <div className={'d-flex justify-content-between align-items-center mb-3'}>
                                <h5 className={'text-white'}>Your Farm</h5>
                            </div>





                            {(() => {
                                for (let i = 0; i < Number(UserCntLocksForToken); i++) {
                             
                                    menuItems.push(<div className={'TradingPairBorder mb-4'}>
                                        <div className={'TradingPair p-3 d-flex align-items-center'}>
                                            <div className={'PairImgs me-3'}>
                                                {/* <img className={''} width={'38'} src={IconETH} alt={'Logo'} />
                                                <img className={'align-bottom'} width={'28'} src={IconPyr} alt={'Logo'} /> */}
                                            </div>
                                            <h5 className={'text-uppercase text-white fw-normal mb-0'}><a className={'text-white'} href={'#'}>{pairName + '(' + poolNumber + ')'}</a></h5>
                                        </div>
                                        <div className={'p-3'}>
                                            <div className={' mb-2'}>
                                                <h6 className={'text-white fw-normal FSize_16'}>Locked Amount</h6>
                                                <p className={'mb-0'}>{toNonExponential(Number(UseLock[i]?.[1]) / 10 ** 18).toString()}</p>
                                            </div>
                                            <div className={'d-flex justify-content-between mb-2'}>
                                                <div className={''}>
                                                    <h6 className={'text-white fw-normal FSize_16'}>Lock Date</h6>
                                                    <p className={'mb-0'}>{timeConverter(UseLock[i]?.[0]).toString()}</p>
                                                </div>
                                                <div className={''}>
                                                    <h6 className={'text-white fw-normal FSize_16'}>Unlock Date</h6>
                                                    <p className={'mb-0'}>{timeConverter(UseLock[i]?.[3]).toString()}</p>
                                                </div>
                                            </div>
                                            <button className={'BtnOrange border-0 py-3 px-4 flex-grow-1 me-3'} onClick={() => Withdraw(i, UseLock[i]?.[4], UseLock[i]?.[1])}>Unlock</button>

                                        </div>
                                    </div>)

                                }
                                return <div>{menuItems}</div>;
                            })()}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}catch(e){
    alert("fail")
    return history.push("/Farm");

}

// }catch(e){
//     history.push("/Farm");

// }
}

export default LockingDetails;