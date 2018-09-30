import { connect } from 'react-redux';
import { PingApplications } from './PingApplications';
import { State } from '../../reducers';
import { pingApps } from './actions/pingApps';
import { Application } from "../../entities/Application";
import { getPingIntervalSeconds } from "../../utils/configUtils";


const mapStateToProps = (state: State) => ({
    apps: state.apps,
    interval_seconds: getPingIntervalSeconds(state.configProperties)
});

const mapDispatchToProps = (dispatch: any) => ({
    pingApps: (apps: Application[]) => pingApps(apps, dispatch)
});



export const PingApplicationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PingApplications);