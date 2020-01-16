import React, { useEffect } from 'react';

import { fetchInitialItems } from '../../utils/burger-api';

const Catalog = (): React.ReactElement => {
  useEffect(() => {
    fetchInitialItems().then(res => {
      // only for now, to see the response
      console.log(res);
    });
  }, []);

  return <div>hello</div>;
};

export default Catalog;
