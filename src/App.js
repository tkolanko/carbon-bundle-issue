import React from 'react';
import Add from '@carbon/icons-react/es/Add'
import  Subtract from "@carbon/icons-react/es/Subtract";
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
