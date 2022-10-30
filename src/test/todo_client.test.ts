import 'reflect-metadata'

import { ClientApi, Todo } from '../core/entities/'
import container from '../config/ioc_config'
import SERVICE_IDENTIFIER from '../constants/identifiers'

describe('TodoClientGet getData() ', () => {
  test('It should respond array of todo', async () => {
    const todoClient: ClientApi<Todo> = container.get(SERVICE_IDENTIFIER.CLIENTAPI)
    const dataProces = await todoClient.getData()
    expect(dataProces.length).toBeGreaterThan(0)
  })
})
