import { sort } from '../utils/PropertySorter';
import { fetchApplicationsMock } from "./applicationMock";
import { fetchData } from "./fetch/fetchService"
import { Application } from "../entities/Application";



const applicationsConfigUrl: string = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '') + "/ApplicationRegistryWeb/rest/registry";

let applicationsCached: Application[] = [];

export function findApplications(onSuccess: (applications: Application[]) => void) {
    if (applicationsCached && applicationsCached.length) {
        onSuccess(applicationsCached);
    } else {
        fetchData(applicationsConfigUrl, json => { applicationsCached = sort(json, 'name'); onSuccess(applicationsCached) }, fetchApplicationsMock);
    }
}


export function findUrl(appName: string, targetName: string, onSuccess: (url: string) => void) {
    return findApplications(applications => processUrl(appName, targetName, applications, onSuccess));
}

function processUrl(appName: string, targetName: string, applications: Application[], onSuccess: (url: string) => void): void {
    for (const application of applications) {
        if (application.name === appName) {
            for (const target of application.targets) {
                if (target.name === targetName) {
                    onSuccess(target.url);
                }
            }
        }
    }
}


