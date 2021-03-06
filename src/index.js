import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./Redux/RootReducers";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";

import TagManager from "react-gtm-module";
import { gtmId, trackingId1, trackingId2 } from "./Aux/trackingIDs";

const history = createBrowserHistory();

ReactGA.initialize([
    {
        trackingId: trackingId1,
        gaOptions: { name: "webTracker" }
    },
    { trackingId: trackingId2 }
]);
history.listen(location => {
    ReactGA.set({
        page: location.pathname
    });
    ReactGA.pageview(location.pathname, "webTracker");
});

const tagManagerArgs = {
    gtmId: gtmId
};
TagManager.initialize(tagManagerArgs);

const theStore = createStore(
    RootReducer,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={ theStore }>
        <Router history={ history }>
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);
