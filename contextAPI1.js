import React, { createContext, useContext } from 'react';

const ThemeContext = ________;

function ThemedButton() {
  const theme = ________;
  return <button style={{ background: theme.background, color: theme.foreground }}>
    I am styled by theme context!
  </button>;
}
