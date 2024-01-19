import React from "react";
import { useSelector } from "react-redux";
import WeeklyHabitStatusComponent from './WeeklyHabitStatusComponent';
import css from '../../CSS/WeeklyHabit.module.css'
import { habitsSelector } from "../../Redux/Selector";

export default function WeeklyHabitComponent(){
    const HABITS = useSelector(habitsSelector);


    return (<>
        <div className={css.title}>
            <div>sun</div>
            <div>mon</div>
            <div>tue</div>
            <div>wed</div>
            <div>thu</div>
            <div>fri</div>
            <div>sat</div>
        </div>
        <div className={css.habitsContainer}>
            {HABITS && HABITS.map((habit, index) => <WeeklyHabitStatusComponent key={index} habit={habit} />)}
        </div>
        </>)

}

