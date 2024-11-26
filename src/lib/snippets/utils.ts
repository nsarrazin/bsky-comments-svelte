import type { ThreadContent } from "$lib/ThreadLoader.svelte.js";
import type { Snippet } from "svelte";

export type Snippets = {
	LoaderSnippet?: Snippet<[]>;
	ErrorSnippet?: Snippet<
		[
			{
				error: string;
			}
		]
	>;
	PostStatsSnippet?: Snippet<
		[
			{
				post: ThreadContent['post'];
				url: string | null;
			}
		]
	>;
	PostSnippet?: Snippet<
		[
			{
				post: ThreadContent['post'];
				collapsed: boolean;
				setCollapsed: (collapsed: boolean) => void;
			}
		]
	>;
	SeeMoreSnippet?: Snippet<
		[
			{
				showMore(): void;
				remaining: number;
			}
		]
	>;
	CollapseBarSnippet?: Snippet<
		[
			{
				collapsed: boolean;
				setCollapsed: (collapsed: boolean) => void;
			}
		]
	>;
};


// Helper type to extract props from a Snippet
export type SnippetProps<T> = T extends Snippet<[infer P]> ? P : never;
