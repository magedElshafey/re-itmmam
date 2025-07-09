export type Response<T=unknown> = {
    data: T,
    message: string,
    statue: boolean
}