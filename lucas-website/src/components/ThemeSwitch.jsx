import './Components.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={'theme-switch'}>
            <input
                onChange={toggleTheme}
                checked={theme === 'dark'}
                type='checkbox'
                id='custom-switch'
                aria-checked={theme === 'dark'}
            />
            <label htmlFor='custom-switch'></label>
        </div>
    )
}

export default ThemeSwitch;
