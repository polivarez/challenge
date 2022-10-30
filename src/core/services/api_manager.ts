import { inject, injectable } from 'inversify'
import { Api, Todo, ClientApi } from '../entities/'
import SERVICE_IDENTIFIER from '../../constants/identifiers'

@injectable()
export class ApiManager implements Api<Todo> {
  public clientApi: ClientApi<Todo>
  public constructor (@inject(SERVICE_IDENTIFIER.CLIENTAPI) clientApi: ClientApi<Todo>) {
    this.clientApi = clientApi
  }

  async fetchData (): Promise<Todo[]> {
    return await this.clientApi.getData().then((resource) => {
      return resource
    })
  }
}
