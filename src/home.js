import React, {Component} from 'react';
import './home.css'
const style = {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '20px',
    margin: 0,
    fontSize: 'calc(12px + 2vmin)',
    backgroundColor: '#ddd9d9'
}
class Base extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <section style={style}>Amandeep Sindhar</section>
            </div>
        );
    }
}

export default Base;