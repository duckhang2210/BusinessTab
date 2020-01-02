import React from 'react';
import AppNavbar from './components/AppNavbar';
import RestaurantList from './components/RestaurantList';

function App() {
  return (
    <div className='App'>
      <AppNavbar></AppNavbar>
      <RestaurantList></RestaurantList>
    </div>
  );
}

export default App;
