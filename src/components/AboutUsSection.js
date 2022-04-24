export default function AboutUsSection({ SectionDetails }) {
  return (
    <section>
      <h2>{SectionDetails.name}</h2>
      <p>{SectionDetails.text}</p>
    </section>
  );
}
