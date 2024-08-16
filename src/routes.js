import React, { lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/Home/Home';
import { HomePageLayout, LazlyLoad } from './component';
const UnknownPage = lazy(() =>import('./page/Unknown/Unknown.jsx'));

const MovieRoutes = () => {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route  index element={<HomePageLayout><Home/></HomePageLayout>}/>
      <Route path='/home' element={<HomePageLayout><Home/></HomePageLayout>}/>
      <Route path='*' element={
        <LazlyLoad>
            <UnknownPage />
        </LazlyLoad>
    }/>
    </Routes>
    
    
    </BrowserRouter>
  
  )
}

export default MovieRoutes
