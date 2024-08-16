import React, { useCallback, useEffect, useState } from 'react';
import './app.scss';
import MovieRoutes from './routes';
import { Switch } from './lib';
const DEFAULT_THEME= 'light'
function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

   // Fetch popular movies on component mount

  const onThemeChange = useCallback((e) => {
      if(e.target.checked){
        setTheme('dark')
      }
      else{
        setTheme('light')
      }
    },[])

    // React.useEffect(  () => {
    //   const fetchUser = async () => {
    //     try{
    //      const r =  await fetch('https://www.omdbapi.com/?s=india&apikey=86360b2a');
    //      let k = await r.json()
    //      console.log(k)
    //     }catch(e){
    //       console.log(e)
    //     }
    //   }

    //   fetchUser()

    // },[])
  return (
    <div className={`${theme} app`}>
        <Switch onToggle={onThemeChange} />
        <MovieRoutes></MovieRoutes>
    </div>
  );
}

export default App;
