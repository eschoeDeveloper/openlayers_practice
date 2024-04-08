import React from "react";
import MapView from './components/MapView';
import NavigationView from "./components/NavigationView";
import { ToastContainer } from "react-custom-alert";
import { BrowserRouter } from "react-router-dom";
import "./assets/style/common.css";

export default function App() {

    return (
        <BrowserRouter>
            <NavigationView></NavigationView>
            <MapView></MapView>
            <ToastContainer floatingTime={5000} />
        </BrowserRouter>
    );

}