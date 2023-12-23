import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Header = ({ toggleTheme }) => {
    const theme = useTheme();
    const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary;

    return (
        <AppBar position="sticky" elevation={0} sx={{ backgroundColor: theme.palette.background.default }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: textColor }}>
                    Zordo
                </Typography>
                <IconButton sx={{ color: textColor }} onClick={toggleTheme}>
                    <Brightness4Icon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
