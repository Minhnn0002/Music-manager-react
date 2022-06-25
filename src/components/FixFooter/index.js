import { useState } from 'react';
import './style.css'
import { closeIcon, homeIcon, nextIcon, playBlackIcon, playGreyIcon, prevIcon } from '../../assets'
import { userIcon } from '../../assets'
const FixFooter = props => {


    const [slideUp, setSlideUp] = useState(false);

    return (
        <div className={`fix-footer ${slideUp ? 'active' : ''}`} >
            <div onClick={() => setSlideUp(!slideUp)} className='slide-up-btn'>
            </div>
            <div className='d-visibility'></div>

            {
                slideUp && (
                    <div className='audio-player-lg'>
                        <div className='audio-cover-lg-img'>
                            <img />
                        </div>
                        <div>
                            <h2> Nang am xa dan </h2>
                            <h3> Son Tung MTP</h3>
                        </div>

                        <div className='audio-player-progress'>
                            <input
                                type='range'
                                min={'0'}
                                max={'100'}
                            />
                        </div>

                        <div className='audio-controls flex justify-sb'>
                            <button>
                                <img src={prevIcon} />
                            </button>
                            <div>
                                <button className='play-pause-btn'>
                                    <img src={playBlackIcon} />
                                </button>
                            </div>
                            <button>
                                <img src={nextIcon} />
                            </button>
                        </div>

                    </div>
                )

            }

            {
                !slideUp && (
                    <>
                        <div className='mini-player flex justify-sb align-center mtb-10'>

                            <div className='flex align-center'>
                                <div className='artist-cover-img'>
                                    <img />
                                </div>

                                <div className='mini-player-info mlr-10'>
                                    <p>Nang am xa dan</p>
                                    <p>Son Tung MTP</p>
                                </div>

                            </div>

                            <div className='mini-player-control flex'>
                                <button>
                                    <img src={playGreyIcon} />
                                </button>
                                <button>
                                    <img src={closeIcon} />
                                </button>
                            </div>

                        </div>

                        {/* navigation menu */}
                        <div className='navigation-menu flex justify-evenly'>
                            <a>
                                <div>
                                    <img src={homeIcon} />
                                </div>
                                <div>
                                    <span>Home</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <img src={userIcon} />
                                </div>
                                <div>
                                    <span>Profile</span>
                                </div>
                            </a>
                        </div>
                    </>
                )

            }
        </div >
    );
}
export default FixFooter