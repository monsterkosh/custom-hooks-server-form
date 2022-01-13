import React, { useState, useEffect } from 'react';
// http
import httpAxios from '../http/client_http';
// api
import USERS_API from '../api/users.api';
//hooks
import doCreate from '../hooks/create_hook';
import doDelete from '../hooks/delete_hook';
import doUpdate from '../hooks/update_hook';

const inputState = {
  email: '',
  name: '',
  role: '',
};

const roleState = ['ceo', 'cto', 'cfo'];
const usersState = [];

const updatedUser = {
  uEmail: '',
  uName: '',
  uRole: '',
};

export default function General() {
  const [inputs, setInputs] = useState(inputState);
  const [users, setUsers] = useState(usersState);
  const [roles, setRoles] = useState(roleState);
  const [update, setUpdate] = useState(updatedUser);

  useEffect(() => {
    async function fnUsers() {
      try {
        const {
          data: { payload },
        } = await httpAxios.get(USERS_API.GET);
        setUsers(payload);
      } catch (error) {
        console.log(error);
      }
    }
    fnUsers();
  }, []);

  const handle = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const newHandle = (e) => {
    const { name, value } = e.target;
    setUpdate({
      ...update,
      [name]: value,
    });
  };

  const fnCreate = () => {
    doCreate(inputs);
  };

  const fnDelete = (email) => {
    doDelete(email);
  };

  const fnUpdate = () => {
    doUpdate(update);
  };

  const { email, name, role } = inputs;
  const { uEmail, uName, uRole } = update;

  return (
    <div>
      <h4>Add a new user</h4>
      <article>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={handle}
          name='email'
        />
      </article>
      <article>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={name}
          onChange={handle}
        />
      </article>
      <article>
        <select name='role' value={role} onChange={handle} id=''>
          {roles.map((r, i) => (
            <option key={i} value={r}>
              {r}
            </option>
          ))}
        </select>
        <section>
          <button onClick={fnCreate}>add</button>
        </section>
      </article>
      {/* {'-'.repeat(10)} */}
      <h4>Users</h4>
      {users.map((u, i) => (
        <li key={i}>
          {`Name: ${u.name} - Role: ${u.role} - Email: ${u.email}     `}
          <button onClick={() => fnDelete(u.email)}>delete</button>
        </li>
      ))}
      {/* {'-'.repeat(10)} */}
      <h4>update</h4>
      <select
        name='uEmail'
        value={uEmail}
        onChange={newHandle}
        autoComplete='true'
      >
        <option value='' disabled hidden>
          Select user
        </option>
        {users.map((u, i) => (
          <option key={i} value={u.email}>
            {u.email}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='new name'
        name='uName'
        value={uName}
        onChange={newHandle}
      />
      <input
        type='text'
        placeholder='new role'
        name='uRole'
        value={uRole}
        onChange={newHandle}
      />
      <button onClick={fnUpdate}>update</button>
    </div>
  );
}
