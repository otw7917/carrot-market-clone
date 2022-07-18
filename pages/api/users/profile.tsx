import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/client";
import { withAPiSession } from "@libs/server/withApiSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("api/user/profile");

  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });

  console.log(profile);

  res.json({
    ok: true,
    profile,
  });

  res.status(200).end();
}

export default withAPiSession(withHandler("GET", handler));
