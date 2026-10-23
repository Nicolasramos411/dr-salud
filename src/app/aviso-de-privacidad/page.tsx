import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { isPrivacyNoticeReady, privacyNotice } from '@/content/legal';
import { buildMetadata } from '@/lib/seo';

// noindex while there is no legal text (blocking item in docs/PENDIENTES.md).
export const metadata = buildMetadata({
  title: privacyNotice.title,
  description: privacyNotice.description,
  path: '/aviso-de-privacidad',
  noindex: !isPrivacyNoticeReady,
});

export default function PrivacyPage() {
  return (
    <Section size="prose" padding="py-16 desk:py-24">
      <div className="flex flex-col gap-6">
        <Heading as="h1">{privacyNotice.title}</Heading>
        {isPrivacyNoticeReady ? (
          privacyNotice.blocks.map((block, index) => (
            <div key={index} className="flex flex-col gap-3">
              {block.heading && <h2 className="m-0 text-2xl font-bold">{block.heading}</h2>}
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="m-0 text-body text-gray">
                  {paragraph}
                </p>
              ))}
            </div>
          ))
        ) : (
          <p className="m-0 text-lead text-gray">{privacyNotice.emptyNotice}</p>
        )}
      </div>
    </Section>
  );
}
