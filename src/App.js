import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddHabit from "./Component/AddHabit";
import AllHabit from "./Component/AllHabit";
import SignUp from "./Component/SignUp";
import Navbar from "./Component/Navbar";
import SignIn from "./Component/SignIn";
import DailyHabitComponent from './Component/Daily/DailyHabitComponent'
import WeeklyHabitComponent from "./Component/Weekly/WeeklyHabitComponent";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const BrowserRouter = createBrowserRouter([
    {
      path: '/', element: <Navbar/>, children: [
        {
          path: "/", element: <AllHabit />, children: [
            { path: "/", element: <DailyHabitComponent /> },
            { path: "weeklyView", element: <WeeklyHabitComponent /> },
          ]
        },
        { path: "addHabit", element: <AddHabit /> },
        { path: "signIn", element: <SignIn /> },
        { path: "SignUp", element: <SignUp /> },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={BrowserRouter} />
      <ToastContainer />
    </>
  );
}

export default App;
