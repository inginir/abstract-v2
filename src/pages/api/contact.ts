import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const DEFAULT_SENDER_EMAIL = "moxnaggar@gmail.com";

export default async function contactHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  console.log("Subscribing user ...");

  const parsed = req.body;

  const { email } = parsed;
  console.log(
    "Initiating subscribe user for email: ",
    email && `${email.substring(0, 3)}*****@****.***`,
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  const data = {
    from: DEFAULT_SENDER_EMAIL,
    to: "farzahran@gmail.com",
    subject: "Contact us form submission",
    html: `<div>name: ${parsed?.name}</div>
                         <div>email: ${parsed?.email}</div>
                         <div>services selected: ${parsed?.services}</div>
                         <div>anything else: ${parsed?.message}</div>`,
  };

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

  try {
    const sentInfo = await sendgrid.send(data);
    console.log("Email sent successfully", sentInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }

  return res.status(200).json({ message: "Email sent successfully" });
}
