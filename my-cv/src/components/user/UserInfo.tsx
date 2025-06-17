import React, { useEffect } from 'react';
import User from './User';
import ContactInfo from './ContactInfo';

import { fetchUser } from '../../store/actions/user';
import { useAppDispatch } from '../../utils/hooks/redux';

const UserInfo: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <User />
      <ContactInfo />
    </>
  );
};

export default UserInfo;
