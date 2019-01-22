import React, {Component} from 'react';

const style = {
    opacity: '1',
    weight: '10px',
    height: '20px'
}
class Base extends Component {
    state = {

    }

    render() {
        return (
            <section style={style}>
                Here you go!
            </section>
        );
    }
}

export default Base;