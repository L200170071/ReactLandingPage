import React from 'react';

function Introduction(props) {
    return (
        <div>
        <h1>INTRODUCTION</h1>
        <p>
            Halo nama saya: {props.name}
        </p>
        </div>
    );
}

export default Introduction; 
