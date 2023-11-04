import { Request, Response } from "express";
import BrandModel from "../Models/BrandModel";
import { IncomingHttpHeaders } from "http";


export const getBrands = async (req: Request, Res: Response) => {
  try {
    const Brands = await BrandModel.find();
    if (!Brands || Brands.length == 0) {
      return Res.json({ message: "no brands" });
    }
    return Res.status(200).json({
      Object: Brands,
    });
  } catch (error) {
    return Res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addBrand = async (req: Request, Res: Response) => {
  const { body } = req;
  try {
    const addBrand = await BrandModel.create(body);
    if (!addBrand) {
      return Res.json({ message: "the comment has not been added" });
    }
    return Res.status(200).json({
      message: "brand has been added",
      Object: addBrand,
    });
  } catch (error) {
    return Res.status(500).json({ error: "Internal Server Error" });
  }
};

export const editBrand = async (req: Request, res: Response) => {
  const { body, headers: hd } = req;
  const headers: headersType = hd;
  const { id } = headers;

  try {
    const filter = { _id: id };
    const updatedBrand = await BrandModel.findOneAndUpdate(filter, body);
    if (!updatedBrand) {
      return res.status(400).json("No brands found");
    }
    return res
      .status(200)
      .json({ message: "comment updated", Object: updatedBrand });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteBrand = async (req: Request, res: Response) => {
    const { params } = req;
    const { id } = params;

    const filter = { _id: id };

    try {
        const brandToDelete = await BrandModel.findOne(filter);     

        if (!brandToDelete) {
            return res.json("No brand found");
        }

        const brandDelete = await BrandModel.findOneAndDelete(filter); 
        if (!brandDelete) {
            return res.json("brand not deleted");
        }

        return res.status(200).json("brand deleted");
    } catch (error) {
        console.log("🚀 ~ file: ~ error:", error);
    }
}


export type headersType =  IncomingHttpHeaders &{
    token?:string
}