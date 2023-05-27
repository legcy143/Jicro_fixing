import React, { useCallback, useState } from 'react';
import { Alert, Linking } from 'react-native';
import Button from './../../components/Button';
import { useLoading } from "../../../suppliers/StateManagement/Loading"
const WhatsApp = ({ text, disabled, className, bgColor, textColor, set, setTO, status}) => {
    const { setLoading, loading } = useLoading()
    const handlePress = async () => {
        if (setTO !== undefined) {
            set(setTO)
        }
        setLoading(true)
        const url = 'https://jicro.authlink.me?redirectUri=jicrootpless://otpless';
        await Linking.openURL(url);
    }

    return (
        <Button bgColor={bgColor} textColor={textColor} func={handlePress} isloading={loading} disabled={disabled} className={className} text={`${!text ? "Continue with WhatsApp " : text}`} />
    );
};

export default WhatsApp;