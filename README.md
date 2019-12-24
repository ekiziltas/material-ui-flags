material-ui-country-flags
=========================

Library with country flag icons for [Material-UI](http://www.material-ui.com/#/). Initially created for use in [Universal Relay Boilerplate](https://github.com/codefoundries/UniversalRelayBoilerplate) by [Code Foundries](http://codefoundries.com/).

## Installation

```shell
  npm install material-ui-country-flags --save
```

## Versions

For React 0.14 and Material-UI 0.14 please use version 2.
For React 15 and Material-UI 0.15 please use version 3 and above.

## Usage

```javascript
import React from 'react';
import IconButton from 'material-ui/lib/icon-button';

import {
  Icon_Flag_BG,
  Icon_Flag_US
} from 'material-ui-country-flags';

class MyComponent extends React.Component
{
  render( )
  {
    return(
      <div>
        <IconButton><Icon_Flag_BG /></IconButton>
        <IconButton><Icon_Flag_US /></IconButton>
      </div>
    );
  }
}

```
