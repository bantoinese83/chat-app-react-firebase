import React, {useState} from 'react';
import {
    createTheme,
    ThemeProvider,
    CssBaseline,
    Box,
} from '@mui/material';
import ChatDashboard from './components/ChatDashboard';
import Header from './components/Header';
import Footer from './components/Footer'; // Import the Footer component

import useMediaQuery from '@mui/material/useMediaQuery';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4a90e2',
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            default: '#121212',
        },
        text: {
            primary: '#e0e0e0',
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                },
            },
        },
    },
});

function App() {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [theme, setTheme] = useState(isDarkMode ? darkTheme : createTheme());

    const toggleTheme = () => {
        setTheme(theme.palette.mode === 'dark' ? createTheme() : darkTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header toggleTheme={toggleTheme} />
                <main style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <div style={{ width: '80%', maxWidth: '500px' }}>
                            <ChatDashboard />
                        </div>
                    </Box>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;