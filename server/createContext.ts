import { NextApiRequest, NextApiResponse } from 'next';

type CtxUser = {
  id: string;
  userId: string;
  email: string;
  name: string;
}

function getUserFromCookie(req: NextApiRequest) {
  const token = req.cookies.token;
  if (token) {
    // verify token and return response
  } else {
    // return null
  }

  return {
    id: "123",
    userId: "123",
    email: "123@gmail.com",
    name: "123",
  } as CtxUser;
}

export function createContext({
  req,
  res,
}: {
  req: NextApiRequest,
  res: NextApiResponse,
}) {
  const user = getUserFromCookie(req);
  return { req, res, user }
}

export type Context = ReturnType<typeof createContext>;