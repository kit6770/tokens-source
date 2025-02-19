"use client"

import React, { useState, useCallback } from 'react';
import { Snackbar, Alert } from '@mui/material';

// Message context for global use
const MessageContext = React.createContext<any>(null);

export const useMessage = () => {
    const context = React.useContext(MessageContext);
    if (!context) {
        throw new Error('useMessage must be used within a MessageProvider');
    }
    return context;
};

export const MessageProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState<string>('');
    const [severity, setSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('info');

    const showMessage = useCallback((msg: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
        setMessage(msg);
        setSeverity(type);
        setOpen(true);
    }, []);

    const hideMessage = () => setOpen(false);

    return (
        <MessageContext.Provider value={showMessage}>
            {children}
            <Snackbar
                open={open}
                autoHideDuration={1000}
                onClose={hideMessage}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert onClose={hideMessage} severity={severity}>
                    {message}
                </Alert>
            </Snackbar>
        </MessageContext.Provider>
    );
};