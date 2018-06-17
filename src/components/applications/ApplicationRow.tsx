import React from "react";
import { TargetRows } from './TargetRows'
import { Application } from "../../entities/Application";
import { Target } from "../../entities/Target";


interface Props {
    app: Application,
    activeApp: Application | null,
    activeTarget: Target | null,
    appSelected: (app: Application) => void,
    targetSelected: (target: Target) => void
};

export const ApplicationRow: React.StatelessComponent<Props> = ({ app, activeApp, activeTarget, appSelected, targetSelected }) => {
    return (
        <span key={app.name}>
            <button className={`w3-button w3-block w3-left-align ${activeApp && app.name === activeApp.name ? 'w3-gray' : ''}`}
                onClick={() => appSelected(app)}>
                {app.name}
                {app.targets && !!app.targets.length &&
                    <span className={`ui-accordion-header-icon ui-icon ${activeApp && app.name === activeApp.name ?
                        'ui-icon-triangle-1-s' : 'ui-icon-triangle-1-e'}`} />
                }
            </button>
            {activeApp && app.name === activeApp.name && !!app.targets &&
                <TargetRows activeApp={app} activeTarget={activeTarget} targetSelected={targetSelected} />
            }
        </span>
    )
}

