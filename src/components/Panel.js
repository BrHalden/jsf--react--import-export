import React from 'react';

export default function Panel(props) {
    return (
        <div className="panel">
            <h2 className="panel__heading">{props.heading}</h2>
            <div className="panel__content">
                {props.children}
            </div>
        </div>
    );
}