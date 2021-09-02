import { authAdmin } from "lib/firebase/firebase-admin";
import { getOrder, createOrder } from "lib/firebase/db-admin";

export default async (req, res) => {
  console.log("hi");
  if (req.method === "GET") {
    try {
      const { authorization: idToken } = req.headers;

      if (!idToken) return res.status(401);

      const { uid } = await authAdmin.verifyIdToken(idToken);

      const data = await getOrder(uid);
      const messages = data.messages?.filter(
        (message) => message.status === "paid" || message.status === "done"
      );

      res.status(200).json({ messages });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  if (req.method === "POST") {
    try {
      const {
        headers: { authorization: idToken },
        body,
      } = req;

      if (!idToken) return res.status(401);

      const { uid } = await authAdmin.verifyIdToken(idToken);
      const data = await createOrder({ uid, ...body });

      res.status(200).json({ order_id: data.order_id });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
