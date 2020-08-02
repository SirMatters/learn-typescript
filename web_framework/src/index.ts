import { UserForm } from './views/UserForm';
import { User } from './models/User';

let user = User.buildUser({ name: 'Max', age: 20 });
let root = document.getElementById('root');
if (!root) {
  throw new Error('No root element found');
}
let form = new UserForm(root, user);
form.render();
