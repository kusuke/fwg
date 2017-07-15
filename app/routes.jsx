import React from 'react';
import { Route } from 'react-router';
import { fetchMemberData } from './fetch-data';
import TopContainer from './components/organisms/contents/Top';
import RootLayout from './components/templates/Root';

export default () => {
  return (
    <Route component={RootLayout}>
      <Route path="/" component={TopContainer} fetchData={fetchMemberData} />
    </Route>
  );
};
