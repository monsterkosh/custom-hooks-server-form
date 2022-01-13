import httpAxios from '../http/client_http';
// api
import USERS_API from '../api/users.api';

const doDelete = async (email) => {
  try {
    await httpAxios.delete(USERS_API.DELETE, { data: { email } });

    alert('success...');
    window.location.reload();
  } catch (error) {
    console.log(error);
  }
};

export default doDelete;
