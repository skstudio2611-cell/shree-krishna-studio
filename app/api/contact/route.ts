import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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
        await resend.emails.send({
      from: "Shree Krishna Studio <onboarding@resend.dev>",
      to: ["skstudio2611@gmail.com"],
      subject: `📸 New Booking Request - ${event}`,

      html: `
      <div style="font-family:Arial,sans-serif;padding:20px">
        <h2 style="color:#16a34a;">
          📸 New Booking Request
        </h2>

        <table style="border-collapse:collapse;width:100%;margin-top:20px">

          <tr>
            <td><b>Name</b></td>
            <td>${name}</td>
          </tr>

          <tr>
            <td><b>Phone</b></td>
            <td>${phone}</td>
          </tr>

          <tr>
            <td><b>Email</b></td>
            <td>${email}</td>
          </tr>

          <tr>
            <td><b>Event</b></td>
            <td>${event}</td>
          </tr>

          <tr>
            <td><b>Date</b></td>
            <td>${date}</td>
          </tr>

          <tr>
            <td><b>Message</b></td>
            <td>${message}</td>
          </tr>

        </table>
      </div>
      `,
    });
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