import AboutUsSection from '../components/AboutUsSection.js';
import AboutTexts from '../data/AboutTexts.js';

export default function About() {
  return (
    <main>
      <h1>About us</h1>
      {AboutTexts.map(aboutText => (
        <AboutUsSection key={aboutText.id} SectionDetails={aboutText} />
      ))}
    </main>
  );
}
