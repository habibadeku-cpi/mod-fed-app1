import React, { useEffect } from 'react';
import { inject, unmount, appName } from 'app2/appInjector';
import { useNavigate } from "react-router-dom";


const parentElementId = appName;

const Remote1 = () => {
   const navigate = useNavigate();

    useEffect(() => {
        inject(parentElementId);
        subscribeToEvent(appName, eventHandler);
        return () => unmount(parentElementId);
    }, []);


    const eventHandler =(ev)=> {
      console.log(`event from ${appName} ${ev.detail}`);
      navigateToRoute(ev.detail);
    }
    
    const navigateToRoute = (route) => {
      navigate(route);
    }

    return (
      <div id={parentElementId}></div>
    )

};
  
export default Remote1;

const subscribeToEvent = (eventName, listener) => {
  unsubscribeFromEvent(eventName, listener);
  document.addEventListener(eventName, listener);
}

const unsubscribeFromEvent = (eventName, listener) => {
  document.removeEventListener(eventName, listener);
}