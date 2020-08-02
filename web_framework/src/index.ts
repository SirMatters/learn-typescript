import { UserForm } from './views/UserForm';
import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

let user = User.buildUser({ name: 'Max', age: 20 });
let root = document.getElementById('root');
if (!root) {
  throw new Error('No root element found');
}
let userEdit = new UserEdit(root, user);
userEdit.render();
console.log(userEdit);
