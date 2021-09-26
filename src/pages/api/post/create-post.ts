import type { NextApiRequest, NextApiResponse } from 'next';

import { authAdmin } from 'lib/firebase/firebase-admin';
import { createPost } from 'lib/firebase/db-admin';
import titleToUrlSlug from 'lib/utils/titleToUrlSlug';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      headers: { authorization: authToken },
      body,
    } = req;
    console.log({ authToken });

    if (!authToken) return res.status(401);

    const { uid } = await authAdmin.verifyIdToken(authToken);
    const { postTitle, postContent } = body;

    //서버기준 생성일
    const createdAt = new Date().toString();
    const urlSlug = titleToUrlSlug(postTitle);

    await createPost({ uid, postTitle, postContent, createdAt, urlSlug });

    res.status(201).json({ message: 'created post' });
  } catch (error) {
    res.status(500).json({ error });
  }
}
