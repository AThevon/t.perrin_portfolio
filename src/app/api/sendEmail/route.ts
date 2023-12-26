import { EmailTemplate } from "@/components/misc/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
   
   try {
      const body = await req.json();
      const { name, email, message } = body;
      const data = await resend.emails.send({
         from: `${name} <info@theo.perrin.fr>` as string,
         to: process.env.RESEND_EMAIL as string,
         subject: `PORTFOLIO —> Message de ${name as string}`,
         reply_to: email as string,
         react: EmailTemplate({
            name: name as string,
            mail: email as string,
            message: message as string,
         }) as React.ReactElement,
      });

      if (!data) {
         return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
      }

      return NextResponse.json(data);
   } catch (error) {
      return NextResponse.json({ error });
   }
};
