<script lang="ts">
	import type { SnippetProps, Snippets } from "$lib/snippets/utils.js";

	const { error }: SnippetProps<Snippets['ErrorSnippet']> = $props();
</script>

<div class="error">{error}</div>

<style>
	.error {
		color: #e74c3c;
		text-align: center;
		padding: 1rem;
	}
</style>
