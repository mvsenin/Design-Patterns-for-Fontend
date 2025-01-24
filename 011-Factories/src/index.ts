/**
 * This script shows usage of Factory Method and Abstract Factory design
 * patterns for user account creation.
 * 
 * User info is created using Factory Method pattern.
 * 
 * User account is created via logic implemented according to Abstract Factorty
 * pattern.
 */

import { AdminAccount, RegularAccount, UserAccount } from "./AbstractFactory";
import { EnvironmentFactory } from "./Environment";
import createUser, {userInfo} from "./FactoryMethod";
import { RedTheme, Theme } from "./Theme";

// Getting UI elements
var account = document.getElementById('account-name') as HTMLButtonElement;
var btnLogin = document.getElementById('login-button') as HTMLButtonElement;
var output = document.getElementById('output') as HTMLElement;

account.onchange = (event) => {
// btnLogin.onclick = (event) => {
  var userInfo: userInfo = {name: '', password: ''};
  var userAccount: UserAccount;
  var env: EnvironmentFactory;
  var theme: Theme;

  // Define user account to be used
  switch(account.value) {
    case 'admin': {
      // Fill an Admin User info
      userInfo = {
        name: 'Super User',
        password: 'su',
        key: '#1234-ABCD'
      };
      break;
    }

    case 'customer': {
      // Fill a Customer User info
      userInfo = {
        name: 'Mr. Who',
        password: 'Password123',
        address: 'Sun Street'
      };
      break;
    }

    case 'seller': {
      // Fill a Seller User info
      userInfo = {
        name: 'Mr. X',
        password: 'xxx',
        shopAddress: 'Moon Street',
        contact_No: '123-456-7890'
      };
      break;
    }
  }

  // Check whether user info is provided
  if (userInfo.name !== '') {
    // Create user using Factory Method once user info is provided
    userInfo = createUser(account.value, userInfo);
  } else {
    // Notify about error otherwise
    output.innerHTML = 'Please select account';
  }

  if (userInfo.name === '') return;

  // Create user account either for admin or regular user
  if (account.value !== 'admin') {
    output.innerHTML = '';

    // Creating user account for regular user
    userAccount = new RegularAccount();
    
    env = userAccount.createEnvironment(output);

    theme = userAccount.createTheme();
  } else {
    output.innerHTML = 'Please give a look to browser console';

    // Creating user account for admin user
    userAccount = new AdminAccount;

    env = userAccount.createEnvironment();

    theme = userAccount.createTheme();
  }

  // Hereafter we can use user account and its elements independently
  // of the account type

  // Showing user info via log provider
  env.getLogProvider().log(JSON.stringify(userInfo));

  // Updating CSS with account's theme
  theme.updateCss('outputStyle');

  // Changing theme on the fly sor Seller user
  if (account.value === 'seller') {
    theme = userAccount.changeTheme(new RedTheme);
    theme.updateCss('outputStyle');
  }
}