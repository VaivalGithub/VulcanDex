import React, { useState, useEffect } from "react";
//
import TokenImg from '../../assets/images/PYRMATIC-POOL1.jpg'
import { useCurrency } from '../../hooks/Tokens'
import { Field } from '../../state/mint/actions'
import { ButtonPrimary, ButtonError } from '../../components/Button'
import { useDerivedInfo, useMintState, useMintActionHandlers } from '../../state/mint/hooks'
import { ApprovalState, useApproveCallback } from '../../hooks/useApproveCallback'
import { Dots } from '../Pool/styleds'
import { RowBetween } from '../../components/Row'
import { Text } from 'rebass'
import { AutoColumn } from '../../components/Column'
import CurrencyInputPanel from '../../components/CurrencyInputPanel'
import { maxAmountSpend } from '../../utils/maxAmountSpend'
import { TokenAmount } from '@uniswap/sdk'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { usePYRLAVA_POOL1_Contract} from '../../hooks/useContract'
// import styled from 'styled-components';
import { useActiveWeb3React } from '../../hooks'
import { getPYRLAVA_P1_Contract,calculateGasMargin } from '../../utils'
//calculateGasMargin, calculateSlippageAmount, 
import { BigNumber } from '@ethersproject/bignumber'
import { TransactionResponse } from '@ethersproject/providers'
import ReactGA from 'react-ga'
import { useTransactionAdder } from '../../state/transactions/hooks'

