import instance from './instance';

const enrollGroup = (payload) =>
  instance.post('/group', {
    title: payload.title,
    dedc: payload.desc,
  });
export default enrollGroup;

export const inviteGroupMember = (groupId, payload) =>
  instance.post(`/group/invite-member`, {
    groupId,
    email: payload.email,
  });

export const deleteGroupMember = (groupId, payload) => {
  instance
    .post(`/group/${groupId}/invite-member`, {
      email: payload.email,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
