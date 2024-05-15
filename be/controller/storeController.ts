import { Request, Response } from "express";
import storeModel from "../model/storeModel";

export const getAllProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const product = await storeModel.find();

    return res.status(200).json({
      message: "Products found",
      data: product,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Products not found",
      error: error,
      status: 404,
    });
  }
};

export const getOneProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productID } = req.params;
    const product = await storeModel.findById(productID);

    return res.status(200).json({
      message: "Product found",
      data: product,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, price, quantity, description, image, discount } = req.body;

    const category = [
      "cloth",
      "fashion",
      "appliances",
      "electronics",
      "food",
      "games",
    ];
    const numb = Math.floor(Math.random() * category.length - 1);

    const product = await storeModel.create({
      title,
      price,
      quantity,
      splashPrice: price - (price * discount) / 100,
      description,
      image,
      discount,
      category: category.splice(0, numb),
    });

    return res.status(201).json({
      message: "create Product",
      data: product,
      status: 201,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getProductByPrice = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { price } = req.query;

    const product = await storeModel.find({
      price: {
        $lte: price,
      },
    });

    return res.status(200).json({
      message: "Product found",
      data: product,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getProductByName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productName } = req.query;

    const product = await storeModel.find({
      $or: [
        {
          title: {
            $regex: productName,
          },
        },
      ],
    });

    return res.status(200).json({
      message: "Product found",
      data: product,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getProductByPriceName = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productName, productPrice } = req.query;
    console.log(productName, productPrice);

    let numb = parseFloat(productPrice?.toString()!);

    console.log(numb);

    const product = await storeModel.find({
      $and: [
        {
          title: {
            $regex: productName,
          },
        },
        {
          splashPrice: { $lte: numb },
        },
      ],
    });

    return res.status(200).json({
      message: "Product found",
      data: product,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};

export const getProductByCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productCategory } = req.query;

    const product = await storeModel.find({
      $and: [
        {
          category: {
            $regex: productCategory,
          },
        },
      ],
    });

    return res.status(200).json({
      message: "Product found",
      data: product,
      status: 200,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Product not found",
      error: error,
      status: 404,
    });
  }
};
