import React from "react";
import MapView from './components/MapView';
import NavigationView from "./components/NavigationView";
import { ToastContainer } from "react-custom-alert";
import { BrowserRouter } from "react-router-dom";
import "./assets/style/common.css";
import UserLogin from "./components/UserLogin";

export default function App() {

    return (
        <BrowserRouter>
            {/* <NavigationView></NavigationView> */}
            {/* <MapView></MapView> */}
            <UserLogin></UserLogin>
            <ToastContainer floatingTime={5000} />
        </BrowserRouter>
    );

}