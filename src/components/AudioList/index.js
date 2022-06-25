import { backIcon } from '../../assets';
import './style.css'

const AudioList = ({ onBackButtonPress }) => {
    return (
        <div className='audio-ls m-20'>
            <div onClick={onBackButtonPress} className='audio-ls-header'>
                <img src={backIcon} />
            </div>
            <div>
                <ul>
                    <li className='audio-ls-container mtb-10'>
                        <div className='audio-ls-item flex align-center'>
                            <div className='audio-img'>
                                <img />
                            </div>
                            <div className='audio-info mlr-10 ptb-10'>
                                <p>Nang am xa dan</p>
                                <p>Son Tung MTP</p>
                            </div>
                        </div>
                        <div className='audio-ls-item flex align-center'>
                            <div className='audio-img'>
                                <img />
                            </div>
                            <div className='audio-info mlr-10'>
                                <p>Nang am xa dan</p>
                                <p>Son Tung MTP</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default AudioList;