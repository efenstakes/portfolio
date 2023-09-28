"use client"
import React from 'react'
import { ThemeProvider } from '@mui/material';
import theme from '@/styles/theme';


const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Providers