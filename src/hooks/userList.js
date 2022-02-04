import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  //useState hook
    const [users, setUsers] = useState([]);

    //useEffect hook for fetching data from an api with fetchData
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios('https://jsonplaceholder.typicode.com/users');
        setUsers(result.data);
      };
      fetchData();
    }, []);

    //Sets and returns userRows with the data from the api
    const userRows = users.map((user, index) => <li key={index}>{user.name}</li>);
    return(
        userRows
    )
  }

  export {UserList};