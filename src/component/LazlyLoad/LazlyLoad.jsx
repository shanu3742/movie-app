import React, { memo, Suspense } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
const LazlyLoad = ({children}) => {
  return (
    <Suspense  fallback={<LoadingScreen />}>
             {children}
    </Suspense>
  )
}
export default memo(LazlyLoad)
