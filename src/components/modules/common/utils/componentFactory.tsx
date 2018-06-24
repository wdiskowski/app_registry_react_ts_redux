import React from 'react';
import { ReleaseInfoContainer } from '../../release-info';
import { ConfigInfoContainer } from '../../config-info';

export const modulExists: (modulName: string) => boolean = (modulName) => {
    return modulName === 'Release Info' || modulName === 'Config Info' ? true : false;
}

export const getComponent: (modulName: string) => JSX.Element | string = (modulName) => {
    return modulName === 'Release Info' ? <ReleaseInfoContainer /> : modulName === 'Config Info' ? <ConfigInfoContainer /> : '';

    // return React.createFactory( require('./ExampleComponent')({}) );
}