import { connect } from 'react-redux';
import { State } from '../../../reducers';
import { fetchData, fetchComparisonData } from './actions/fetchData';
import { selectComparisonTarget } from '../common/data-comparison/actions/selectComparisonTarget';
import { clearComparisonData } from './actions/clearComparisonData';
import { ConfigInfos } from './ConfigInfos';
import { Target } from "../../../entities/Target";
import { mapGet } from "../../../utils/mapUtils";

const mapStateToProps = (state: State) => {
    const registryUrlFromMap: string | null = mapGet(state.registryCollection, 'Config Info');
    return ({
        registryUrl: registryUrlFromMap ? registryUrlFromMap : '',
        activeTarget: state.activeTarget,
        activeRegistry: state.activeRegistry,
        comparisonTarget: state.comparisonTarget
    });
};


const mapDispatchToProps = (dispatch: any) => ({
    fetchData: (target: Target, registryUrl: string) => dispatch(fetchData(target, registryUrl)),
    fetchComparisonData: (target: Target, registryUrl: string) => dispatch(fetchComparisonData(target, registryUrl)),
    comparisonTargetSelected: (target: Target) => {dispatch(clearComparisonData()); dispatch(selectComparisonTarget(target));}
});

export const ConfigInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigInfos);