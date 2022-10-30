import 'reflect-metadata'

import { Container } from 'inversify'
import { ClientApi, Api, Todo } from '../core/entities/'
import { TodoClient, ApiManager } from '../core/services/'

import SERVICE_IDENTIFIER from '../constants/identifiers'

const container = new Container()

container.bind<ClientApi<Todo>>(SERVICE_IDENTIFIER.CLIENTAPI).to(TodoClient)
container.bind<Api<Todo>>(SERVICE_IDENTIFIER.API).to(ApiManager)

export default container
