import React from "react";
import { useNavigate } from "react-router-dom";
import { tostify } from "../Tools/tostify";
import { addHabit } from "../Redux/Reducer/HabitReducer";
import { userSelector } from "../Redux/Selector";
import { useDispatch, useSelector } from "react-redux";
import css from '../CSS/AddHabit.module.css'
import { useRef } from "react";

export default function AddHabit() {

    const habitNameRef = useRef();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userUID = useSelector(userSelector);

    const handleAddHabit = (e) => {
        e.preventDefault();
        if (!userUID) {
            console.log()
            tostify("error", "SignIn First");
            navigate("/signIn");
            return;
        }
        const habitName = habitNameRef.current.value;
        if (!habitName) {
            tostify("error", "please enter Habit name");
            return;
        }
        dispatch(addHabit(habitName));
        navigate("/")
    }

    return (
        <div className="habitsContainer">
            <div className={css.container}>
                <form action="">
                    <input ref={habitNameRef} type="text" placeholder="Habit Name" required />
                    <button onClick={(e) => handleAddHabit(e)}>Add</button>
                </form>
            </div>
        </div>
    )
}