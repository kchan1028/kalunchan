// Marks [BRACKETED] placeholders in copy so they stay visible until replaced.
export function withTodos(text) {
  return text.split(/(\[[^\]]+\])/).map((part, i) => (i % 2 ? <span className="todo" key={i}>{part}</span> : part));
}
