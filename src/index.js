import React from 'react'
import {render} from 'react-dom'
import Base from './home.js';
import Background from './images/white2.jpg';

const style = {
    height: '700px',
    opacity: '0.7',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${ Background })`
}

const Books = () => {
    return (
        <div>welcome to books world!</div>
    )
}
render(
    <div style={style}>
        <Base />
        <h1 id='title' className='header'>React-App-Started</h1>
        <Books />
    </div>,
    document.getElementById('root')
)