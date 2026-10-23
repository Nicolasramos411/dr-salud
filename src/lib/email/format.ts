import { leadForm } from '@/content/leadform';
import type { LeadInput } from '@/lib/validation/lead';

const rangeLabel = (value: string) =>
  leadForm.employeeRanges.find((r) => r.value === value)?.label ?? value;

export function leadSubject(lead: LeadInput): string {
  return `Solicitud de propuesta: ${lead.company}`;
}

export function leadText(lead: LeadInput): string {
  return [
    `Nombre: ${lead.name}`,
    `Empresa: ${lead.company}`,
    `Correo: ${lead.email}`,
    `Teléfono: ${lead.phone}`,
    `Colaboradores: ${rangeLabel(lead.employees)}`,
    `Servicios de interés: ${lead.services || '—'}`,
  ].join('\n');
}
