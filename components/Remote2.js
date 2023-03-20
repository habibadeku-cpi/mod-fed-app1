import React, { useEffect } from 'react';
import { inject, unmount, appName } from 'app3/appInjector';


const parentElementId = appName;

const Remote2 = () => {
    useEffect(() => {
        inject(parentElementId);
        subscribeToEvent(appName, eventHandler);
        return () => unmount(parentElementId);
    }, []);

    return (
      <div id={parentElementId}></div>
    )
};
  
export default Remote2;

const eventHandler =(ev)=> {
  console.log(`event from ${appName} ${ev.detail}`);
}

const subscribeToEvent = (eventName, listener) => {
  unsubscribeFromEvent(eventName, listener);
  document.addEventListener(eventName, listener);
}

const unsubscribeFromEvent = (eventName, listener) => {
  document.removeEventListener(eventName, listener);
}