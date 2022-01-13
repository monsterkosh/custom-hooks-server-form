import httpAxios from '../http/client_http';
// api
import USERS_API from '../api/users.api';

const doUpdate = async (update) => {
  try {
    await httpAxios.put(USERS_API.UPDATE, {
      email: update.uEmail,
      name: update.uName,
      role: update.uRole,
    });
    alert('success...');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export default doUpdate;
