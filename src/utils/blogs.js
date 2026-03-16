export function formatBlogDate(dateString) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getReadTime(content = "") {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return `${minutes} min Read`;
}

export function getExcerpt(content = "", limit = 140) {
  if (!content) return "";
  if (content.length <= limit) return content;

  return `${content.slice(0, limit).trim()}...`;
}
