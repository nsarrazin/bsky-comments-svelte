<script lang="ts">
	import type { SnippetProps, Snippets } from "$lib/snippets/utils.js";

	const {collapsed, setCollapsed}: SnippetProps<Snippets['CollapseBarSnippet']> = $props();
</script>


{#if !collapsed}
<button
	class="collapse-bar"
	onclick={() => {
		setCollapsed(!collapsed);
	}}
	aria-label={collapsed ? "Expand replies" : "Collapse replies"}
>
</button>
{/if}

<style>
	.collapse-bar {
		display: flex;
		align-items: center;
		padding-left: 8px;
		cursor: pointer;
		background: none;
		border: none;
		transition: transform 0.2s;
		position: absolute;
		height: 100%;
		left: 24px;
		top: 0px;
		z-index: 1;
	}

	.collapse-bar::before {
		content: "";
		display: inline-block;
		margin-right: 4px;
		transition: transform 0.2s;
	}

	.collapse-bar::after {
		content: "";
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 2px;
		background-color: #ccc;
		display: block;
		transition: background-color 0.2s;
	}

	.collapse-bar:hover::after {
		background-color: #666;
	}
</style>