import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import { publicRoutes } from '../routes/routes';
import { HOME_PATH } from '../utils/consts';
function AppRouter() {
  return (
    <Routes>
          {publicRoutes.map(({path, element}) =>
            <Route key={path} path={path} element={element} exact></Route>
          )}
          <Route path='*' element={<Navigate to={HOME_PATH}/>}></Route>
    </Routes>
  )
}

export default AppRouter