import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import PageNotFound from './components/PageNotFound';
import { Add, Edit, User, EditUserPage, UserProfilePage } from './routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/add' element={<Add />} />
      <Route path='/user' element={<User />}>
        <Route path=':userProfileID' element={<UserProfilePage />} />
      </Route>
      <Route path='/edit' element={<Edit />}>
        <Route path=':userProfileID' element={<EditUserPage />} />
      </Route>
      <Route
        path='*'
        element={
          <>
            <Header />
            <PageNotFound />
          </>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
