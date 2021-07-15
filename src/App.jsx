import "./App.css";
import Main from "./Main";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </div>
  );
}

export default App;
