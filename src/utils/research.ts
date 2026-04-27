import type { CollectionEntry } from 'astro:content';
import { getVisibleEntries } from '@utils/content';

export type ResearchEntry = CollectionEntry<'research'>;

export interface ResearchChapter {
  name: string;
  order: number;
  pages: ResearchEntry[];
}

/** Get all visible research entries, sorted by chapterOrder then order */
export async function getPublishedResearch(): Promise<ResearchEntry[]> {
  const entries = await getVisibleEntries('research');
  return entries.sort((a, b) => {
    if (a.data.chapterOrder !== b.data.chapterOrder) {
      return a.data.chapterOrder - b.data.chapterOrder;
    }
    return a.data.order - b.data.order;
  });
}

/** Group research entries into chapters, sorted */
export async function getResearchChapters(): Promise<ResearchChapter[]> {
  const entries = await getPublishedResearch();
  const chapterMap = new Map<string, ResearchChapter>();

  for (const entry of entries) {
    const existing = chapterMap.get(entry.data.chapter);
    if (existing) {
      existing.pages.push(entry);
    } else {
      chapterMap.set(entry.data.chapter, {
        name: entry.data.chapter,
        order: entry.data.chapterOrder,
        pages: [entry],
      });
    }
  }

  return Array.from(chapterMap.values()).sort((a, b) => a.order - b.order);
}

/** Get the first research page (for /research redirect) */
export async function getFirstResearchPage(): Promise<ResearchEntry | undefined> {
  const entries = await getPublishedResearch();
  return entries[0];
}

/** Get prev/next navigation for a research entry */
export async function getResearchNavigation(currentPermalink: string) {
  const entries = await getPublishedResearch();
  const index = entries.findIndex((d) => d.data.permalink === currentPermalink);
  return {
    prev: index > 0 ? entries[index - 1] : null,
    next: index < entries.length - 1 ? entries[index + 1] : null,
  };
}

export function getResearchUrl(entry: ResearchEntry): string {
  return `/research/${entry.data.permalink}`;
}
