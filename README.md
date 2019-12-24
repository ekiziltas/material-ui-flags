material-ui-flags
=========================

Library with country flag icons for [Material-UI](http://www.material-ui.com/#/). 
## Installation

```shell
  npm install material-ui-flags --save
```

## Versions

For React 0.14 and Material-UI 0.14 please use version 2.
For React 15 and Material-UI 0.15 please use version 3 and above.

## Usage

```javascript
import React from 'react';
import IconButton from 'material-ui/lib/icon-button';

import {
  Icon_Flag_TR,
  Icon_Flag_DE,
  Icon_Flag_US
} from 'material-ui-flags';

class MyComponent extends React.Component
{
  render( )
  {
    return(
      <div>
        <IconButton><Icon_Flag_TR /></IconButton>
        <IconButton><Icon_Flag_DE /></IconButton>
        <IconButton><Icon_Flag_US /></IconButton>
      </div>
    );
  }
}

```
