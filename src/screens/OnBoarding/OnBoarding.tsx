import React, { FC } from 'react';
import { useAuth } from '../../hooks';
import { withRouter } from 'react-router';
import { History } from 'history';
import routes from '../../utils/routes';

interface NavBarProps {
  history: History;
}

const OnBoarding: FC<NavBarProps> = ({ history }) => {
  const { token } = useAuth();
  console.log(token);

  if (token !== '') {
    history.push(routes.catalog);
  }

  return <div>asdfasdfasdf</div>;
};

export default withRouter(OnBoarding);
