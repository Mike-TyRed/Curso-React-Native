import React from "react";
import {Button} from '@material-ui/core/'

function App() {
  return (
    // Tipos de botones
    <div >
      <Button size="small">
        Default
      </Button>
      <Button color="primary" variant='outlined' href='https://www.google.com/' size="medium">
        Primario
      </Button>
      <Button color="secondary" variant='contained' size="large">
        Secundario
      </Button>
    </div>
  );
}

export default App;
