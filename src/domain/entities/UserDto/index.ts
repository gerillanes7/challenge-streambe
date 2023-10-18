export interface UserDTO {
  users: UserData[];
}

export interface UserData {
  contactId: number;
  name: string;
  surnames: string;
  birthDate: string;
  gender: string;
  photo: string | null;
  phone: string;
  profesion: string;
  email: string;
}
