import { connect } from 'react-redux';
import { State } from '../../../reducers';
import { fetchData } from './actions/fetchData';
import { MapsExposure } from '../common/MapsExposure';
import { Target } from "../../../entities/Target";
import { RegistryCollection } from "../../../entities/RegistryCollection";

const mapStateToProps = (state: State) => ({
    registryCollection: state.registryCollection,
    activeTarget: state.activeTarget,
    activeRegistry: state.activeRegistry
});

const mapDispatchToProps = (dispatch: any) => ({
    fetchData: (target: Target, registries: RegistryCollection) => dispatch(fetchData(target, registries))
});

export const ReleaseInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MapsExposure);