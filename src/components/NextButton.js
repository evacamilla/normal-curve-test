import React from 'react';
import RightArrow from '../images/right-arrow.svg';

function NextButton(props){
    return(
        <div>
            <button className="btn next-btn">
            Framåt
                <div className="arrow-div">
                    <img src={RightArrow} />
                </div>
            </button>
        </div>
    );
}

export default NextButton;