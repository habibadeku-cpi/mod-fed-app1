import React, { useEffect } from 'react';
import { inject, unmount } from 'app3/appInjector';


const parentElementId = 'parent2';

const Remote2 = () => {
    useEffect(() => {
        inject(parentElementId);
        return () => unmount(parentElementId);
    }, []);

    return (
      <div id={parentElementId}></div>
    )
};
  
export default Remote2;