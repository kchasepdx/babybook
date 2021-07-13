import "./App.css";
import Main from "./Main";
import { AuthProvider } from "/Users/kristenchase/baby-book/src/contexts/AuthContext.js";

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
