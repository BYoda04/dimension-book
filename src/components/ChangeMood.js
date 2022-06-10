import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMood } from '../store/slices/mood.slice';

const ChangeMood = () => {

    const mood = useSelector(state=>state.mood)
    const dispatch = useDispatch()

    const change = ()=>{
        dispatch(changeMood())
    }

    return (
        <div className='button'>
            <div className={mood? 'button-container nigth-mood' : 'button-container day-mood' }>
                <button className='cursor' onClick={()=>change()}>{ mood? <ion-icon name="sunny-outline"></ion-icon> : <ion-icon name="moon-outline"></ion-icon> }</button>
            </div>
        </div>
    );
};

export default ChangeMood;