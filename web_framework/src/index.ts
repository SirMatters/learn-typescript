import axios from 'axios';
import { User } from './models/User';

let user = new User({ id: 1 });
user.fetch();

setTimeout(() => {
  console.log(user);
}, 1000);
