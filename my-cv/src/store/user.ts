import type { IUserState, UserAction } from '../types/user';

const initialState: IUserState = {
  name: 'Jane Doe',
  profession: 'Frontend Developer',
  location: 'City, Country',
  nationality: 'Nationality',
  email: 'janedoe@email.com',
  phone: '+000 000 000 000',
  github: 'https://github.com/janedoe',
  linkedin: 'https://linkedin.com/in/janedoe',
  maritalStatus: 'Single',
  birthday: new Date('1990-01-01'),
};

export const userReducer = (
  state: IUserState = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    default:
      return state;
  }
};
