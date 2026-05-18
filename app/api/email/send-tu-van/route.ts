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

    const formattedPrograms =
      Array.isArray(data.programs) && data.programs.length > 0
        ? data.programs.join(", ")
        : "";

    await resend.emails.send({
      from: `${SENDER_EMAIL}`,
      to: `${RECEIVER_EMAIL}`,
      subject: "Đăng ký nhận tư vấn 1:1 mới từ website JUNIOR CEO",
      html: `
        <h2>Thông tin đăng ký tư vấn</h2>
        <p><b>Họ và tên Phụ Huynh:</b> ${data.parentName}</p>
        <p><b>Số điện thoại:</b> ${data.phoneNumber}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Họ và tên học viên:</b> ${data.studentName}</p>
        <p><b>Ngày sinh học viên:</b> ${data.studentDateOfBirth}</p>
        <p><b>Lớp / Khối:</b> ${data.class}</p>
        <p><b>Chương trình quan tâm:</b> ${formattedPrograms}</p>
        <p><b>Nội dung quan tâm:</b> ${data.note}</p>
        <p><b>Đăng ký ngày tư vấn:</b> ${data.consultationDate}</p>
        <p><b>Đăng ký giờ tư vấn:</b> ${data.consultationTime}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
