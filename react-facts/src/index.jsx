import './index.css'
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

root.render(
    <TemporaryName />
);
function TemporaryName(){
    return(
        <>
        <main>
    <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-icon-svg-download-png-282599.png?f=webp" alt="React Logo" width = "40px"/>
    <span>ReactFacts</span>
    </main>
    <h1>Fun facts about React</h1>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was originally creates by Gordan Walke</li>
        <li>Has well over 100K starts on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps. </li>
    </ul>
    </>
    );
} 