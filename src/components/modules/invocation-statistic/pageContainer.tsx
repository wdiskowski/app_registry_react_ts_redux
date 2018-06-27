import { connect } from 'react-redux';
import { State } from '../../../reducers';
import { fetchData } from './actions/fetchData';
import { InterfaceInfos } from './InterfaceInfos';
import { Target } from "../../../entities/Target";
import { mapGet } from "../../../utils/mapUtils";

const mapStateToProps = (state: State) => {
    const registryUrlFromMap: string | null = mapGet(state.registryCollection, 'Invocation Statistic');
    return ({
        registryUrl: registryUrlFromMap ? registryUrlFromMap : '',
        activeTarget: state.activeTarget,
        activeRegistry: state.activeRegistry
    });
};


const mapDispatchToProps = (dispatch: any) => ({
    fetchData: (target: Target, registryUrl: string) => dispatch(fetchData(target, registryUrl))
});

export const InvocationStatisticContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InterfaceInfos);