<script lang="ts">
	import type { ThreadContent } from './ThreadLoader.svelte.js';
	import type { Snippets } from "$lib/snippets/utils.js";
	
	import Comment from './Comment.svelte';
	import Post from './snippets/Post.svelte';
	import SeeMore from './snippets/SeeMore.svelte';
	import CollapseBar from './snippets/CollapseBar.svelte';
	
	interface Props {
		view: ThreadContent;
		isTopLevel?: true;
		snippets?: {
			ErrorSnippet?: Snippets['ErrorSnippet'];
			PostSnippet?: Snippets['PostSnippet'];
			SeeMoreSnippet?: Snippets['SeeMoreSnippet'];
			CollapseBarSnippet?: Snippets['CollapseBarSnippet'];
		};
	}
	
	let { view, isTopLevel, snippets }: Props = $props();

	let collapsed = $state(false);
	let displayCount = $state(5);

	function showMore() {
		displayCount = Math.min(view.replies?.length || 0, displayCount + 10);
	}

	let visibleReplies = $derived(view.replies?.slice(0, displayCount) || []);
	let hasMoreReplies = $derived((view.replies?.length || 0) > displayCount);
</script>

{#if !isTopLevel}
	{#if snippets?.PostSnippet}
		{@render snippets.PostSnippet({
			post: view.post,
			collapsed,
			setCollapsed: (val: boolean) => (collapsed = val)
		})}
	{:else}
		<Post post={view.post} {collapsed} setCollapsed={(val: boolean) => (collapsed = val)} />
	{/if}
{/if}
{#if view.replies && view.replies.length > 0}
	<div class="bsky-comment-replies-wrapper" class:indented={!isTopLevel}>
		{#if !isTopLevel}
			{#if snippets?.CollapseBarSnippet}
				{@render snippets.CollapseBarSnippet({
					collapsed,
					setCollapsed: (val: boolean) => (collapsed = val)
				})}
			{:else}
				<CollapseBar collapsed={collapsed} setCollapsed={(val: boolean) => (collapsed = val)} />
			{/if}
		{/if}
		<div class="bsky-comments-replies">
		{#if !collapsed}
			{#each visibleReplies as reply}
				<Comment view={reply} {snippets} />
			{/each}

			{#if hasMoreReplies}
				{#if snippets?.SeeMoreSnippet}
					{@render snippets.SeeMoreSnippet({
						showMore,
						remaining: view.replies.length - displayCount
					})}
				{:else}
					<SeeMore {showMore} remaining={view.replies.length - displayCount} />
				{/if}
			{/if}
		{/if}
		</div>
	</div>
{/if}

<style>
	.bsky-comment-replies-wrapper {
		position: relative;
	}
	.indented {
		padding-left: 32px;
	}
</style>