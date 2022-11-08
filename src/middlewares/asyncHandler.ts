import { Request, Response } from "express";

function asyncHandler(asyncController: any) {
  return async (req: Request, res: Response) => {
    try {
      await asyncController(req, res);
    } catch (err: any) {
      console.log(err); //확인용
      res.status(err.status ? err.status : 500).json({ message: err.message });
    }
  };
}

export default asyncHandler;
