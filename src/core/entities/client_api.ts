export interface ClientApi<T> {
  getData: () => Promise<T[]>
  postData: (data: T) => void
  putData: (data: T) => void
  deleteData: (data: T) => void

}
