import { AppProvider } from "./contexts/AppContext";
import Router from "./Router";

export default function App() {
  return (
    <div >
      <AppProvider>
        <Router />
      </AppProvider>
    </div>
  );
}