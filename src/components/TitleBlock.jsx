
// The ruled title block that heads every page of the manual.
export default function TitleBlock({ section, title, cells = [], as: Heading = 'h1', coord }) {
  return (
    <div className="title-block sheet" data-coord={coord || `${section} · ${title}`}>
      <div className="title-block__row">
        <div className="title-block__cell title-block__section">
          <span className="label">Section</span>
          <span className="title-block__no">{section}</span>
        </div>
        <div className="title-block__cell title-block__title">
          <Heading className="title-block__heading">{title}</Heading>
        </div>
        {cells.map((c) => (
          <div className="title-block__cell title-block__meta" key={c.k}>
            <span className="label">{c.k}</span>
            <span>{c.v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
