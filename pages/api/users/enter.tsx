// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/client";
import withHandler from "@libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  let user;
  if (email) {
    user = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      user = await client.user.create({
        data: {
          name: "defaultName",
          email: email,
        },
      });
    }
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone,
      },
    });
    if (!user) {
      user = await client.user.create({
        data: {
          name: "defaultName",
          phone,
        },
      });
    }
  }
  console.log(user);
  return res.status(200).end();
}

export default withHandler("POST", handler);
