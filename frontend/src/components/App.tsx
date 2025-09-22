import { UserIdProvider } from "../context/userId";
import { ViewPreferenceProvider } from "../context/ViewPreferenceContext";
import Router from "../router/router";

function App() {
  return (
    <>
      <ViewPreferenceProvider>
        <UserIdProvider>
          <Router />
        </UserIdProvider>
      </ViewPreferenceProvider>
    </>
  );
}

export default App;
