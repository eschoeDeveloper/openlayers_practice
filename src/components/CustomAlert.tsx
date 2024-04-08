import React from 'react';
import { toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';

export function info(msg?: string) {
    const defaultText = (msg) ? msg: "성공"; 
    return toast.info(defaultText);
}

export function success(msg?: string) {
    const defaultText = (msg) ? msg: "성공"; 
    return toast.success(defaultText);
}

export function warning(msg?: string) {
    const defaultText = (msg) ? msg: "성공"; 
    return toast.warning(defaultText);
}

export function error(msg?: string) {
    const defaultText = (msg) ? msg: "성공"; 
    return toast.error(defaultText);
}
