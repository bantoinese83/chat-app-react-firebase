import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
import ChatMessage from './ChatMessage';

const ZordoGreetingPopup = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        // Automatically open the popup when the component mounts
        setOpen(true);
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{"Greetings from Zordo!"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {"Hello! I'm Zordo, your AI assistant. Ready to explore the world of web development?"}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Let's Go!
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ZordoGreetingPopup;
