import { Link } from "react-router";

export function NotFound() {
  return <section className="not-found page-shell"><p className="eyebrow">404 / Page not found</p><h1>Nothing here,<br />just quiet space.</h1><Link to="/">Return to work</Link></section>;
}
