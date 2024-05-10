import './Components.css';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={'theme-switch'} style={{ position: 'absolute', top: '30px', right: '15px', transform: 'translateY(-50%)' }}>
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
