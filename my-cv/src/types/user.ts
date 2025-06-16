export interface IUserState {
  name: string;
  profession: string;
  location: string;
  nationality: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  maritalStatus: string;
  birthday: Date;
}

export interface UserAction {
  type: string;
}
