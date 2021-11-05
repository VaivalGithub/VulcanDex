import React, { useState, useEffect } from "react";
//
import TokenImg from '../../assets/images/PYRUSDC-POOL1.jpg'
import TokenImg_P2 from '../../assets/images/PYRusdc_P2.jpg'

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
import { usePYRUSDC_POOL1_Contract } from '../../hooks/useContract'
// import styled from 'styled-components';
import { useActiveWeb3React } from '../../hooks'
import { getPYR_P1_Contract, calculateGasMargin } from '../../utils'
//calculateGasMargin, calculateSlippageAmount, 
import { BigNumber } from '@ethersproject/bignumber'
import { TransactionResponse } from '@ethersproject/providers'
import ReactGA from 'react-ga'
import { useTransactionAdder } from '../../state/transactions/hooks'

const ConnectedFarmDetails = () => {
    const PYRUSDC_p1 = '0x7b30Cc75F9ee201249e13DEb4b2867086895A59e'//'0x7e79f8FD7F67e612B61bc2735fC4053B17360cF2'
    let pyrUSDCPool1 = usePYRUSDC_POOL1_Contract(PYRUSDC_p1)



    const PYRUSDC_p2 = '0x97116DDD54691a3D355fe6881844F0834d791959'//'0x7e79f8FD7F67e612B61bc2735fC4053B17360cF2'
    let pyrUSDCPool2 = usePYRUSDC_POOL1_Contract(PYRUSDC_p2)

    const { account, chainId, library } = useActiveWeb3React()


    const [EndJoinDate_USDC_P1, setEndJoinDate_PYRUSDC_POOL1] = useState('');
    const [totalPoolParticipant_USDC_P1, setTotalPoolParticipant_PYRUSDC_POOL1] = useState('');
    const [minAmountToLock_USDC_P1, setminAmountToLock_PYRUSDC_POOL1] = useState('');
    const [CurrentParticipants_USDC_P1, getCurrentParticipants_PYRUSDC_POOL1] = useState('');
    const [EndDate_USDC_P1, setEndDate_PYRUSDC_POOL1] = useState('');



    const [EndJoinDate_USDC_P2, setEndJoinDate_PYRUSDC_POOL2] = useState('');
    const [totalPoolParticipant_USDC_P2, setTotalPoolParticipant_PYRUSDC_POOL2] = useState('');
    const [minAmountToLock_USDC_P2, setminAmountToLock_PYRUSDC_POOL2] = useState('');
    const [CurrentParticipants_USDC_P2, getCurrentParticipants_PYRUSDC_POOL2] = useState('');
    const [EndDate_USDC_P2, setEndDate_PYRUSDC_POOL2] = useState('');


    useEffect(
        () => {

            // pyrMaticPool1?.totalPoolParticipant()

            pyrUSDCPool1?.totalPoolParticipant()
                .then((result2: any) => {
                    setTotalPoolParticipant_PYRUSDC_POOL1(result2)
                })

            pyrUSDCPool1?.unlock_date()
                .then((result1: any) => {
                    setEndDate_PYRUSDC_POOL1(result1)
                })



            pyrUSDCPool1?.endJoin_date()
                .then((result1: any) => {
                    setEndJoinDate_PYRUSDC_POOL1(result1)
                })


            pyrUSDCPool1?.AmountToLock()
                .then((result1: any) => {
                    setminAmountToLock_PYRUSDC_POOL1(result1)
                })

            pyrUSDCPool1?.getCntLocksForToken()
                .then((result1: any) => {
                    getCurrentParticipants_PYRUSDC_POOL1(result1)
                })





            pyrUSDCPool2?.totalPoolParticipant()
                .then((result2: any) => {
                    setTotalPoolParticipant_PYRUSDC_POOL2(result2)
                })

            pyrUSDCPool2?.unlock_date()
                .then((result1: any) => {
                    setEndDate_PYRUSDC_POOL2(result1)
                })



            pyrUSDCPool2?.endJoin_date()
                .then((result1: any) => {
                    setEndJoinDate_PYRUSDC_POOL2(result1)
                })


            pyrUSDCPool2?.AmountToLock()
                .then((result1: any) => {
                    setminAmountToLock_PYRUSDC_POOL2(result1)
                })

            pyrUSDCPool2?.getCntLocksForToken()
                .then((result1: any) => {
                    getCurrentParticipants_PYRUSDC_POOL2(result1)
                })

        },
        [] //useEffect will run only one time
        //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
    )

    var date = new Date(0); // The 0 there is the key, which sets the date to the epoch
    date.setUTCSeconds(Number(EndJoinDate_USDC_P1));
    var currentStamp = Date.now().toString();

    var endDate = new Date(0);
    endDate.setUTCSeconds(Number(EndDate_USDC_P1));





    var date_p2 = new Date(0); // The 0 there is the key, which sets the date to the epoch
    date_p2.setUTCSeconds(Number(EndJoinDate_USDC_P2));
    var currentStamp_p2 = Date.now().toString();

    var endDate_p2 = new Date(0);
    endDate_p2.setUTCSeconds(Number(EndDate_USDC_P2));




    function poolStatus() {


        if (totalPoolParticipant_USDC_P1.toString() == CurrentParticipants_USDC_P1.toString()) { return "Closed" }
        else if (currentStamp < EndJoinDate_USDC_P1) { return "Open" }
        else { return "Closed" }
    }


    var poolOpenStatus = "Closed"
    poolOpenStatus = poolStatus()




    function poolStatus_p2() {


        if (totalPoolParticipant_USDC_P2.toString() == CurrentParticipants_USDC_P2.toString()) { return "Closed" }
        else if (currentStamp_p2 < EndJoinDate_USDC_P2) { return "Open" }
        else { return "Closed" }
    }


    var poolOpenStatus_p2 = "Closed"
    poolOpenStatus_p2 = poolStatus_p2()


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





    const addTransaction = useTransactionAdder()

    async function LOCK_P1_func() {
        const num = toNonExponential(Number(minAmountToLock_USDC_P1) / 10 ** 18)

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
            const router = getPYR_P1_Contract(chainId, library, PYRUSDC_p1, account)
            let estimate = router.estimateGas.lockLPTokenWithFixedTime
            let args: Array<string | string[] | number>;
            let method: (...args: any) => Promise<TransactionResponse>;

            let value: BigNumber | null

            //  alert("Lock called" + formattedAmounts[Field.CURRENCY_B])


            //  alert("estimate:"+estimate)
            method = router.lockLPTokenWithFixedTime

            args = [
                minAmountToLock_USDC_P1.toString(),
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



    async function LOCK_P2_func() {
        const num = toNonExponential(Number(minAmountToLock_USDC_P2) / 10 ** 18)

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
            const router = getPYR_P1_Contract(chainId, library, PYRUSDC_p2, account)
            let estimate = router.estimateGas.lockLPTokenWithFixedTime
            let args: Array<string | string[] | number>;
            let method: (...args: any) => Promise<TransactionResponse>;

            let value: BigNumber | null

            //  alert("Lock called" + formattedAmounts[Field.CURRENCY_B])


            //  alert("estimate:"+estimate)
            method = router.lockLPTokenWithFixedTime

            args = [
                minAmountToLock_USDC_P2.toString(),
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




    const lp = '0x2714839101FFbbE83129247733B1f8955e917332'
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

    const [approvalB, approveBCallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_B], PYRUSDC_p1)
    // const [approvalB, approveBCallback] = useApproveCallback(parsedAmounts[Field.CURRENCY_B], PYRUSDC_p2)

    const [approvalB_p2, approveBCallback_p2] = useApproveCallback(parsedAmounts[Field.CURRENCY_B], PYRUSDC_p2)



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

                <div className={'BgDark border-radius-15 mb-4'}>
                    <div className={'row justify-content-between'}>
                        <div className={'col-sm-12 col-md-8 col-lg-8 col-xl-9 col-xxl-9'}>



                            {/* 2nd pool */}

                            <div className={'BorderBottom p-4'}>
                                <div className={'row'}>
                                    <div className={'col-xxl col-xl-6 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className="row">
                                                <div className="col-12 col-lg-auto col-xl-auto col-xxl-auto mb-3 mb-xxl-0">
                                                    <img src={TokenImg_P2} alt={'image'} className={'img-fluid TokenImg'} />
                                                </div>
                                                <div className="col">
                                                    <h4 style={{ color: "#C3A47A" }}>Beige Tunic</h4>
                                                    <p className={'mb-0'}>Avatar Clothing Item
                                                        <br></br>
                                                        *Users must use MyForge account address to receive NFT reward*</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'col-xxl col-xl-6 col-lg-12 col-md-12 mb-3 mb-xl-0'}>

                                        {poolOpenStatus_p2 == 'Open' ?
                                            (
                                                <div className="Prizes p-4 h-100">
                                                    <div className={'d-flex justify-content-between mb-3 pe-3'}>
                                                        <p className="text-white FSize_16 mb-0">Lock Limit</p>
                                                        <span><span className={'OrangeColor'}>{toNonExponential(Number(minAmountToLock_USDC_P2) / 10 ** 18).toString()}</span> Vulcan-V2</span>
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

                                                            approvalB_p2 === ApprovalState.NOT_APPROVED ||
                                                            approvalB_p2 === ApprovalState.PENDING) &&
                                                            isValid && (
                                                                <RowBetween>

                                                                    {(
                                                                        <ButtonPrimary
                                                                            onClick={approveBCallback_p2}
                                                                            disabled={approvalB_p2 === ApprovalState.PENDING}
                                                                        // width={approvalA !== ApprovalState.APPROVED ? '48%' : '100%'}
                                                                        >
                                                                            {approvalB_p2 === ApprovalState.PENDING ? (
                                                                                <Dots>Approving {currencies[Field.CURRENCY_B]?.symbol}</Dots>
                                                                            ) : (
                                                                                'Approve2 ' + currencies[Field.CURRENCY_B]?.symbol
                                                                            )}
                                                                        </ButtonPrimary>
                                                                    )}
                                                                </RowBetween>
                                                            )}
                                                        <ButtonError
                                                            onClick={() => LOCK_P2_func()

                                                            }
                                                            disabled={!isValid || approvalB_p2 !== ApprovalState.APPROVED}
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
                                                <span className={'FSize_18 text-white'}>{date_p2.toString()}</span>
                                            </div>
                                            <div className={'col-xxl-4 col-xl-4 col-lg-6 mb-3'}>
                                                <label className={'d-block mb-1'}>Lockup Duration</label>
                                                <span className={'FSize_18 text-white'}>{endDate_p2.toString()}</span>
                                            </div>
                                            <div className="col-12"></div>
                                            <div className={'col-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6 mb-3'}>

                                                <label className={'d-block mb-1'}>Max Participants</label>
                                                <span className={'FSize_18 text-white'}>{totalPoolParticipant_USDC_P2.toString()}</span>
                                            </div>

                                            <div className={'col-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6 mb-3 '}>
                                                <label className={'d-block mb-1'}>Current Participants</label>
                                                <span className={'FSize_18 text-white'}>{CurrentParticipants_USDC_P2.toString()}</span>
                                            </div>


                                            <div className={'cool-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6 mb-3'}>
                                                <label className={'d-block mb-1'}>Status</label>
                                                <span className={'FSize_18 text-danger'}>{poolOpenStatus_p2.toString()}</span>
                                            </div>

                                            <p><a href={account != null ? `#/LockingDetails/PYR-USDC/POOL-2/${PYRUSDC_p2}/${lp}` : '#/Farm'} className={'OrangeColor text-decoration-on-hover'}>

                                                LockingDetails
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    className="ms-2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a></p>

                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* 1st pool */}
                            <div className={'BorderBottom p-4'}>
                                <div className={'row'}>
                                    <div className={'col-xxl col-xl-6 col-lg-12 col-md-12 mb-3 mb-xl-0'}>
                                        <div className="Prizes p-4 h-100">
                                            <div className="row">
                                                <div className="col-12 col-lg-auto col-xl-auto col-xxl-auto mb-3 mb-xxl-0">
                                                    <img src={TokenImg} alt={'image'} className={'img-fluid TokenImg'} />
                                                </div>
                                                <div className="col">
                                                    <h4>Venomtail Vulcanite</h4>
                                                    <p className={'mb-0'}>Beware the kiss of the scorpion for it is death</p>
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
                                                        <span><span className={'OrangeColor'}>{toNonExponential(Number(minAmountToLock_USDC_P1) / 10 ** 18).toString()}</span> Vulcan-V2</span>
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
                                                            onClick={() => LOCK_P1_func()

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
                                                <span className={'FSize_18 text-white'}>{totalPoolParticipant_USDC_P1.toString()}</span>
                                            </div>

                                            <div className={'col-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6 mb-3 '}>
                                                <label className={'d-block mb-1'}>Current Participants</label>
                                                <span className={'FSize_18 text-white'}>{CurrentParticipants_USDC_P1.toString()}</span>
                                            </div>


                                            <div className={'cool-xxl-4 col-xl-4 col-lg-6 col-md-4 col-sm-4 col-6 mb-3'}>
                                                <label className={'d-block mb-1'}>Status</label>
                                                <span className={'FSize_18 text-danger'}>{poolOpenStatus.toString()}</span>
                                            </div>

                                            <p><a href={account != null ? `#/LockingDetails/PYR-USDC/POOL-1/${PYRUSDC_p1}/${lp}` : '#/Farm'} className={'OrangeColor text-decoration-on-hover'}>

                                                LockingDetails
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                    viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    className="ms-2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                    <polyline points="15 3 21 3 21 9"></polyline>
                                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                                </svg>
                                            </a></p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                        <div className={'col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3'}>
                            <div className={'border-start border-color-grey pe-4 ps-5 py-4 text-center text-sm-start h-100'}>
                                {/* <button type="button" className="btn BtnBorderOrange py-2 px-4 mb-4">
                                    Disconenct Waller
                                </button> */}
                                <p><a href={"https://vulcandex.vulcanforged.com/#/add/0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174/0x348e62131fce2F4e0d5ead3Fe1719Bc039B380A9"} target="_blank" className={'OrangeColor text-decoration-on-hover'}>
                                    Get PYR-USDC LP
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                        viewBox="0 0 24 24" fill="none" stroke="#EB7527"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        className="ms-2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <polyline points="15 3 21 3 21 9"></polyline>
                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                    </svg>
                                </a></p>
                                <p><a href={"https://polygonscan.com/address/0x2714839101FFbbE83129247733B1f8955e917332#code"} target="_blank" className={'OrangeColor text-decoration-on-hover'}>
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
                                <p><a href={"https://polygonscan.com/address/0x2714839101FFbbE83129247733B1f8955e917332#readContract"} target="_blank" className={'OrangeColor text-decoration-on-hover'}>
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

export default ConnectedFarmDetails;