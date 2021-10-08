// read 고양이 전체 데이터 다 조회
import { Cat, CatType } from "./cats.model";
import { Request, Response } from "express";

export const readAllcat = (req: Request, res: Response) => {
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
};

// read 특정 고양이 데이터 조회
export const readPartialCat = (req: Request, res: Response) => {
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
};

//create 새로운 고양이 만들기
export const createCat = (req: Request, res: Response) => {
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
};

// 전체 다 업데이트 PUT
export const updateAllCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    let result;
    Cat.map((cat) => {
      cat.name === params.name && (result = body);
    });
    res.status(200).send({
      success: true,
      data: {
        cats: result,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};

// 부분적으로 업데이트 patch
export const updatePartialCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    Cat.map((cat) => {
      cat.name === params.name && (cat = { ...cat, ...body });
    });
    res.status(200).send({
      success: true,
      data: {
        cats: body,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};
// 고양이 데이터 삭제 delete
export const deleteCat = (req: Request, res: Response) => {
  try {
    const params = req.params;
    const body = req.body;
    const newCat = Cat.filter((cat) => cat.name !== params.name);
    res.status(200).send({
      success: true,
      data: {
        cats: body,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error,
    });
  }
};
