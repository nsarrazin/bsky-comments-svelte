<script lang="ts">
	import type { SnippetProps, Snippets } from "$lib/snippets/utils.js";

	const { showMore, remaining }: SnippetProps<Snippets['SeeMoreSnippet']> = $props();
</script>

<button class="see-more" onclick={showMore}>
	Show more replies ({remaining} remaining)
</button>

<style>
	.see-more {
		background: transparent;
		border: none;
		color: #666;
		padding: 0.5rem 1rem;
		cursor: pointer;
		font-size: 0.9rem;
		margin-left: 2rem;
		transition: color 0.2s;
	}
	.see-more:hover {
		color: #000;
	}
</style>
