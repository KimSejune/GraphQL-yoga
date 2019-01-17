import { getUsers, getUserById, getJobById, addUser, deleteUserById } from "./api";

const resolvers = {
  Query: {
    users: (_, {limit}) => getUsers(limit),
    getUser: (_, {id} ) => getUserById(id),
    getJob: (_, {user_id}) => getJobById(user_id)
  },
  Mutation: {
    addUser: (_, {id, name}) => addUser(id, name),
    deleteUser: (_, {id}) => deleteUserById(id)
  }
};

export default resolvers;