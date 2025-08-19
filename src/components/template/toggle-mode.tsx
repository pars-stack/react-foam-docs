'use client';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            variant="ghost"
            className={cn(className, 'size-8 cursor-pointer rounded-full p-0')}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
    );
}