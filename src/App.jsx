import Router from "./router/Router";

import "./App.css";
import TanstackQueryProvider from "./provider/TanstackQueryProvider";

function App() {
  return (
    <TanstackQueryProvider>
      <Router />
    </TanstackQueryProvider>
  );
}

export default App;
