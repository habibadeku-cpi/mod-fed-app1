import React, { useEffect } from 'react';
import { inject, unmount } from 'app2/appInjector';


const parentElementId = 'parent';

const Remote1 = () => {
    useEffect(() => {
        inject(parentElementId);
        return () => unmount(parentElementId);
    }, []);

    return (
      <div id={parentElementId}></div>
    )
};
  
export default Remote1;