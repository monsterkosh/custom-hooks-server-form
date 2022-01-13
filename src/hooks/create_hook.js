import httpAxios from '../http/client_http';
// api
import USERS_API from '../api/users.api';

const doCreate = async (inputs) => {
  try {
    await httpAxios.post(USERS_API.POST, inputs);
    alert('success...');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export default doCreate;
