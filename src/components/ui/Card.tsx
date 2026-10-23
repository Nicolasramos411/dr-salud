import { cn } from '@/lib/cn';

const tones = {
  outline: 'border border-line bg-white',
  sky: 'bg-sky',
  white: 'bg-white',
} as const;

type CardProps = {
  tone?: keyof typeof tones;
  as?: 'div' | 'li' | 'article';
  className?: string;
  children: React.ReactNode;
};

export function Card({ tone = 'outline', as: Tag = 'div', className, children }: CardProps) {
  return (
    <Tag className={cn('flex flex-col gap-3 rounded-card p-7', tones[tone], className)}>
      {children}
    </Tag>
  );
}
