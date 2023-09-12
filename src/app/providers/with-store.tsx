import React from "react";
import {store} from "../../shared/store/store";
import {Provider} from "react-redux";

export const withStore = (component: () => React.ReactNode) => {
    const Store = () => (
        <Provider store={store}>
            {component()}
        </Provider>
    );
    return Store
}