import React from 'react';

import { UseFormInput } from './hooks/useFormInput.js';
import { UseDocumentTitle } from './hooks/useDocumentTitle.js';
import { UseWindowResolution } from "./hooks/useWindowResolution.js";
import { UserList } from './hooks/userList.js';

export default function HookDemo() {

  //calls the hooks in useFormInput.js to set the name/location (with a default value)
  const name = UseFormInput("User");
  const location = UseFormInput("Somewhere");
  //calls the hooks in useWindowResolution.js to set the window resolution that shows on screen
  const resolution = UseWindowResolution();
  //calls the hook in useDocumentTitle.js to set the title for the page
  UseDocumentTitle(name.value + " from " + location.value);
  //calls the hooks in userList.js to set the list of users on the page
  const userRows = UserList();
  //----------------------------------------------------------------
  return (
    <section>
      <form autoComplete = "off">
        <section>
          <label htmlFor = "name">Name </label>
          <input {...name} />  
        </section>
        <section>
          <label htmlFor = "location">Location </label>
          <input {...location} />  
        </section>
      </form>
      <p>
      Hello {name.value} from {location.value}
      </p>
      <h3>
        {resolution.width} x {resolution.height}
      </h3>
      <div className = "component">
        <h1>List of Users</h1>
        <ul>{userRows}</ul>
        <button>Reload</button>
      </div>
    </section>
  );
}