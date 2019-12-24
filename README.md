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

For more information:

For list of icons refer to [the src folder](src/).

* [Live demo](http://universal-relay-boilerplate.herokuapp.com/mui/icons_country_flags).

* [Source Code](https://github.com/codefoundries/UniversalRelayBoilerplate/blob/master/units/starter-kit-example-mui/webapp/components/MUI_Icons_CountryFlags.jsx) of live demo.


## Contributing

All existing icons are modified versions of icons from [lipis/flag-icon-css](https://github.com/lipis/flag-icon-css/tree/master/flags/4x3). An eventual goal of the project would be to have all of those SVG files converted to Material-UI icons.

In lieu of a formal styleguide, take care to maintain the existing coding style.
Check out [existing issues and help wanted](https://github.com/codefoundries/material-ui-country-flags/issues).


## Release History

[Releases on Github project](https://github.com/codefoundries/material-ui-country-flags/releases/).
