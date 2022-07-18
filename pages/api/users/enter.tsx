// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/client";
import withHandler from "@libs/server/withHandler";

interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("api/users/enter");
  const { phone, email } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  if (!user) return res.status(404).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "default name",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);
  return res.status(200).json({
    ok: true,
  });
}

export default withHandler("POST", handler);
