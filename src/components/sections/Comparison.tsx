import { Brand } from '@/components/ui/Brand';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { inicio } from '@/content/inicio';

type Props = { content: typeof inicio.comparison };

export function Comparison({ content }: Props) {
  return (
    <Section size="narrow" labelledBy="comparison-title">
      <div className="flex flex-col gap-8">
        <Heading id="comparison-title" className="text-center">
          {content.title}
        </Heading>
        <div
          role="region"
          aria-labelledby="comparison-title"
          tabIndex={0}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[35rem] border-collapse text-[1.0625rem]">
            <thead>
              <tr>
                <td className="border-b-2 border-line p-4" />
                <th scope="col" className="w-44 border-b-2 border-line p-4 font-semibold text-gray">
                  {content.columns.isolated}
                </th>
                <th scope="col" className="w-52 border-b-2 border-navy p-4 font-bold">
                  <Brand>{content.columns.program}</Brand>
                </th>
              </tr>
            </thead>
            <tbody>
              {content.rows.map((row) => (
                <tr key={row.label} className="[&:last-child>*]:border-b-0">
                  <th scope="row" className="border-b border-line p-4 text-left font-medium">
                    {row.label}
                  </th>
                  <td
                    className={`border-b border-line p-4 text-center ${row.isolatedMuted ? 'text-gray' : ''}`}
                  >
                    {row.isolated}
                  </td>
                  <td className="border-b border-line p-4 text-center font-bold">{row.program}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
}
