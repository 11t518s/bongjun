// read 고양이 전체 데이터 다 조회
import { Cat, CatType } from "./cats.model";
import { Router } from "express";

const router = Router();

router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

// read 특정 고양이 데이터 조회
router.get("/cats/:name", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cats = Cat.filter((cat) => {
      return cat.name === params.name;
    });
    // throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
});

//create 새로운 고양이 만들기
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    res.send({
      success: false,
      error: error,
    });
  }
});

export default router;
