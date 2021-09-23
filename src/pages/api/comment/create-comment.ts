import type { NextApiRequest, NextApiResponse } from 'next';
import { authAdmin } from 'lib/firebase/firebase-admin';
import { createComment, createChildComment } from 'lib/firebase/db-admin';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      headers: { authorization: authToken },
      body,
    } = req;

    if (!authToken) return res.status(401);

    const { uid, name, ...params } = await authAdmin.verifyIdToken(authToken);

    const { postId, commentContent, parentCommentId } = body;

    //서버기준 생성일
    const createdAt = new Date().toString();
    const bodyVariables = {
      uid,
      name,
      postId,
      createdAt,
      commentContent,
    };
    if (parentCommentId) {
      await createChildComment({
        ...bodyVariables,
        parentCommentId,
      });
    } else {
      await createComment(bodyVariables);
    }

    res.status(201).json({ message: 'created comment' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
