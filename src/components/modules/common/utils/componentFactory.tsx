import React from 'react';

export const modulExists: (modulName: string) => boolean = (modulName) => {
    try {
        require('../../'+ modulName.toLowerCase().replace(/\s+/, "-"));
        return true;
    } catch (ex) {
        return false;
    }
}

export const getComponent: (modulName: string) => JSX.Element | string = (modulName) => {
    const components = require('../../'+ modulName.toLowerCase().replace(/\s+/, "-"));
    return React.createElement(components[modulName.replace(/\s+/, "") + 'Container'] );
}