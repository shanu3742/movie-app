import React, { lazy } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/Home/Home';
import { HomePageLayout, LazlyLoad } from './component';
import Show from './page/Show/Show.jsx';
import Starred from './page/Stared/Stared.jsx';
const UnknownPage = lazy(() =>import('./page/Unknown/Unknown.jsx'));

const MovieRoutes = () => {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route  index element={<HomePageLayout><Home/></HomePageLayout>}/>
      <Route path='/home' element={<HomePageLayout><Home/></HomePageLayout>}/>
      <Route path='/show/:id' element={
        <LazlyLoad>
            <Show />
        </LazlyLoad>
      }/>
      <Route path='/stared' element={
        <LazlyLoad>
            <Starred />
        </LazlyLoad>
      }/>
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
