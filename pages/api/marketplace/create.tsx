import { convertPrice } from "@/utils/PriceConversion";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import formidable from "formidable";
import fs from "fs";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-2",
  signatureVersion: "v3",
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const s3 = new AWS.S3();

  const saveToDb = async (fields: any, files: any) => {
    const { title, content, price, condition } = fields;

    try {
      for (const file of Object.values(files)) {
        const data = await fs.promises.readFile(file.filepath);

        const params = {
          Bucket: "legofindbucket",
          Key: file.originalFilename,
          Body: data,
          ContentType: file.mimetype,
          ACL: "public-read",
        };

        s3.upload(params, async (err: any, data: any) => {
          if (err) {
            console.log(
              "Error occured while trying to upload to S3 bucket",
              err
            );
            res.status(500).json({ error: "Error uploading to S3 bucket" });
          }

          if (data) {
            const newPost = await prisma.post.create({
              data: {
                title,
                content,
                price: convertPrice(price),
                condition,
                images: data.Location,
                isSold: false,
                authorId: "77f66442-3d78-435a-a4c5-a18672b82c32",
              },
            });
          }
        });
      }
    } catch (err) {
      res.status(500).json({ error: "An error occurred while saving to DB" });
      return;
    }
  };

  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error("Error", err);
        res
          .status(500)
          .json({ error: "An error occurred while parsing the form" });
        return;
      }

      const stringfiedFields = JSON.parse(fields.inputs);
      saveToDb(stringfiedFields, files);
      res.status(200).json({ message: "Success!" });
    });
  } else {
    res.status(405).json({ error: "Invalid HTTP method" });
  }
}
