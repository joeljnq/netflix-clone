import { ViewPreferenceProvider } from "../context/ViewPreferenceContext"
import Router from "../router/router"


function App() {

  return (
    <>
    <ViewPreferenceProvider >
    <Router />
    </ViewPreferenceProvider>
    </>
  )
}

export default App
