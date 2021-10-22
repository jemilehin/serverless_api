import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  
  return (
    <div className="App">
      <p></p>
      <Box>
        <TextField id="outlined-basic" label="Query" variant="outlined" />
      </Box>
    </div>
  );
}

export default App;
