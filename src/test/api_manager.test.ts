import 'reflect-metadata'

import { Todo, Api } from '../interfaces/'
import container from '../config/ioc_config'
import SERVICE_IDENTIFIER from '../constants/identifiers'

describe('Api Manager Injection TodoClient ', () => {
  test('It should respond injected object', async () => {
    const apiManager: Api<Todo> = container.get(SERVICE_IDENTIFIER.API)
    const dataProces = await apiManager.fetchData()
    expect(dataProces.length).toBeGreaterThan(0)
  })
})
