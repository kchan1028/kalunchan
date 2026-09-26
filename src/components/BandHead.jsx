// Band head: section number in the margin rail, title, optional aside.
export default function BandHead({ no, id, title, children }) {
  return (
    <header className="band-head grid">
      <p className="band-head__no mono" aria-hidden="true">{no}</p>
      <h2 id={id} className="band-head__title h2">{title}</h2>
      {children && <div className="band-head__aside">{children}</div>}
    </header>
  );
}
