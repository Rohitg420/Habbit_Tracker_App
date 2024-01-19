import {configureStore} from "@reduxjs/toolkit"
import { userReducer } from "./Reducer/UserReducer";
import { habitsReducer } from "./Reducer/HabitReducer";


const store = configureStore({
    reducer:{
        userReducer,
        habitsReducer,

    }

})

export default store;