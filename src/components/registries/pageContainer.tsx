import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchRegistries } from './actions/fetchRegistries';
import { selectRegistry } from './actions/selectRegistry';
import { clearComparisonTarget } from '../common/actions/clearComparisonTarget';
import { Registries } from './Registries';
import { Target } from "../../entities/Target";
import { getSidebarWidth } from "../../utils/configUtils";
import { arrayFind } from "../../utils/arrayUtils";

const mapStateToProps = (state: State) => ({
    activeTargetParentApp: state.activeTarget ? arrayFind(state.apps, app => !!state.activeTarget && app.name === state.activeTarget.applicationName) : undefined,
    activeTarget: state.activeTarget,
    activeRegistryIndex: state.activeRegistry ? state.activeRegistry.index : 0,
    registriesData: state.registryCollection,
    sideWidth: getSidebarWidth(state.configProperties)
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchRegistries: (target: Target) => dispatch(fetchRegistries(target)),
    registrySelected: (selectedIndex: number) => {dispatch(clearComparisonTarget()); dispatch(selectRegistry(selectedIndex));}
});

export const RegistriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registries);