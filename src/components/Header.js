import React from 'react';

const headerStyles = {
  textAlign: 'center',
  borderBottom: '1px solid #ccc',
  paddingBottom: '10px',
  marginBottom: '30px',
  borderColor: '#000',
  color: '#000',
  borderRadius: '0 0 15px 15px',
  backgroundColor: 'white',
}

export const Header = () => { return <h1 style={ headerStyles }>Chronometers App</h1> };
