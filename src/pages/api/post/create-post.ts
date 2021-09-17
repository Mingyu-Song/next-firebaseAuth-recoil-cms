import type { NextApiRequest, NextApiResponse } from 'next';

import { authAdmin } from 'lib/firebase/firebase-admin';
import { createPost } from 'lib/firebase/db-admin';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      headers: { authorization: authToken },
      body,
    } = req;
    console.log(authToken);
    if (!authToken) return res.status(401);

    const { uid, displayName } = await authAdmin.verifyIdToken(authToken);

    const data = await createPost({ uid, displayName, ...body });

    // res.status(201).json({ message: 'created_post' });
    res.status(201).end();
  } catch (error) {
    res.status(500).json({ error });
  }
}
