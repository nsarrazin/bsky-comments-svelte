<script lang="ts">
	import { ThreadLoader, type ThreadLoaderOptions } from './ThreadLoader.svelte.js';
	import type { SnippetProps, Snippets } from "$lib/snippets/utils.js";

	// default components
	import Comment from './Comment.svelte';
	import Loader from './snippets/Loader.svelte';
	import Error from './snippets/Error.svelte';
	import PostStats from './snippets/PostStats.svelte';

	interface Props {
		uri: string;
		LoadingOptions?: ThreadLoaderOptions;
		LoaderSnippet?: Snippets['LoaderSnippet'];
		ErrorSnippet?: Snippets['ErrorSnippet'];
		PostStatsSnippet?: Snippets['PostStatsSnippet'];
		PostSnippet?: Snippets['PostSnippet'];
		SeeMoreSnippet?: Snippets['SeeMoreSnippet'];
		CollapseBarSnippet?: Snippets['CollapseBarSnippet'];
	}

	let props: Props = $props();
	let loader = new ThreadLoader(props.uri, props.LoadingOptions);
</script>

{#if loader.loading}
	{#if props?.LoaderSnippet}
		{@render props.LoaderSnippet()}
	{:else}
		<Loader />
	{/if}
{:else if loader.error}
	{#if props?.ErrorSnippet}
		{@render props.ErrorSnippet({ error: loader.error.message })}
	{:else}
		<Error error={loader.error.message} />
	{/if}
{:else if loader.content}
	<div class="thread-container">
		{#if props?.PostStatsSnippet}
			{@render props.PostStatsSnippet({ post: loader.content.post, url: loader.postUrl })}
		{:else}
			<PostStats post={loader.content.post} url={loader.postUrl} />
		{/if}
		<Comment
			view={loader.content}
			isTopLevel
			snippets={{
				ErrorSnippet: props.ErrorSnippet,
				PostSnippet: props.PostSnippet,
				SeeMoreSnippet: props.SeeMoreSnippet,
				CollapseBarSnippet: props.CollapseBarSnippet
			}}
		/>
	</div>
{/if}

<style>
	.thread-container {
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		padding: 0.5rem;
		box-sizing: border-box;
	}

	@media (max-width: 600px) {
		.thread-container {
			padding: 0.25rem;
		}
	}
</style>
