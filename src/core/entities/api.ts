export interface Api<T> {
  fetchData: () => Promise<T[]>
}
