import React from "react";
import App from "./App";
import "./index.css";
import { createBrowserHistory } from "history";
import { createRoot, hydrateRoot, Root } from "react-dom/client";
import { History } from "history";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { Router } from "react-router-dom";
import { store } from "./store";
import { useLayoutEffect, useState } from "react";

export const history = createBrowserHistory({ window });

export interface BrowserRouterProps {
  basename?: string;
  children?: ReactNode;
  history: History;
}
function HistoryRouter({ basename, children, history }: BrowserRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
}

const rootElement = document.getElementById("root");
const DOM = () => (
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);

let root: Root;
if (rootElement?.hasChildNodes()) {
  root = hydrateRoot(rootElement, <DOM />);
} else {
  root = createRoot(rootElement!);
  root.render(<DOM />);
}
