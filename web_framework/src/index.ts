import axios from 'axios';
import { User } from './models/User';

let user = new User({ id: 1 });
user.fetch();

setTimeout(() => {
  console.log(user);
}, 1000);

let user2 = new User({});
user2.set({ id: 1, age: 10, name: 'test2' });
user2.save();
