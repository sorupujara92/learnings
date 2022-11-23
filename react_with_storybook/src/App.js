import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import theme from './utils/theme/theme';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            {/* <Route path="/login" component={Login} /> */}
          </Router>
        </div>

      </ThemeProvider>
  );
}

export default App;
