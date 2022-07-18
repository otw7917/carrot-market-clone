import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/client";
import { withAPiSession } from "@libs/server/withApiSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("confirm 토큰 확인하기");
  console.log("req session: ", req.session); // option 생성시 req.session = {} 이 생성됨
  const { token } = req.body;
  console.log("token : ", token);
  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
    // 관계 있는 테이블을 가지고 옴
    // include: { user: true },
  });
  console.log("foundToken : ", foundToken);
  if (!foundToken) return res.status(404).end();

  req.session.user = {
    id: foundToken.userId,
  };

  await req.session.save();

  // 토큰들 다 찾아서 인증 후 삭제해주기
  await client.token.deleteMany({
    where: {
      userId: foundToken.userId,
    },
  });

  res.json({
    ok: true,
  });
}

export default withAPiSession(withHandler("POST", handler));
