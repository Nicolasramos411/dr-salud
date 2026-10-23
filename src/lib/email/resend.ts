import { Resend } from 'resend';
import type { LeadNotifier } from './types';
import { leadSubject, leadText } from './format';

export function createResendNotifier(config: {
  apiKey: string;
  to: string;
  from: string;
}): LeadNotifier {
  const client = new Resend(config.apiKey);
  return {
    async send(lead) {
      const { error } = await client.emails.send({
        from: config.from,
        to: config.to,
        replyTo: lead.email,
        subject: leadSubject(lead),
        text: leadText(lead),
      });
      if (error) throw new Error(`Resend: ${error.message}`);
    },
  };
}
