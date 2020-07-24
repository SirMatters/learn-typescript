import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  eventing: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }
  save(): void {
    if (this.get('id')) {
      axios.post(`http://localhost:3000/users/${this.get('id')}`, {
        ...this.data,
      });
    } else {
      axios.post(`http://localhost:3000/users`, {
        ...this.data,
      });
    }
  }
}
