import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}

export const post = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost = ({ input }, { context }) => {
  const { currentUser } = context;

  if (!currentUser) {
    throw new Error('Authentication required.');
  }

  return db.post.create({
    data: {
      ...input,
      userId: currentUser.id,
    },
  });
};

export const updatePost = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}
