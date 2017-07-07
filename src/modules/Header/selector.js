const getCountOfUnseenComments = state => (
  state.comments.filter(comment => !comment.acknowledged).length
);

export default getCountOfUnseenComments;
