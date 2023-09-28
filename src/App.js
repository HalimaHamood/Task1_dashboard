import React from 'react';
import { Admin, Resource} from "react-admin";
import restProvider from 'ra-data-simple-rest';
import { UserList, UserEdit, UserCreate} from './components/Users';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StudentRepo from './components/StudentRepo';
 
 
function App() {
  return (
   
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Admin dataProvider={restProvider('http://localhost:3000')}>
        <Resource
          name="students"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
      </Admin>} />
      <Route path="/users/:username/repos" element={<StudentRepo />} />
    </Routes>
  </BrowserRouter>

  );
}
export default App;