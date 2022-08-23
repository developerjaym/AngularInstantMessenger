export interface Message {
    id: number
    createdAt: string,
    content: string,
    user: {
      id: number,
      username: string
    }
}
