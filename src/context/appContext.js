import React, { createContext, useContext, useMemo } from 'react';
import { connect } from 'react-redux';

import { increment, decrement }  from '../store/appState';
import { bindActionCreators } from 'redux';

const AppContext = createContext();

const AppContextProvider = props => {
    const { increment, decrement, appState, children } = props;


    const appApi = useMemo(
        () => ({
            increment,
            decrement
        }),
        [increment, decrement]
    );

    const contextValue = useMemo(() => [appState, appApi], [appApi, appState]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

const mapStateToProps = ({ app }) => ({ appState: app });
// setGridLayoutOption: (data) => dispatch(actions.setGridLayoutOption(data))

const mapDispatchToProps = dispatch => ({
    increment: bindActionCreators(increment, dispatch),
    decrement:   bindActionCreators(decrement, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContextProvider);

export const useAppContext = () => useContext(AppContext);
