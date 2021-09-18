import type { NextApiRequest, NextApiResponse } from 'next';

import { authAdmin } from 'lib/firebase/firebase-admin';
import { createPost } from 'lib/firebase/db-admin';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      headers: { authorization: authToken },
      body,
    } = req;
    console.log({ authToken });

    if (!authToken) return res.status(401);

    const { uid, name, ...params } = await authAdmin.verifyIdToken(authToken);

    //서버기준 생성일
    const createdAt = new Date().toString();

    const data = await createPost({ uid, name, createdAt, ...body });

    res.status(201).json({ message: 'created post' });
  } catch (error) {
    res.status(500).json({ error });
  }
}
