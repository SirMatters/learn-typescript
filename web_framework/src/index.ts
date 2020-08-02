import { User } from './models/User';
import { UserList } from './views/UserList';

let usersCollection = User.buildUsersCollection();

usersCollection.on('fetch', () => {
  let root = document.querySelector('#root');
  if (root) {
    new UserList(usersCollection, root).render();
  }
});
usersCollection.fetch();
