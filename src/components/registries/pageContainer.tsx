import { connect } from 'react-redux';
import { State } from '../../reducers';
import { fetchRegistries } from './actions/fetchRegistries';
import { selectRegistry } from './actions/selectRegistry';
import { Registries } from './Registries';
import { Target } from "../../entities/Target";

const mapStateToProps = (state: State) => ({
    activeApp: state.activeApp,
    activeTarget: state.activeTarget,
    activeRegistryIndex: state.activeRegistry ? state.activeRegistry.index : 0,
    registriesData: state.registryCollection
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchRegistries: (target: Target) => dispatch(fetchRegistries(target)),
    registrySelected: (selectedIndex: number) => dispatch(selectRegistry(selectedIndex))
});

export const RegistriesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Registries);