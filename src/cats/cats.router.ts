// read 고양이 전체 데이터 다 조회
import { Cat, CatType } from "./cats.model";
import { Router } from "express";
import {
  createCat,
  deleteCat,
  readAllcat,
  readPartialCat,
  updateAllCat,
  updatePartialCat,
} from "./cats.service";

const router = Router();

router.get("/cats", readAllcat);

// read 특정 고양이 데이터 조회
router.get("/cats/:name", readPartialCat);

//create 새로운 고양이 만들기
router.post("/cats", createCat);

// 전체 다 업데이트 PUT
router.put("/cats/:name", updateAllCat);

// 부분적으로 업데이트 patch
router.patch("/cats/:name", updatePartialCat);
// 고양이 데이터 삭제 delete
router.delete("/cats/:name", deleteCat);

export default router;
