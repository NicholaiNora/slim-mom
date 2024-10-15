import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Homepage } from 'pages/Home/Homepage';
import { DiaryPage } from 'pages/Diary/DiaryPage';
import { CalculatorPage } from 'pages/CalculatorPageView/CalculatorPageView';
import { LoginPage } from 'pages/Login/LoginPage';
import { RegistrationPage } from 'pages/Registration/RegistrationPage';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';

function App() {
  return (
    <Routes>
		<Route>
			<Route path='/' element={ <SharedLayout />}>
				<Route path='/' index element={ 
					<RestrictedRoute 
						redirectTo='/calculator'
						component={ Homepage }
					/>
				} />
				<Route path='/diary' element={
					<PrivateRoute 
						redirectTo='/login'
						component={ DiaryPage }
					/> 
				} />
				<Route path='/calculator' element={ 
					<PrivateRoute
						redirectTo='/login'
						component={ CalculatorPage }
					/>
				} />
				<Route path='/login' element={
					 <RestrictedRoute 
					 	redirectTo='/diary'
						component={ LoginPage }
					 />
				} />
				<Route path='/registration' element={ <RegistrationPage />} />
				<Route path='*' element={ <PageNotFound />} />
			</Route>
		</Route>
	 </Routes>
    
  );
}

export default App;
