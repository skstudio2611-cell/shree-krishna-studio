import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      event,
      date,
      message,
    } = body;
       const { data, error } = await resend.emails.send({
  from: "Shree Krishna Studio <onboarding@resend.dev>",
  to: ["skstudio2611@gmail.com"],
  subject: `📸 New Booking Request - ${event}`,

  html: `
  <h2>📸 New Booking Request</h2>

  <p><b>Name:</b> ${name}</p>
  <p><b>Phone:</b> ${phone}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Event:</b> ${event}</p>
  <p><b>Date:</b> ${date}</p>
  <p><b>Message:</b> ${message}</p>
  `,
});


if (error) {
  throw error;
}
        return Response.json({
      success: true,
      message: "Booking request sent successfully.",
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}