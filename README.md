material-ui-flags
=========================

Library with country flag icons for [Material-UI](http://www.material-ui.com/#/). 
## Installation

```shell
  npm install material-ui-flags
  
  yarn add material-ui-flags
```

## Versions

For React 0.14 and Material-UI 0.14 please use version 2.
For React 15 and Material-UI 0.15 please use version 3 and above.

## Usage

```javascript
import React from 'react';
import IconButton from '@material-ui/core/IconButton';

import {
    IconFlagTR,
    IconFlagDE,
    IconFlagUS
} from 'material-ui-flags';

class MyComponent extends React.Component
{
  render( )
  {
    return(
      <div>
        <IconButton><IconFlagTR /></IconButton>
        <IconButton><IconFlagDE /></IconButton>
        <IconButton><IconFlagUS /></IconButton>
      </div>
    );
  }
}

```
