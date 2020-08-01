import { User } from './models/User';

const userCollection = User.buildUsersCollection();
userCollection.fetch();
console.log(userCollection.models);
