<script lang="ts">
	import type { SnippetProps, Snippets } from "$lib/snippets/utils.js";

	const { post, url }: SnippetProps<Snippets['PostStatsSnippet']> = $props();
</script>

<div class="stats">
	<div class="stat">
		<span class="icon">💬</span>
		<span class="count">{post.replyCount} {post.replyCount === 1 ? 'reply' : 'replies'}</span>
	</div>
	<div class="stat">
		<span class="icon">❤️</span>
		<span class="count">{post.likeCount} {post.likeCount === 1 ? 'like' : 'likes'}</span>
	</div>
	<div class="stat">
		<span class="icon">🔄</span>
		<span class="count">{post.repostCount} {post.repostCount === 1 ? 'repost' : 'reposts'}</span>
	</div>
	<a href={url} class="comment-link">Leave a comment</a>
</div>

<style>
	.stats {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		padding: 1rem 0;
		border-bottom: 1px solid #eee;
		margin-bottom: 1rem;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

	.stat {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
	}

	.icon {
		font-size: 1.1rem;
	}

	.count {
		font-weight: 500;
	}

	.comment-link {
		text-decoration: none;
		background-color: #3b82f6;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		font-weight: 500;
		transition: background-color 0.2s;
		white-space: nowrap;
	}

	.comment-link:hover {
		background-color: #2563eb;
	}
</style>
