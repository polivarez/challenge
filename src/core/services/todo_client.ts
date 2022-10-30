import { injectable } from 'inversify'
import { ClientApi, Todo } from '../entities/'
import axios from 'axios'

@injectable()
export class TodoClient implements ClientApi<Todo> {
  async getData (): Promise<Todo[]> {
    try {
      const todoget = await axios
        .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', {
        headers: { Accept: 'application/json' }
      })
        .then((response) => {
          const { data } = response
          return data
        })
      return todoget
    } catch (error) {
      return []
    }
  }

  postData (data: Todo): void {
    /* tslint:disable:no-empty */
  }

  putData (data: Todo): void {
    /* tslint:disable:no-empty */
  }

  deleteData (data: Todo): void {
    /* tslint:disable:no-empty */
  }
}
