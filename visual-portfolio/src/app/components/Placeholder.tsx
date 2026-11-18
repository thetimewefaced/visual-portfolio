import type { MediaItem } from "../../data/projects";

export function Placeholder({ item }: { item: MediaItem }) {
  return (
    <div className={`placeholder placeholder--${item.aspect ?? "wide"}`} role="img" aria-label={item.alt}>
      <span>{item.label ?? "Image Placeholder"}</span>
      <small>{item.alt}</small>
    </div>
  );
}
