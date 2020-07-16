import React from 'react';

const headerStyles = {
  textAlign: 'center',
  borderBottom: '1px solid #ccc',
  paddingBottom: '10px',
  marginBottom: '30px',
  borderColor: '#fa26a0',
  color: '#fa26a0',
  borderRadius: '0 0 15px 15px'
}

export const Header = () => { return <h1 style={ headerStyles }>Timers</h1> };
