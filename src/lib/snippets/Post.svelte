<script lang="ts">
	import type { SnippetProps, Snippets } from "$lib/snippets/utils.js";

	const {
		post,
		collapsed,
		setCollapsed
	}: SnippetProps<Snippets['PostSnippet']> = $props();

	const defaultAvatar =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23999'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

	function handleImageError(e: Event) {
		const img = e.target as HTMLImageElement;
		img.src = defaultAvatar;
	}

	function uncollapse() {
		setCollapsed(false);
	}

	// @ts-expect-error for some reason post.record is typed to {} which fails when we try to access text
	const text = post.record?.text;
</script>

<div
	class="post"
	class:collapsed
	onclick={uncollapse}
	onkeydown={(e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			uncollapse();
		}
	}}
	role="button"
	tabindex="0"
>
	<div class="avatar">
		{#if post.author.avatar}
			<img
				src={post.author.avatar}
				alt={`${post.author.displayName}'s avatar`}
				width="32"
				height="32"
				onerror={handleImageError}
			/>
		{:else}
			<img src={defaultAvatar} alt="default avatar" width="32" height="32" />
		{/if}
	</div>
	<div class="post-content-wrapper">
		<a
			class="post-header"
			href={`https://bsky.app/profile/${post.author.handle}/post/${post.uri.split('/').pop()}`}
			target="_blank"
			onclick={(e) => e.stopPropagation()}
		>
			{post.author.displayName} <span class="post-handle">@{post.author.handle}</span>
		</a>
		<div class="post-content" class:collapsed>
			{text}
		</div>
		<span class="post-stats" class:hidden={collapsed}>
			<span>💬 {post.replyCount}</span>
			<span>❤️ {post.likeCount}</span>
			<span>🔄 {post.repostCount}</span>
		</span>
	</div>
</div>

<style>
	.post {
		display: flex;
		gap: 0.75rem;
		padding: 0.75rem 1rem;
		cursor: default;
		transition: background-color 0.2s;
	}
	.post.collapsed {
		opacity: 0.7;
		cursor: pointer;
	}
	.post.collapsed:hover {
		background-color: rgba(0, 0, 0, 0.03);
	}
	.avatar img {
		border-radius: 50%;
		object-fit: cover;
	}
	.post-content-wrapper {
		flex: 1;
		overflow: hidden;
	}
	.post-header {
		font-weight: bold;
		text-decoration: none;
		color: inherit;
	}
	.post-header:hover {
		text-decoration: underline;
	}
	.post-handle {
		font-weight: normal;
		color: #666;
	}
	.post-content {
		margin-bottom: 0.5rem;
	}
	.post-content.collapsed {
		color: #666;
		font-style: italic;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
	}
	.post-stats {
		display: flex;
		gap: 1rem;
		color: #666;
	}
	.hidden {
		display: none;
	}
</style>
