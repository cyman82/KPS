import emailjs from "@emailjs/browser";
import { schoolInfo } from "@/data/site";

export const EMAILJS_CONFIG_ERROR = "EMAILJS_CONFIG_MISSING";

export type EnquiryPayload = {
  studentName: string;
  studentClass: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

function getEmailJsConfig() {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(EMAILJS_CONFIG_ERROR);
  }

  return { serviceId, templateId, publicKey };
}

export async function sendEnquiryEmail(payload: EnquiryPayload) {
  const { serviceId, templateId, publicKey } = getEmailJsConfig();

  return emailjs.send(
    serviceId,
    templateId,
    {
      to_email: schoolInfo.enquiryEmail,
      school_name: schoolInfo.name,
      student_name: payload.studentName,
      parent_name: payload.studentName,
      student_class: payload.studentClass,
      phone_number: payload.phoneNumber,
      enquiry_subject: payload.subject,
      enquiry_message: payload.message
    },
    {
      publicKey
    }
  );
}
