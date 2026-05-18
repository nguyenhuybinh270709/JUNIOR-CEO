import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL;
    const SENDER_EMAIL = process.env.SENDER_EMAIL;

    if (!RECEIVER_EMAIL) {
      throw new Error("RECEIVER_EMAIL is missing in .env");
    }
    if (!SENDER_EMAIL) {
      throw new Error("SENDER_EMAIL is missing in .env");
    }

    await resend.emails.send({
      from: `${SENDER_EMAIL}`,
      to: `${RECEIVER_EMAIL}`,
      subject: "Thông tin liên hệ mới từ website JUNIOR CEO",
      html: `
        <h2>Thông tin liên hệ</h2>
        <p><b>Họ và tên:</b> ${data.fullName}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Số điện thoại:</b> ${data.phoneNumber}</p>
        <p><b>Chủ đề:</b> ${data.topic}</p>
        <p><b>Nội dung tin nhắn:</b> ${data.messageContent}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
