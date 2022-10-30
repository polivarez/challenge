import { injectable } from 'inversify'
import { ClientApi } from '../interfaces/client_api'
import { Todo } from '../interfaces/todo'
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
      console.log(error)
      return null
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