const PYRLAVA_P1 = () => {
    const PYRLAVA_p1 = '0xD229A6ed98a3370770549A66908af53Ec57A74b2'
    let pyrLavaPool1 = usePYRLAVA_POOL1_Contract(PYRLAVA_p1)
    const { account, chainId, library } = useActiveWeb3React()


    const [EndJoinDate_LAVA_P1, setEndJoinDate_PYRLAVA_POOL1] = useState('');
    const [EndDate_LAVA_P1, setEndDate_PYRLAVA_POOL1] = useState('');

    const [totalPoolParticipant_LAVA_P1, setTotalPoolParticipant_PYRLAVA_POOL1] = useState('');
    const [minAmountToLock_LAVA_P1, setminAmountToLock_PYRLAVA_POOL1] = useState('');
    const [CurrentParticipants_LAVA_P1, getCurrentParticipants_PYRLAVA_POOL1] = useState('');

  

    useEffect(
        () => {


            pyrLavaPool1?.totalPoolParticipant()
                .then((result2: any) => {
                    setTotalPoolParticipant_PYRLAVA_POOL1(result2)
                })




                pyrLavaPool1?.endJoin_date()
                .then((result1: any) => {
                    setEndJoinDate_PYRLAVA_POOL1(result1)
                })

                pyrLavaPool1?.unlock_date()
                .then((result1: any) => {
                    setEndDate_PYRLAVA_POOL1(result1)
                })


                
                pyrLavaPool1?.AmountToLock()
                .then((result1: any) => {
                    setminAmountToLock_PYRLAVA_POOL1(result1)
                })

                pyrLavaPool1?.getCntLocksForToken()
                .then((result1: any) => {
                    getCurrentParticipants_PYRLAVA_POOL1(result1)
                })


        },
        [] //useEffect will run only one time
        //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
    )

    var date = new Date(0); // The 0 there is the key, which sets the date to the epoch
    date.setUTCSeconds(Number(EndJoinDate_LAVA_P1));

    var endDate = new Date(0); 
    endDate.setUTCSeconds(Number(EndDate_LAVA_P1));

    

    var currentStamp = Date.now().toString();
   
   
    function poolStatus() {

       
         if(totalPoolParticipant_LAVA_P1.toString()==CurrentParticipants_LAVA_P1.toString()){return "Closed" }
         else if (currentStamp < EndJoinDate_LAVA_P1) { return "Open" }
        else { return "Closed" }
    }


    var poolOpenStatus = "Closed"
    poolOpenStatus = poolStatus()






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



    // const StyledToastContainer = styled(ToastContainer).attrs({
    //     className: 'toast-container',
    //     toastClassName: 'toast',
    //     position: "top-right",
    //     bodyClassName: 'body',
    //     autoClose: 500000,
    //     hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //     progressClassName: 'progress',
    //   })`
    //     width: 400px;

    //     .toast {
    //       background-color: #191817;
    //       color: #fff;
    //     }

    //     button[aria-label="close"] {
    //       display: none;
    //     }

    //     .body {}
    //     .progress {}
    //   `;


    const addTransaction = useTransactionAdder()

    async function EndJoinDate_MATIC_P1_func() {
        const num = toNonExponential(Number(minAmountToLock_LAVA_P1) / 10 ** 18)

        if (formattedAmounts[Field.CURRENCY_B] != num) {


            toast.error("Passed Amount:" + formattedAmounts[Field.CURRENCY_B] + " expected Amount:" + num, {

                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,


            })
        }
        else {

            if (!chainId || !library || !account) return
            const router = getPYRLAVA_P1_Contract(chainId, library, account)
            let estimate = router.estimateGas.lockLPTokenWithFixedTime
            let args: Array<string | string[] | number>;
            let method: (...args: any) => Promise<TransactionResponse>;

            let value: BigNumber | null

          //  alert("Lock called" + formattedAmounts[Field.CURRENCY_B])


            //  alert("estimate:"+estimate)
            method = router.lockLPTokenWithFixedTime

            args = [
                minAmountToLock_LAVA_P1.toString(),
                account,
            ]
            value = null





            await estimate(...args, value ? { value } : {})
                .then(estimatedGasLimit =>
                    method(...args, {
                        ...(value ? { value } : {}),
                        gasLimit: calculateGasMargin(estimatedGasLimit)
                    }).then(response => {
                        // setAttemptingTxn(false)

                        addTransaction(response, {
                            summary:
                                'Add ' +
                                parsedAmounts[Field.CURRENCY_A]?.toSignificant(3) +
                                ' ' +
                                currencies[Field.CURRENCY_A]?.symbol +
                                ' and ' +
                                parsedAmounts[Field.CURRENCY_B]?.toSignificant(3) +
                                ' ' +
                                currencies[Field.CURRENCY_B]?.symbol
                        })

                        // setTxHash(response.hash)

                        ReactGA.event({
                            category: 'Locking',
                            action: 'lockLPTokenWithFixedTime',
                            label: [currencies[Field.CURRENCY_A]?.symbol, currencies[Field.CURRENCY_B]?.symbol].join('/')
                        })
                    })
                )
                .catch(error => {
                    // setAttemptingTxn(false)
                    // we only care if the error is something _other_ than the user rejected the tx
                    if (error?.code !== 4001) {
                        console.error(error)
                    }
                })

        }

        // setAttemptingTxn(true)

        //   if(poolOpenStatus=="CLosed"){
        //       alert("")
        //   }
    }






    const lp = '0x1c6e02Dd453929b72b7377bE2F3EBdF083CcA94B'
    const currencyA = useCurrency(lp)
    const currencyB = useCurrency(lp)

    const {

        parsedAmounts,
        currencies,
        error,
        noLiquidity,
        currencyBalances,
        dependentField,


    } = useDerivedInfo(currencyA ?? undefined, currencyB ?? undefined)
    const isValid = !error
    const { onFieldBInput } = useMintActionHandlers(noLiquidity)
    const { independentField, typedValue, otherTypedValue } = useMintState()

    const maxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
        (accumulator, field) => {
            return {
                ...accumulator,
                [field]: maxAmountSpend(currencyBalances[field])
            }
        },
        {}
    )

    const atMaxAmounts: { [field in Field]?: TokenAmount } = [Field.CURRENCY_A, Field.CURRENCY_B].reduce(
        (accumulator, field) => {
            return {
                ...accumulator,
                [field]: maxAmounts[field]?.equalTo(parsedAmounts[field] ?? '0')
            }
        },
        {}

    )
    // get formatted amounts
    const formattedAmounts = {
        [independentField]: typedValue,
        [dependentField]: noLiquidity ? otherTypedValue : parsedAmounts[dependentField]?.toSignificant(6) ?? ''
    }

    const [approvalB, approveBCallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_B], PYRLAVA_p1)



    return (

        <div className="FarmPage pb-5 mb-5">

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
                    <div className="toast " role="alert" aria-live="assertive" aria-atomic="true">
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
                        <a href="#/Farm" className="text-uppercase text-white FSize_14">
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
                                    <div className={'col-xxl col-xl-6 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className="row">
                                                <div className="col-12 col-lg-auto col-xl-6 col-xxl-6 mb-3 mb-xxl-0">
                                                    <img src={TokenImg} alt={'image'} className={'img-fluid '} />
                                                </div>
                                                <div className="col">
                                                    <h6>VulcanVerse Land Plot</h6>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-xxl col-xl-6 col-lg-12 col-md-12 mb-3 mb-xl-0'}>

                                        {poolOpenStatus == 'Open' ?
                                            (
                                                <div className="Prizes p-4 h-100">
                                                    <div className={'d-flex justify-content-between mb-3 pe-3'}>
                                                        <p className="text-white FSize_16 mb-0">Lock Limit</p>
                                                        <span><span className={'OrangeColor'}>{toNonExponential(Number(minAmountToLock_LAVA_P1) / 10 ** 18).toString()}</span> Vulcan-V2</span>
                                                    </div>
                                                    {/* minAmountToLock_P1 */}

                                                    <CurrencyInputPanel
                                                        value={formattedAmounts[Field.CURRENCY_B]}
                                                        onUserInput={onFieldBInput}
                                                        // onCurrencySelect={handleCurrencyBSelect}
                                                        onMax={() => {
                                                            onFieldBInput(maxAmounts[Field.CURRENCY_B]?.toExact() ?? '')
                                                        }}
                                                        showMaxButton={!atMaxAmounts[Field.CURRENCY_B]}
                                                        currency={currencies[Field.CURRENCY_B]}
                                                        id="add-liquidity-input-tokenb"
                                                        showCommonBases
                                                    />



                                                    <AutoColumn gap={'md'}>
                                                        {(

                                                            approvalB === ApprovalState.NOT_APPROVED ||
                                                            approvalB === ApprovalState.PENDING) &&
                                                            isValid && (
                                                                <RowBetween>

                                                                    {(
                                                                        <ButtonPrimary
                                                                            onClick={approveBCallback}
                                                                            disabled={approvalB === ApprovalState.PENDING}
                                                                        // width={approvalA !== ApprovalState.APPROVED ? '48%' : '100%'}
                                                                        >
                                                                            {approvalB === ApprovalState.PENDING ? (
                                                                                <Dots>Approving {currencies[Field.CURRENCY_B]?.symbol}</Dots>
                                                                            ) : (
                                                                                'Approve2 ' + currencies[Field.CURRENCY_B]?.symbol
                                                                            )}
                                                                        </ButtonPrimary>
                                                                    )}
                                                                </RowBetween>
                                                            )}
                                                        <ButtonError
                                                            onClick={() => EndJoinDate_MATIC_P1_func()

                                                            }
                                                            disabled={!isValid || approvalB !== ApprovalState.APPROVED}
                                                            error={!isValid && !!parsedAmounts[Field.CURRENCY_B]}
                                                        >
                                                            <Text fontSize={20} fontWeight={500}>
                                                                {error ?? 'Lock'}
                                                            </Text>
                                                        </ButtonError>
                                                    </AutoColumn>

                                                    {/* <input type="text" className={'form-control shadow-none border-0 w-100 mb-3'} placeholder={'Enter value here'} />
                                            <button type="button" className="btn BtnOrange py-2 px-3 me-3 mb-3 mb-xxl-0">
                                                Approve
                                            </button>
                                            <button type="button" className="btn BtnBorderOrange py-2 px-4">
                                                Lock
                                            </button> */}
                                                </div>

                                            ) : "Pool Closed"
                                        }
                                    </div>
                                    <div className={'col-xl-12 col-lg-12 col-md-12 mb-3 mt-4 mt-xxl-4 mb-xl-0'}>
                                        <div className={'row h-100'}>
                                            <div className={'ccol-xxl-4 col-xl-4 col-lg-6 mb-3'}>
                                                <label className={'d-block mb-1'}>Joinup Duration</label>
                                                <span className={'FSize_18 text-white'}>{date.toString()}</span>
                                            </div>
                                            <div className={'col-xxl-4 col-xl-4 col-lg-6 mb-3'}>
                                                <label className={'d-block mb-1'}>Lockup Duration</label>
                                                <span className={'FSize_18 text-white'}>{endDate.toString()}</span>
                                            </div>
                                            <div className="col-12"></div>
                                            <div className={'col-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6 mb-3'}>
                                                <label className={'d-block mb-1'}>Max Participants</label>
                                                <span className={'FSize_18 text-white'}>{totalPoolParticipant_LAVA_P1.toString()}</span>
                                            </div>
                                            <div className={'col-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6 mb-3 '}>
                                                <label className={'d-block mb-1'}>Current Participants</label>
                                                <span className={'FSize_18 text-white'}>{CurrentParticipants_LAVA_P1.toString()}</span>
                                            </div>
                                            <div className={'cool-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6 mb-3'}>
                                                <label className={'d-block mb-1'}>Status</label>
                                                <span className={'FSize_18 text-danger'}>{poolOpenStatus.toString()}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <div className={'col-sm-6 col-md-8 col-lg-8 col-xl-9 col-xxl-9 text-center p-4'}>
                            <p>Connection Pending</p>
                            <p className={'FSize_18 text-white'}>Your Wallet is not connect yet</p>
                            </div> */}


                            {/* <div className={'p-4'}>
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
                         */}


                        </div>


                        <div className={'col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3'}>
                            <div className={'border-start border-color-grey pe-4 ps-5 py-4 text-center text-sm-start h-100'}>
                                {/* <button type="button" className="btn BtnBorderOrange py-2 px-4 mb-4">
                                    Disconenct Waller
                                </button> */}
                                <p><a href={"https://polygonscan.com/address/0x1c6e02Dd453929b72b7377bE2F3EBdF083CcA94B"} target="_blank" className={'OrangeColor text-decoration-on-hover'}>
                                    Get PYR-LAVA LP
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="ms-2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a></p>
                                <p><a href={"https://polygonscan.com/address/0x1c6e02Dd453929b72b7377bE2F3EBdF083CcA94B#code"} target="_blank" className={'OrangeColor text-decoration-on-hover'}>
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
                                <p><a href={"https://polygonscan.com/address/0x1c6e02Dd453929b72b7377bE2F3EBdF083CcA94B#readContract"} target="_blank" className={'OrangeColor text-decoration-on-hover'}>
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
                                <a href={'https://polygonscan.com/address/0x293f45b6f9751316672da58ae87447d712af85d7'} target="_blank" className={'btn BtnBorderGrey rounded-pill'}>
                                    <svg className={'mb-1 me-2'} xmlns="http://www.w3.org/2000/svg" width="12.417" height="11.813" viewBox="0 0 12.417 11.813">
                                        <g transform="translate(-494.902 -803.894)">
                                            <path fill="#535353"
                                                d="M251.488,18.343l-1.406-1.561.22-2.089-2.055-.435L247.2,12.437l-1.919.858-.259,5.049.259,5.049,1.919.858,1.048-1.821,2.055-.435-.22-2.089Z"
                                                transform="translate(255.831 791.457)" />
                                            <path fill="#888"
                                                d="M4.289,12.437,3.241,14.258l-2.055.435.22,2.089L0,18.343,1.406,19.9l-.22,2.089,2.055.435L4.289,24.25l1.919-.858v-10.1Z"
                                                transform="translate(494.902 791.457)" />
                                            <g transform="translate(498.432 807.956)">
                                                <path fill="#f7f0eb"
                                                    d="M247.883,180.21l-.543-.485-2.059,2.307-.259.573.259.521Z"
                                                    transform="translate(-242.601 -179.725)" />
                                                <path fill="#fffbf5"
                                                    d="M145.863,233.1l-.515.515,2.165,2.165.514-.576v-1.094l-.544.609Z"
                                                    transform="translate(-145.348 -231.799)" />
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

export default PYRLAVA_P1;
