import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;




const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export async function POST(request : NextRequest) {

  try {

    const body = await request.json();

    const { email, name, phoneNumber, message } = body;

    const resp = await sendMail({
      text : `
        Full Name : ${name},
        Email : ${email},
        Phone Number : ${phoneNumber},
        message : ${message}
      `
    })


    if (resp?.accepted.length) {
      return Response.json({
        success : true,
        error : false
      }, {
        status : 201
      })


    } else {
      throw new Error("Could Not Process Request")
    }

  } catch (error) {

    return Response.json({
      success: false,
      error: error
    }, {
      status : 403
    })
  }



}


async function sendMail({
  text,
  html,
} : { text : string, html? : string}) {
  try {
    await transporter.verify();
  } catch (error) {
    console.error('Something Went Wrong', SMTP_SERVER_USERNAME, SMTP_SERVER_PASSWORD, error);
    return;
  }
  const info = await transporter.sendMail({
    from: SMTP_SERVER_USERNAME,
    to: SITE_MAIL_RECIEVER,
    subject: "New Contact Request",
    text: text,
    html: html ? html : '',
  });
  console.log('Message Sent', info.messageId);
  console.log('Mail sent to', SITE_MAIL_RECIEVER);
  return info;
}