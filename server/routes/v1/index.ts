import { Router } from "express";

const router = Router();

router.get("/ping", (_, res) => {
  res.json({
    message: "Hello World",
  });
});

export default router;
