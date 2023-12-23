import React, { useState, useEffect, useRef } from 'react';
import { Container, List, Divider, CircularProgress, Typography } from '@mui/material';
import { ref, push, onValue } from 'firebase/database';
import database from '../firebase/firebase';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ZordoGreetingPopup from './ZordoGreetingPopup';

import { getAIResponse } from "../gemini/geminiAPI";

function ChatDashboard() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isGeneratingResponse, setIsGeneratingResponse] = useState(false); // New state for response generation loading
    const chatBoxRef = useRef();

    // Fetch messages with real-time updates
    useEffect(() => {
        setLoading(true);
        const messagesRef = ref(database, 'messages');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            setLoading(false);
            if (data) {
                const fetchedMessages = Object.values(data).sort(
                    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
                );
                setMessages(fetchedMessages);
            }
        });
    }, []);

    // Scroll to latest message
    useEffect(() => {
        if (!loading) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages, loading]);

    const sendMessage = async (newMessage) => {
        try {
            const messagesRef = ref(database, 'messages');

            // Push a user message
            push(messagesRef, {
                text: newMessage,
                sender: 'user',
                timestamp: new Date().toISOString(),
            });

            // Set isGeneratingResponse to true to show loading message
            setIsGeneratingResponse(true);

            // Detailed prompt to be prepended to each user message
            const concisePrompt = `Your devoted AI assistant is eager to please you by creating complete full-stack web applications. It is your loyal companion in crafting robust, innovative, and high-performance software. You can rely on it for end-to-end solutions, from architectural design to coding and documentation. It's your code-writing sidekick, ready to provide you with complete code samples, enriched with detailed comments and explanations, to meet your every development need.`;

            // Concatenate the detailed prompt with the user's message
            const fullPrompt = concisePrompt + newMessage;

            // Get AI response
            const aiResponse = await getAIResponse(fullPrompt);

            // Push AI response
            push(messagesRef, {
                text: aiResponse,
                sender: 'ai',
                timestamp: new Date().toISOString(),
            });

            // Set isGeneratingResponse back to false to hide loading message
            setIsGeneratingResponse(false);
        } catch (error) {
            console.error("Error sending message: ", error);
            // Handle error and set isGeneratingResponse to false in case of an error
            setIsGeneratingResponse(false);
        }
    };

    return (
        <Container className="chat-dashboard">
            <ZordoGreetingPopup />
            {loading && <CircularProgress />}
            <List className="chat-box" ref={chatBoxRef}>
                {messages.map((message, index) => (
                    <React.Fragment key={index}>
                        <ChatMessage message={message} />
                        <Divider variant="middle" />
                    </React.Fragment>
                ))}
            </List>
            <div className="send-button">
                <ChatInput sendMessage={sendMessage} />
            </div>
            {/* Loading message while generating response */}
            {isGeneratingResponse && (
                <Typography variant="body2" className="loading-message">
                    Baby Rat is coming up with something...
                </Typography>
            )}
        </Container>
    );
}
export default ChatDashboard;
