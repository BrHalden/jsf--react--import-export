import React from 'react';
import Image from './Image.js';
import Panel from './Panel.js';

export default function NestedComponentExample(props) {
    return (
        <Panel heading="Component with nested components">
            <Image source="https://placedog.net/500/280/random" alt="Random dog" />
        </Panel>
    );
}