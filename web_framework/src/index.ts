import { Collection } from './models/Collection';

const rootUrl = 'http://localhost:3000/users';
const userCollection = new Collection(rootUrl);
userCollection.fetch();
console.log(userCollection.models);
