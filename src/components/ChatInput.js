import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './styles/ChatDashboard.css';

const ChatInput = ({ sendMessage }) => {
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            sendMessage(newMessage);
            setNewMessage('');
        }
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={9}>
                <TextField
                    fullWidth
                    label="Ask Zordo"
                    variant="outlined"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="message-input"
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={handleSendMessage}
                    className="send-button"
                >
                    Send
                </Button>
            </Grid>
        </Grid>
    );
}

export default ChatInput;
