const BRAND_NAMES = /(Dr\. Salud|Eudaimonía|UNICEQ)/g;

/** Renders text, marking brand names with translate="no" so page translators leave them alone. */
export function Brand({ children }: { children: string }) {
  return (
    <>
      {children.split(BRAND_NAMES).map((part, index) =>
        index % 2 === 1 ? (
          <span key={index} translate="no">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}
