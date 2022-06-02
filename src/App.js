import React from 'react';
import {Add, Subtract} from '@carbon/react/icons'
import {IconButton} from '@carbon/react'


export const App = () => {
  return (
    <div>
      <IconButton kind="ghost" label="Add">
        <Add />
      </IconButton>
      <IconButton kind="ghost" label="Subtract">
        <Subtract />
      </IconButton>
    </div>
  );
}


export default App;
