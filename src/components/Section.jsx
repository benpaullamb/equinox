export default function Section({ children, className, ...props }) {
  return (
    <section className={`${className} p-8 container mx-auto`} {...props}>
      {children}
    </section>
  );
}
