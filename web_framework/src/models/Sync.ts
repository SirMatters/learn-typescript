import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise<T> {
    const id = data.id;
    if (id) {
      return axios.post(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}
