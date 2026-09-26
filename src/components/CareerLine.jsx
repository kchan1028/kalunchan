import { roles } from '../content/profile';

export default function CareerLine() {
  return <ol className="spec-list">{roles.map((role) => (
    <li key={role.id}><strong>{role.title}</strong> · {role.org} — {role.scale}</li>
  ))}</ol>;
}
