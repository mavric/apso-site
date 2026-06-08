import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ContentItem } from "@/types/content";

const contentDir = path.join(process.cwd(), "src/content");

export function getAllContent<T>(category: string): ContentItem<T>[] {
  const dir = path.join(contentDir, category);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf-8");
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as T,
        content,
      };
    })
    .sort((a, b) => {
      const aDate = (a.frontmatter as Record<string, string>).date ?? "";
      const bDate = (b.frontmatter as Record<string, string>).date ?? "";
      return bDate.localeCompare(aDate);
    });
}

export function getContentBySlug<T>(
  category: string,
  slug: string
): ContentItem<T> | null {
  const filePath = path.join(contentDir, category, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as T,
    content,
  };
}

export function getContentSlugs(category: string): string[] {
  const dir = path.join(contentDir, category);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
