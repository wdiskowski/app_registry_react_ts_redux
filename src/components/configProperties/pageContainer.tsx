import { connect } from 'react-redux';
import { fetchConfigProperties } from './actions/fetchConfigProperties';
import { ConfigProperties } from './ConfigProperties';

const mapDispatchToProps = (dispatch: any) => ({
    fetchConfigProperties: () => dispatch(fetchConfigProperties())
});

export const ConfigPropertiesContainer = connect(
    null,
    mapDispatchToProps,
)(ConfigProperties);