import { Application } from "../../../entities/Application";

const applications: Application[] = [
    {
        name: 'MEV',
        title: 'MEV WebApp',
        targets: [
            {
                name: 'ex092vm',
                url: 'http://ex092vm.ad49.dir:28082/MEV.WebApp/rest/monitoring'
            },
            {
                name: 'px092vm',
                url: 'http://px092vm.ad49.dir:8080/MEV.WebApp/rest/monitoring'
            }
        ]
    },
    {
        name: 'JobReport',
        title: 'JobReport',
        targets: [
            {
                name: 'ex091vm',
                url: 'http://ex091vm.ad49.dir:8080/JobReport/rest/monitoring'
            },
            {
                name: 'ex092vm',
                url: 'http://ex092vm.ad49.dir:8080/JobReport/rest/monitoring'
            },
            {
                name: 'ex093vm',
                url: 'http://ex093vm.ad49.dir:8080/JobReport/rest/monitoring'
            },
            {
                name: 'tx092vm',
                url: 'http://tx092vm.ad49.dir:8080/JobReport/rest/monitoring'
            },
            {
                name: 'wx092vm',
                url: 'http://wx092vm.ad49.dir:8080/JobReport/rest/monitoring'
            },
            {
                name: 'px092vm',
                url: 'http://px092vm.ad49.dir:8080/JobReport/rest/monitoring'
            }
        ]
    },
    {
        name: 'JobRegistry',
        title: 'JobRegistry',
        targets: [
        ]
    }

];

export const fetchMockData = (url: string): Application[] => {
    return applications;
}




