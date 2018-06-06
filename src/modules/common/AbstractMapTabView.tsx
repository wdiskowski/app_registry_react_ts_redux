import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MapExposure from './MapExposure';
import { NamedMap } from './entities/NamedMap';
import { MapEntry } from './entities/MapEntry';
import { sort } from '../../utils/PropertySorter';

interface Props {
    appId: string,
    targetId: string,
    url: string
};

interface State {
    namedMaps: NamedMap[];
    appId: string,
    targetId: string,
    url: string
}


export default abstract class AbstractMapTabView extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            namedMaps: [{ entries: [] }],
            appId: this.props.appId,
            targetId: this.props.targetId,
            url: this.props.url
        }
    }

    render() {
        const tabs = this.state.namedMaps.length < 2 ? '' :
            this.state.namedMaps.map((namedMap, index) =>
                <Tab key={index}>{namedMap.name}</Tab>
            );

        const tabPanels = this.state.namedMaps.length < 2 ? '' :
            this.state.namedMaps.map((namedMap, index) =>
                <TabPanel key={index} >
                    <MapExposure mapEntries={sort(namedMap.entries, 'key')} />
                </TabPanel>
            );


        return (
            this.state.namedMaps.length < 2 ?
                <MapExposure mapEntries={this.state.namedMaps.length > 0 ? sort(this.state.namedMaps[0].entries, 'key') : []} /> :
                <Tabs selectedTabClassName={'w3-light-blue'}>
                    <TabList>
                        {tabs}
                    </TabList>
                    {tabPanels}
                </Tabs>);
    }

    componentDidMount() {
        this.loadMapsData();
    }

    componentDidUpdate() {
        if (this.state.url !== this.props.url) {
            this.setState({ url: this.props.url });
            this.loadMapsData();
        }
    }

    isNamedMap(data: Array<MapEntry<string>> | NamedMap | NamedMap[]): data is NamedMap {
        return !Array.isArray(data);
    }

    isNamedMapArray(data: Array<MapEntry<string>> | NamedMap | NamedMap[]): data is NamedMap[] {
        return Array.isArray(data) && !!data.length && 'entries' in data[0];
    }

    abstract findData(url: string, onSuccess: (json: Array<MapEntry<string>> | NamedMap | NamedMap[]) => void): void;

    loadMapsData(): void {
        this.findData(this.props.url,
            data => this.setState({
                namedMaps: this.isNamedMap(data) ? [data] :
                    (this.isNamedMapArray(data) ? data : [{ entries: data }])
            }))
    }

}