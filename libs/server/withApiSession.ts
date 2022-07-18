import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiHandler } from "next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const sessionOptions = {
  password: process.env.COOKIE_PASSWORD!,
  cookieName: "carrot-market-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

export function withAPiSession(handler: NextApiHandler) {
  return withIronSessionApiRoute(handler, sessionOptions);
}
