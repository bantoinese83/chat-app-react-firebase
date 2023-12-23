import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';
import './styles/ChatDashboard.css';

const ChatMessage = ({ message, isEven }) => {
    const isUserMessage = message.sender === 'user';

    return (
        <ListItem disableGutters className={isUserMessage ? 'user-message' : 'ai-message'}>
            <ListItemAvatar>
                <Avatar>
                    {isUserMessage ? 'U' : 'AI'} {/* User or AI Avatar */}
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <div className={`chat-bubble ${isEven ? 'chat-bubble-even' : 'chat-bubble-odd'}`}>
                        <span className="message-text">{message.text}</span>
                    </div>
                }
                secondary={
                    <Typography variant="caption" className="timestamp">
                        {new Date(message.timestamp).toLocaleString()}
                    </Typography>
                }
            />
        </ListItem>
    );
}

export default ChatMessage;
