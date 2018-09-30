import React from "react";
import { Link } from 'react-router-dom'
import { Application } from "../../entities/Application";
import { Target } from "../../entities/Target";

interface Props {
    activeApp: Application,
    activeTarget: Target | null,
    targetSelected: (target: Target) => void
};

export const TargetRows: React.StatelessComponent<Props> = ({ activeApp, activeTarget, targetSelected }) => {
    return <>{
        activeApp.targets.map(
            target =>
                <Link key={target.name} to={`/ApplicationsRegistryWeb/secure/${activeApp.name}/${target.name}`}
                    className={`w3-bar-item w3-button ${target.offline ? 
                        'w3-text-red' : ''} ${activeTarget 
                        && target.name === activeTarget.name 
                        && activeTarget.applicationName === activeApp.name ?
                        'w3-light-blue' : 'w3-white'}`}
                    onClick={() => targetSelected(target)}
                >{target.name}
                </Link>
        )}
    </>
}

