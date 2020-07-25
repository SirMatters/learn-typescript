import { User } from './models/User';

const user = User.buildUser({ id: 2 });
user.on('change', () => {
  console.log('The user data was changed');
});
user.on('save', () => {
  console.log('The user data was saved to DB');
});
user.fetch();
setTimeout(() => {
  user.set({ name: 'ChangedTest2' });
  user.save();
}, 1000);
console.log(user);
