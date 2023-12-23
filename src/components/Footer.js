import React from 'react';
import { AppBar, Toolbar, Typography, useTheme } from '@mui/material';

const Footer = () => {
    const theme = useTheme();
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

    return (
        <AppBar position="static" elevation={0} sx={{ top: 'auto', bottom: 0, padding: '10px', backgroundColor: theme.palette.background.default }}>
            <Toolbar>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1, color: textColor }}>
                    © 2023 Zordo
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
