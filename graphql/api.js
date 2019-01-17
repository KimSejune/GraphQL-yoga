let users = [
  {
    id: 1,
    name: "sejune"
  },
  {
    id: 2,
    name: "suhyun"
  }
];

let job = [
  {
    name: "DBA",
    user_id: 1,
    description: "Database Administar"
  },
  {
    name: "Developer",
    user_id: 2,
    description: "Backend Web Developer"
  }
];

const getUsers = limit => {
  const limitUser = users.slice(0,limit);
  return limitUser
}

const getUserById = id => {
  const filterUser = users.filter(user => user.id === id);
  return filterUser[0];
};
const getJobById = user_id => {
  const filterUserJob = job.filter(job => job.user_id === user_id);
  return filterUserJob[0];
};

const addUser = (id, name) => {
  const user = users.filter(user => user.id === id)[0];
  if(!user) {
    const newUser = {id,name}
    users.push(newUser)
    return users;
  }
  console.log('ID IS EXIST!')
};

const deleteUserById = (id) => {
  const deleteUser = users.filter(user => user.id != id);
  if(users.length > deleteUser.length) {
    users = deleteUser;
    return users;
  }
  console.log('ID IS NULL')
}

module.exports = { getUsers, getUserById, getJobById, addUser, deleteUserById };