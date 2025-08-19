'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes';
import { ThemeType } from '@/constants/theme-type';

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider attribute="class" defaultTheme={ThemeType.Dark} enableSystem {...props}>
            {children}
        </NextThemesProvider>
    );
}