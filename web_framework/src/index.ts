import { User } from './models/User';

const user = new User({ id: 1 });
user.on('change', () => {
  console.log('The user data was changed');
});
user.on('save', () => {
  console.log('The user data was saved to DB');
});
user.fetch();
setTimeout(() => {
  user.set({ name: 'ChangedTest1' });
  user.save();
}, 1000);
console.log(user);
