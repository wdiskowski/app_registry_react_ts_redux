import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchRegistries } from './actions/fetchRegistries';
import { selectRegistry } from './actions/selectRegistry';
import { Registries } from './Registries';
import { Target } from "../../entities/Target";
import { getSidebarWidth } from "../../utils/configUtils";

const mapStateToProps = (state: State) => ({
    activeApp: state.activeApp,
    activeTarget: state.activeTarget,
    activeRegistryIndex: state.activeRegistry ? state.activeRegistry.index : 0,
    registriesData: state.registryCollection,
    sideWidth: getSidebarWidth(state.configProperties)
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchRegistries: (target: Target) => dispatch(fetchRegistries(target)),
    registrySelected: (selectedIndex: number) => dispatch(selectRegistry(selectedIndex))
});

export const RegistriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registries);