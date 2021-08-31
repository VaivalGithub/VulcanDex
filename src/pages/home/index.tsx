import React from "react";
import ArtWorkImg from '../../assets/images/artwork-img.png'
import FireLogoImg from '../../assets/images/fire_logo.png'
import TradeImg from '../../assets/images/trade-img.png'
import EarnImg from '../../assets/images/earn-img.png'

const HomePage = () => {
    return (
        <div className="HomePage">
            <div className="p-5 m-xl-5">
                <h1 className="mb-3"><span className="OrangeColor">Play</span>, Swap, <span className="OrangeColor">Stake</span>, Earn</h1>
                <h5 className="mb-5">The first decentralized exchange dedicated to gaming tokens only.</h5>
                <button type="button" className="btn BtnOrange px-4 py-2 me-3">Connect Wallet</button>
                <button type="button" className="btn BtnBorderOrange">Trade Now</button>
            </div>
            <p className="text-end mb-5"><img className="img-fluid" src={ArtWorkImg} alt="logo"/></p>
            <div className="StatisticsBox mb-5">
                <div className="container">
                    <div className="text-center WidthBox mx-auto">
                        <div className="BgLogoFire d-flex align-items-center justify-content-center rounded-circle mx-auto mb-4">
                            <img className="img-fluid" src={FireLogoImg} alt="Fire Icon"/>
                        </div>
                        <h1 className="mb-4">Used by <span className="OrangeColor">millions.<br/> Trusted</span> with billions.</h1>
                        <p className="mb-5">PancakeSwap has the most users of any decentralized platform, ever. And those users are now entrusting the platform with over $9 billion in funds.</p>
                        <h5 className="OrangeColor fw-bold mb-4">Will you join them?</h5>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-10">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="StatusBox p-4">
                                        <div className="IconBox d-flex align-items-center justify-content-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="59.139" height="51.759" viewBox="0 0 59.139 51.759">
                                                <g transform="translate(0 -0.036)">
                                                    <ellipse fill="#fa7005" cx="10.5" cy="10" rx="10.5" ry="10"
                                                             transform="translate(19.3 0.036)"/>
                                                    <circle fill="#fa7005" cx="6.5" cy="6.5" r="6.5" transform="translate(44.3 7.036)"/>
                                                    <ellipse fill="#fa7005" cx="6" cy="6.5" rx="6" ry="6.5"
                                                             transform="translate(3.3 7.036)"/>
                                                    <path fill="#fa7005"
                                                          d="M15.5,242.318c-2.5-2.049-4.765-1.778-7.657-1.778A7.828,7.828,0,0,0,0,248.336V260.95a3.394,3.394,0,0,0,3.4,3.384c8.088,0,7.114.146,7.114-.349C10.511,255.047,9.452,248.492,15.5,242.318Z"
                                                          transform="translate(0 -216.321)"/>
                                                    <path fill="#fa7005"
                                                          d="M138.622,239.986c-5.05-.421-9.44,0-13.227,3.13-6.336,5.075-5.117,11.909-5.117,20.269a4.052,4.052,0,0,0,4.045,4.045c24.381,0,25.352.786,26.8-2.415.474-1.083.344-.739.344-11.1,0-8.227-7.124-13.932-12.843-13.932Z"
                                                          transform="translate(-106.302 -215.721)"/>
                                                    <path fill="#fa7005"
                                                          d="M385.467,240.541c-2.907,0-5.16-.268-7.657,1.778,6,6.128,4.989,12.236,4.989,21.668,0,.5-.809.349,6.993.349a3.515,3.515,0,0,0,3.518-3.5V248.337A7.829,7.829,0,0,0,385.467,240.541Z"
                                                          transform="translate(-334.171 -216.322)"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <h3>2.3 million</h3>
                                        <h4>Users</h4>
                                        <p>in the last 30 days</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="StatusBox p-4">
                                        <div className="IconBox d-flex align-items-center justify-content-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="43.001" height="51.601" viewBox="0 0 43.001 51.601">
                                                <path fill="#fa7005"
                                                      d="M136.86,137.541a.86.86,0,0,1-.86-.86V104.86a.86.86,0,1,1,1.72,0v31.821A.86.86,0,0,1,136.86,137.541Zm0,0"
                                                      transform="translate(-121.38 -92.82)"/>
                                                <path fill="#fa7005" d="M112,160h6.88v22.36H112Zm0,0"
                                                      transform="translate(-99.96 -142.8)"/>
                                                <path fill="#fa7005"
                                                      d="M248.86,105.541a.86.86,0,0,1-.86-.86V72.86a.86.86,0,0,1,1.72,0v31.821A.86.86,0,0,1,248.86,105.541Zm0,0"
                                                      transform="translate(-221.339 -64.26)"/>
                                                <path fill="#fa7005" d="M224,128h6.88v22.361H224Zm0,0"
                                                      transform="translate(-199.919 -114.24)"/>
                                                <path fill="#fa7005"
                                                      d="M360.86,201.541a.86.86,0,0,1-.86-.86V168.86a.86.86,0,1,1,1.72,0v31.821A.86.86,0,0,1,360.86,201.541Zm0,0"
                                                      transform="translate(-321.299 -149.94)"/>
                                                <path fill="#fa7005" d="M336,224h6.88v22.36H336Zm0,0"
                                                      transform="translate(-299.879 -199.92)"/>
                                                <path fill="#fa7005"
                                                      d="M24.86,33.541a.86.86,0,0,1-.86-.86V.86a.86.86,0,1,1,1.72,0V32.681A.86.86,0,0,1,24.86,33.541Zm0,0"
                                                      transform="translate(-21.42)"/>
                                                <path fill="#fa7005" d="M0,56H6.88V78.36H0Zm0,0" transform="translate(0 -49.98)"/>
                                            </svg>
                                        </div>
                                        <h3>38 million</h3>
                                        <h4>Trades</h4>
                                        <p>made in the last 30 days</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="StatusBox p-4">
                                        <div className="IconBox d-flex align-items-center justify-content-center mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="51.602" height="51.601" viewBox="0 0 51.602 51.601">
                                                <path fill="#fa7005"
                                                      d="M50.089,202.349H48.477V172.518a1.512,1.512,0,0,0-1.512-1.512H40.918a1.512,1.512,0,0,0-1.512,1.512v29.832H36.383V182.6a1.512,1.512,0,0,0-1.512-1.512H28.824a1.512,1.512,0,0,0-1.512,1.512v19.753H24.289v-14.21a1.512,1.512,0,0,0-1.512-1.512H16.73a1.512,1.512,0,0,0-1.512,1.512v14.21H12.195V191.767a1.512,1.512,0,0,0-1.512-1.512H4.636a1.512,1.512,0,0,0-1.512,1.512v10.582H1.512a1.512,1.512,0,0,0,0,3.023H50.089a1.512,1.512,0,0,0,0-3.023Z"
                                                      transform="translate(0 -153.772)"/>
                                                <path fill="#fa7005"
                                                      d="M1.512,32.486c9.435,0,19.667-3.389,28.81-9.541A55.855,55.855,0,0,0,47.161,5.666l1.468,5.479a1.638,1.638,0,0,0,1.851,1.069,1.5,1.5,0,0,0,1.069-1.851L49.074,1.124A1.512,1.512,0,0,0,47.222.055L37.984,2.53a1.512,1.512,0,0,0,.783,2.92l5.952-1.595a52.48,52.48,0,0,1-16.084,16.58c-8.65,5.821-18.282,9.026-27.122,9.026a1.512,1.512,0,0,0,0,3.023Z"
                                                      transform="translate(0 -0.003)"/>
                                            </svg>
                                        </div>
                                        <h3>$9 billion</h3>
                                        <h4>Staked</h4>
                                        <p>Total Value Locked</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="TradeBox py-5 px-3">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-8 col-xl-7">
                            <h1 className="mb-4">Trade <span className="OrangeColor">anything. No</span> registration, no  <span className="OrangeColor">hassle</span>.</h1>
                            <p className="mb-5">Trade any token on Vulcan Smart Chain in seconds, just by connecting your wallet.</p>

                            <button type="button" className="btn BtnOrange px-xl-4 py-2 me-3">Trade Now</button>
                            <button type="button" className="btn BtnBorderOrange px-xl-4">Learn More</button>
                        </div>
                        <div className="col-lg-5 col-xl-4">
                            <img className="img-fluid" src={TradeImg} alt="Trade Image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="EarnBox py-5 px-3">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-4 col-xl-4">
                            <img className="img-fluid" src={EarnImg} alt="Trade Image"/>
                        </div>
                        <div className="col-lg-8 col-xl-7">
                            <h1 className="mb-4"><span className="OrangeColor">Earn</span> passive income with <span className="OrangeColor">crypto</span>.</h1>
                            <p className="mb-5">VulcanDex makes it easy to make your crypto work for you.</p>

                            <button type="button" className="btn BtnOrange px-4 py-2 me-3">Explore</button>
                            <button type="button" className="btn BtnBorderOrange">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="SyrupPool px-3 mb-5">
                <div className="container">
                    <h4 className="text-white mb-5">Top <span className="OrangeColor">Syrup Pools</span>
                        <svg className="ms-3" xmlns="http://www.w3.org/2000/svg" width="20.096" height="22.967" viewBox="0 0 20.096 22.967">
                            <path fill="#fff" d="M17.225,0V2.871H0V5.742H17.225V8.613l5.742-4.306ZM5.742,11.483,0,15.79,5.742,20.1V17.225H22.967V14.354H5.742Z" transform="translate(0 22.967) rotate(-90)"/>
                        </svg>
                    </h4>
                    <div className="row">
                        <div className="col-md">
                            <div className="BorderRight">
                                <h6 className="mb-2">Auto PYR</h6>
                                <p className="mb-2 text-white">93.87%</p>
                                <small>APR</small>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="BorderRight">
                                <h6 className="mb-2">Stake PYR - Earn DVI</h6>
                                <p className="mb-2 text-white">93.87%</p>
                                <small>APR</small>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="BorderRight">
                                <h6 className="mb-2">Stake PYR - Earn POTS</h6>
                                <p className="mb-2 text-white">93.87%</p>
                                <small>APR</small>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="BorderRight">
                                <h6 className="mb-2">Stake PYR - Earn $DG</h6>
                                <p className="mb-2 text-white">93.87%</p>
                                <small>APR</small>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="BorderRight border-end-0">
                                <h6 className="mb-2">Stake PYR - Earn ODDZ</h6>
                                <p className="mb-2 text-white">93.87%</p>
                                <small>APR</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-3 mb-5">
                <div className="PrizeBox p-5">
                    <div className="text-center mb-5">
                        <h1 className="mb-4">Win <span className="OrangeColor">millions</span> in prizes</h1>
                        <p>Provably fair, on-chain games. Win big with PancakeSwap.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-9">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="Prizes p-4">
                                        <div className="row mb-4">
                                            <div className="col">
                                                <p className="text-white">Prediction</p>
                                                <h3 className="OrangeColor">2.3 million</h3>
                                            </div>
                                            <div className="col-auto">
                                                <div className="IconBox d-flex align-items-center justify-content-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="53.13" height="53.13"
                                                         viewBox="0 0 53.13 53.13">
                                                        <path fill="#fa7005"
                                                              d="M38.844,333.238a.947.947,0,0,1,1.328.19l2.137,2.849,3.606-4.206a.936.936,0,0,1-.809-.92.949.949,0,0,1,.949-.949h1.9a.932.932,0,0,1,.278.044c.015,0,.028.013.042.019a.935.935,0,0,1,.256.143c.013.009.029.012.041.023s.015.022.024.032a.934.934,0,0,1,.208.265v0l.948,1.9a.949.949,0,0,1-1.7.849l-.31-.62-4.763,5.557a.946.946,0,0,1-.719.331h-.031a.947.947,0,0,1-.728-.379l-2.277-3.036-2.082,1.561a7.847,7.847,0,1,0-.516-1.985Zm0,0"
                                                              transform="translate(-32.772 -292.252)"/>
                                                        <path fill="#fa7005"
                                                              d="M11.387,315.348a11.385,11.385,0,1,0,0-22.77c-.349,0-.694.022-1.035.052-.123.011-.247.028-.369.043q-.319.04-.632.1c-.148.027-.3.054-.442.087-.176.039-.349.087-.522.135q-.463.127-.911.292c-.121.044-.244.084-.362.133-.182.074-.36.158-.537.241-.117.055-.234.11-.349.169q-.254.13-.5.272c-.123.071-.244.146-.364.222-.15.094-.3.186-.446.287-.246.171-.487.349-.719.538-.081.066-.157.139-.237.208-.178.154-.354.31-.522.475-.077.075-.152.154-.227.231-.172.178-.339.361-.5.55-.056.065-.111.129-.165.2-.208.256-.408.519-.593.792l0,.006q-.3.449-.565.928l-.022.044c-.153.285-.293.577-.422.875-.03.069-.058.139-.086.209a11.373,11.373,0,0,0,10.534,15.689Zm0-20.872A9.487,9.487,0,1,1,2.32,306.752l0-.013a9.484,9.484,0,0,1,9.071-12.263Zm0,0"
                                                              transform="translate(-0.002 -262.217)"/>
                                                        <path fill="#fa7005"
                                                              d="M128.344,57.633a6.926,6.926,0,0,0-5.693-2.782,7.43,7.43,0,0,0-3.384.811l-1.47,3.452c.057-.019.116-.031.173-.049l.094-.026a9.4,9.4,0,0,1,1.267-.284l.075-.009a9.054,9.054,0,0,1,2.415-.036c.113.013.223.034.334.051.236.035.47.075.7.127.127.029.251.063.377.1.212.058.42.121.625.193.123.043.246.087.367.135.207.082.409.173.608.268.107.051.216.1.321.155.233.123.459.258.68.4.062.04.128.074.19.115a9.6,9.6,0,0,1,.8.6c.068.057.131.12.2.18.184.163.365.33.537.507.085.088.164.179.245.27.144.161.285.325.417.495.039.049.083.093.121.143Zm0,0"
                                                              transform="translate(-105.573 -49.158)"/>
                                                        <path fill="#fa7005"
                                                              d="M39.718,109.719a7.686,7.686,0,0,0-1.125.084,7.466,7.466,0,0,0-.747.167c-.111.028-.226.043-.336.077-.222.067-.433.161-.647.248-.13.053-.265.094-.392.154-.165.078-.317.176-.475.266s-.344.186-.507.3a7.569,7.569,0,0,0-2.737,3.287l-.394,1.136a.964.964,0,0,1-.026.1l-4.954,14.39.03-.023c.181-.152.373-.29.563-.432.126-.094.248-.193.377-.282.216-.15.441-.288.666-.426.112-.069.222-.139.336-.2.234-.134.475-.257.718-.377.116-.057.231-.114.348-.168.242-.111.488-.214.738-.31.132-.051.264-.1.4-.146.24-.084.481-.163.727-.234.163-.047.327-.086.492-.126.224-.055.447-.11.675-.154s.444-.071.668-.1c.182-.025.361-.057.545-.074.418-.04.838-.064,1.263-.064.407,0,.809.025,1.207.061.1.009.195.018.292.03.392.044.78.1,1.161.178l.07.017c.362.076.717.171,1.067.275.092.028.184.055.275.085.362.117.72.245,1.068.392.038.016.075.035.113.051.317.137.626.288.931.449.084.045.168.089.251.135.326.181.645.372.954.58.045.03.088.063.132.094q.409.281.794.594c.073.059.146.116.217.177.283.238.558.485.82.745.044.044.086.09.129.134q.342.349.657.723c.058.068.116.135.172.2.234.289.458.585.668.893.037.055.071.111.107.166.1.154.206.307.3.465V117.309A7.6,7.6,0,0,0,39.718,109.719Zm-3.847,7.192-1.223,3.554a.949.949,0,1,1-1.794-.617l1.223-3.554a.949.949,0,1,1,1.794.617Zm2.332-3.079a3.776,3.776,0,0,0-.757.446.949.949,0,0,1-1.149-1.51,5.671,5.671,0,0,1,1.141-.672.949.949,0,0,1,.765,1.737Zm0,0"
                                                              transform="translate(-24.538 -98.333)"/>
                                                        <path fill="#fa7005"
                                                              d="M300.624,4.093l-.735-1.726A3.8,3.8,0,0,0,292.574,3.8V5.752A9.176,9.176,0,0,1,298.267,3.8,9.552,9.552,0,0,1,300.624,4.093Zm0,0"
                                                              transform="translate(-262.214 -0.003)"/>
                                                        <path fill="#fa7005"
                                                              d="M292.574,118.257v14.985c.1-.158.2-.311.3-.465.036-.055.07-.112.107-.166.21-.308.433-.6.668-.893.056-.069.115-.136.172-.2q.316-.373.657-.723c.043-.044.084-.09.128-.134.262-.26.537-.508.82-.746.071-.06.144-.118.217-.176q.386-.311.794-.594c.044-.03.087-.064.132-.094.308-.207.628-.4.954-.58.083-.046.167-.09.251-.135.3-.161.613-.312.93-.449.038-.017.075-.035.113-.051.348-.147.705-.275,1.068-.392.091-.029.183-.057.275-.084.351-.1.706-.2,1.068-.275l.07-.017c.381-.078.769-.133,1.161-.178.1-.011.194-.02.292-.029.4-.036.8-.062,1.206-.062.425,0,.846.024,1.263.064.183.017.361.049.542.074.225.031.45.06.672.1s.45.1.673.153c.166.041.332.081.5.128.245.07.485.149.724.233.135.047.268.1.4.147.249.1.495.2.737.31.117.054.232.111.348.168.243.12.484.244.719.378.112.064.221.134.331.2.227.139.454.278.672.43.123.086.239.179.359.269.2.147.395.29.582.447l.027.021-4.953-14.39c-.012-.036-.022-.072-.031-.109l-.387-1.125a7.581,7.581,0,0,0-2.738-3.285c-.167-.113-.345-.2-.519-.3-.155-.087-.3-.184-.465-.26-.129-.062-.265-.1-.4-.157-.212-.086-.42-.179-.64-.245-.11-.034-.226-.049-.338-.077a7.426,7.426,0,0,0-.745-.167,7.685,7.685,0,0,0-1.125-.084,7.6,7.6,0,0,0-7.59,7.59Zm0,0"
                                                              transform="translate(-262.214 -98.333)"/>
                                                        <path fill="#fa7005"
                                                              d="M292.574,62.447c.038-.05.082-.094.121-.143.133-.171.274-.335.418-.5.081-.09.16-.182.244-.269.172-.177.353-.345.538-.508.066-.059.129-.122.2-.179a9.518,9.518,0,0,1,.8-.6c.061-.041.126-.075.188-.114.222-.141.448-.277.681-.4.105-.056.214-.1.322-.155.2-.1.4-.186.608-.268.121-.047.244-.092.367-.135.206-.071.414-.135.626-.193.125-.034.249-.068.376-.1.23-.052.465-.092.7-.127.111-.017.221-.039.334-.051a9.064,9.064,0,0,1,2.414.035c.025,0,.051.005.076.01a9.393,9.393,0,0,1,1.266.284l.095.027c.057.017.116.03.172.049l-1.47-3.452a7.43,7.43,0,0,0-3.384-.812,6.926,6.926,0,0,0-5.693,2.782Zm0,0"
                                                              transform="translate(-262.214 -49.158)"/>
                                                        <path fill="#fa7005"
                                                              d="M241.514,385.9a1.9,1.9,0,1,1-1.9-1.9A1.9,1.9,0,0,1,241.514,385.9Zm0,0"
                                                              transform="translate(-213.051 -344.156)"/>
                                                        <path fill="#fa7005"
                                                              d="M336.36,418.009v-6.575h-6.575A7.6,7.6,0,0,0,336.36,418.009Zm0,0"
                                                              transform="translate(-295.564 -368.739)"/>
                                                        <path fill="#fa7005"
                                                              d="M149.909,3.8a3.8,3.8,0,0,0-7.28-1.51l-.041.092-.729,1.713a9.552,9.552,0,0,1,2.357-.3,9.176,9.176,0,0,1,5.693,1.954Zm0,0"
                                                              transform="translate(-127.139 0)"/>
                                                        <path fill="#fa7005"
                                                              d="M241.514,175.616a1.9,1.9,0,1,0-3.795,0v18.535a3.79,3.79,0,0,1,.4-.2c.01,0,.017-.01.027-.013a3.781,3.781,0,0,1,.629-.2c.053-.012.106-.023.16-.032a3.413,3.413,0,0,1,1.363,0c.054.01.107.02.16.032a3.78,3.78,0,0,1,.629.2c.009,0,.017.009.027.013a3.786,3.786,0,0,1,.4.2Zm0,0"
                                                              transform="translate(-213.051 -155.692)"/>
                                                        <path fill="#fa7005"
                                                              d="M341.955,330.753a7.571,7.571,0,0,0-12.17,5.039h7.131Zm0,0"
                                                              transform="translate(-295.564 -294.996)"/>
                                                        <path fill="#fa7005"
                                                              d="M411.434,369.682a7.571,7.571,0,0,0,5.039-12.171l-5.039,5.04Zm0,0"
                                                              transform="translate(-368.74 -320.413)"/>
                                                        <path fill="#fa7005"
                                                              d="M303.959,315.348a11.373,11.373,0,0,0,10.534-15.689c-.028-.07-.057-.14-.086-.209-.129-.3-.269-.591-.422-.875-.008-.015-.014-.03-.022-.044q-.261-.479-.565-.929l0-.005c-.185-.274-.385-.537-.593-.793-.054-.066-.109-.13-.164-.195q-.241-.283-.5-.55c-.075-.078-.15-.156-.227-.231-.169-.165-.345-.321-.522-.475-.08-.069-.156-.141-.237-.208-.232-.19-.473-.367-.72-.538-.145-.1-.3-.193-.446-.287-.12-.076-.241-.151-.364-.222q-.247-.142-.5-.272c-.115-.059-.232-.114-.349-.169-.178-.083-.355-.167-.538-.241-.119-.048-.242-.089-.364-.133q-.447-.165-.908-.291c-.174-.047-.347-.1-.523-.135-.146-.033-.294-.06-.442-.087q-.313-.057-.632-.1c-.123-.015-.245-.032-.369-.043-.342-.03-.686-.052-1.036-.052a11.385,11.385,0,1,0,0,22.77Zm0-20.872a9.456,9.456,0,0,1,6.689,2.767c.006.005.013.007.019.013s.007.013.013.019a9.482,9.482,0,1,1-6.72-2.8Zm0,0"
                                                              transform="translate(-262.214 -262.217)"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-white fw-semibold mb-3">in PYR won so far</p>
                                        <p className="mb-4">Will PYR price rise or fall? guess correctly to win!</p>
                                        <button type="button" className="btn BtnOrange px-4 py-2 w-100">Play</button>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="Prizes p-4">
                                        <div className="row mb-4">
                                            <div className="col">
                                                <p className="text-white">Lottery</p>
                                                <h3 className="OrangeColor">$184,618</h3>
                                            </div>
                                            <div className="col-auto">
                                                <div className="IconBox d-flex align-items-center justify-content-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="53.13" height="53.13"
                                                         viewBox="0 0 53.13 53.13">
                                                        <g transform="translate(0 30.36) rotate(-45)">
                                                            <g transform="translate(0 0)">
                                                                <path fill="#fa7005"
                                                                      d="M42.041,11.628a.894.894,0,0,0,.895-.895V3.578A3.581,3.581,0,0,0,39.358,0H3.578A3.581,3.581,0,0,0,0,3.578v7.156a.894.894,0,0,0,.895.895,4.472,4.472,0,1,1,0,8.945A.894.894,0,0,0,0,21.468v7.156A3.581,3.581,0,0,0,3.578,32.2h35.78a3.581,3.581,0,0,0,3.578-3.578V21.468a.894.894,0,0,0-.895-.895,4.472,4.472,0,1,1,0-8.945Zm-29.518,16.1a.895.895,0,1,1-1.789,0V25.94a.895.895,0,0,1,1.789,0v1.789Zm0-7.156a.895.895,0,1,1-1.789,0V18.784a.895.895,0,1,1,1.789,0v1.789Zm0-7.156a.895.895,0,1,1-1.789,0V11.628a.895.895,0,1,1,1.789,0v1.789Zm0-7.156a.895.895,0,1,1-1.789,0V4.249a.895.895,0,1,1,1.789,0V6.262Zm18.784,17H18.784a.895.895,0,0,1,0-1.789H31.307a.895.895,0,1,1,0,1.789Zm0-6.261H18.784a.895.895,0,0,1,0-1.789H31.307a.895.895,0,1,1,0,1.789Zm0-6.262H18.784a.895.895,0,1,1,0-1.789H31.307a.895.895,0,1,1,0,1.789Z"/>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-white fw-semibold mb-3">in PYR prizes this round</p>
                                        <p className="mb-4">Buy tickets with PYR, win PYR if your numbers match</p>
                                        <button type="button" className="btn BtnOrange px-4 py-2 w-100">Buy Tickets</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="BuyPyr py-5 px-3">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-8 col-xl-7">
                            <h1 className="mb-4"><span className="OrangeColor">PYR</span> makes our world go <span className="OrangeColor">round</span>.</h1>
                            <p className="mb-5">CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it… heck, you can even vote with it!</p>

                            <button type="button" className="btn BtnOrange px-4 py-2 me-3">Buy PYR</button>
                            <button type="button" className="btn BtnBorderOrange">Learn More</button>
                            <div className="row pt-5">
                                <div className="col-md">
                                    <div className="BorderRight">
                                        <h6 className="mb-2">Total Supply</h6>
                                        <p className="mb-2 text-white">93.87%</p>
                                        <small>APR</small>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="BorderRight">
                                        <h6 className="mb-2">Burned to Date</h6>
                                        <p className="mb-2 text-white">93.87%</p>
                                        <small>APR</small>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="BorderRight">
                                        <h6 className="mb-2">Market Cap</h6>
                                        <p className="mb-2 text-white">$3.8 billion</p>
                                        <small>APR</small>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="BorderRight border-end-0">
                                        <h6 className="mb-2">Current Emissions</h6>
                                        <p className="mb-2 text-white">19/block</p>
                                        <small>APR</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-4">
                            <img className="img-fluid" src={TradeImg} alt="Trade Image"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="HowToStart text-center py-5 ">
                <div className="WidthBox mx-auto">
                    <h1 className="mb-4">Start in <span className="OrangeColor">seconds</span>.</h1>
                    <p className="mb-4">Connect your crypto wallet to start using the app in seconds. No registration needed.</p>
                    <button type="button" className="btn BtnOrange px-4 py-2 me-3">Connect Wallet</button>
                    <button type="button" className="btn BtnBorderOrange px-4 py-2">Learn how to start</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
