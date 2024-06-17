import React from 'react';
import AuthLayount from './AuthLayount';
import HomeLayount from './HomeLayount';
import { useSelector } from 'react-redux';

const MainLayount = (props) => {
  const { loggedIn } = useSelector(state => state.auth);
  return (

    <>
      {
        loggedIn ? (
          <AuthLayount>{props.children}</AuthLayount>
        ) : (
          <HomeLayount>{props.children}</HomeLayount>
        )}
    </>
  );
};

export default MainLayount;