import type { NextApiRequest, NextApiResponse } from 'next';
import { authAdmin } from 'lib/firebase/firebase-admin';
import { createComment } from 'lib/firebase/db-admin';

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

    await createComment({
      uid,
      name,
      postId,
      createdAt,
      commentContent,
      parentCommentId,
    });

    res.status(201).json({ message: 'created comment' });
  } catch (error) {
    res.status(500).json({ error });
  }
}
