import nodemailer from "nodemailer";

export default function handler(req, res) {
  const body = req.body;

  console.log("body: ", body);

  if (!body.first || !body.last) {
    return res.json({ data: "First or last name not found" });
  }

  // backend

  res.json({ data: body });
}
