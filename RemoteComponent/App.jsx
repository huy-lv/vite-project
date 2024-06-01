import React from 'react';
import { Button } from '@mui/material';

function App({ string = "Hello, Iam test string" }) {
  return (
    <>
      <div>
        <h2>{string}</h2>
        <Button variant="contained" color="error">Testing Material UI</Button>
      </div>
      <h3>Title 3</h3>
    </>
  )
}

export default App