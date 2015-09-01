// Packages import
import React from 'react';
import Router, {Route} from 'react-router';
// Components import
import Dashboard from './components/DashboardComponents/Dashboard.react';
import Login from './components/LoginComponents/Login.react';
import PasswordReset from './components/LoginComponents/PasswordReset.react';
import MyProfile from './components/MyProfile/MyProfile.react';
import Users from './components/UsersComponents/Users.react';
import AddNewUser from './components/UsersComponents/AddNewUser.react';
import UserProfile from './components/UsersComponents/UserProfile.react';
import Dealers from './components/DealersComponents/Dealers.react';
import Artists from './components/ArtistsComponents/Artists.react';
import newDealer from './components/DealersComponents/newDealer.react';
import newArtist from './components/ArtistsComponents/newArtist.react';
// Utils import
import RouterContainer from './utils/RouterContainer';
// Actions import
import LoginActions from './actions/LoginActions';

const routes = (
  <Route handler={Dashboard}>
    <Route name="myprofile" handler={MyProfile}></Route>
    <Route name="users" handler={Users}></Route>
    <Route name="userProfile" path="user/:id" handler={UserProfile}></Route>
    <Route name="addNewUser" path="/users/addNew" handler={AddNewUser}></Route>
    <Route name="dealers" handler={Dealers}></Route>
    <Route name="newDealer" handler={newDealer}></Route>
    <Route name="artists" handler={Artists}></Route>
    <Route name="newArtist" handler={newArtist}></Route>
    <Route name="login" handler={Login}></Route>
    <Route name="passwordReset" handler={PasswordReset}></Route>
  </Route>
);

const router = Router.create({routes});
RouterContainer.set(router);

let accessToken = localStorage.getItem('accessToken');
if (accessToken) {
  LoginActions.loginUser(accessToken);
}

router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('dashboard'));
});
