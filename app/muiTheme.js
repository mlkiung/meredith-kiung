import React from 'react';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

const muiTheme = getMuiTheme({
  palette: {
    
  },
  appBar: {
    color: palette.primary1Color,
    textColor: palette.alternateTextColor,
    height: spacing.desktopKeylineIncrement,
    titleFontWeight: typography.fontWeightNormal,
    padding: spacing.desktopGutter
  },
  
})