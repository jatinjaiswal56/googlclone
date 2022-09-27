import React from 'react';
import {Rings,Triangle} from 'react-loader-spinner';
function Loading(props) {
    return (
        <div className='flex justify-center items-center'>
            {/* <Triangle type='Puff' color="#00BFFF" height={550} width={80}/> */}
            <Rings type='Puff' color="#00BFFF" height={850} width={180}/>
        </div>
    );
}

export default Loading;