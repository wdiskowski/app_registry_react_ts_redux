import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchApps } from './actions/fetchApps';
import { selectApp } from './actions/selectApp';
import { selectAppTarget } from './actions/selectAppTarget';
import { selectRegistry } from '../registries/actions/selectRegistry';
import { clearRegistries } from '../registries/actions/clearRegistries';
import { Applications } from './Applications';
import { Application } from "../../entities/Application";
import { Target } from "../../entities/Target";

const mapStateToProps = (state: State) => ({
    apps: state.apps,
    activeApp: state.activeApp,
    activeTarget: state.activeTarget
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchApps: () => dispatch(fetchApps()),
    appSelected: (app: Application) => dispatch(selectApp(app)),
    targetSelected: (target: Target) => {dispatch(clearRegistries()); dispatch(selectRegistry(0)); dispatch(selectAppTarget(target));}
});

export const ApplicationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Applications);