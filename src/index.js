import React from 'react'
import {render} from 'react-dom'
import Base from './home.js';
import Background from './images/white_tree.jpg';
import './index.css';
import App from './App.js'

const style = {
    height: '100vh',
    opacity: '0.7',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${ Background })`
}


render(
    <div>
        <Base />
        <h1 id='title' className='header' style={style}>Amandeep Sindhar</h1>
    </div>,
    document.getElementById('root')
)