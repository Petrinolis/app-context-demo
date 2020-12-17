import React, { createContext, useContext, useMemo } from "react";
import { connect } from "react-redux";

import actions from "../store/actions";
import { bindActionCreators } from "redux";

const AppContext = createContext();

const AppContextProvider = (props) => {
  const { actions, appState, children } = props;

  const contextValue = useMemo(() => [appState, actions], [actions, appState]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

const mapStateToProps = ({ app }) => ({ appState: app });

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContextProvider);

export const useAppContext = () => useContext(AppContext);
