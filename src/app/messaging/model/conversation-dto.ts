import { UserDTO } from './user-dto';

export interface ConversationDTO {
  id: number;
  users: UserDTO[];
  name: string;
}
