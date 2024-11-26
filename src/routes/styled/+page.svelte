<script lang="ts">
	import BlueskyComments from '$lib/BlueskyComments.svelte';
</script>

<article>
	<h1>Custom Styled Comments</h1>
	<p>
		Here's an example of a custom-styled theme for the BlueskyComments component. 
	</p>
</article>

<BlueskyComments uri="at://coryzue.com/app.bsky.feed.post/3lbrkypd37224">
	{#snippet LoaderSnippet()}
		<div class="loader">
			<div class="box"></div>
		</div>
	{/snippet}

	{#snippet ErrorSnippet(error)}
		<div class="error">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
				<path
					fill="currentColor"
					d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"
				/>
			</svg>
			<span>{error}</span>
		</div>
	{/snippet}

	{#snippet PostSnippet({ post, collapsed, setCollapsed })}
		<div 
			class="post" 
			class:collapsed 
			on:click={() => collapsed && setCollapsed(false)}
			on:keydown={(e) => e.key === 'Enter' && collapsed && setCollapsed(false)}
			role="button"
			tabindex="0"
		>
			<div class="post-header">
				<div class="avatar">
					{#if post.author.avatar}
						<img src={post.author.avatar} alt={post.author.displayName} />
					{/if}
				</div>
				<div class="author-info">
					<span class="display-name">{post.author.displayName}</span>
					<span class="handle">@{post.author.handle}</span>
				</div>
			</div>
			<div class="content">
				<p>{post.record && 'text' in post.record ? post.record.text : ''}</p>
			</div>
			<div class="post-stats">
				<span class="stat">💬 {post.replyCount}</span>
				<span class="stat">❤️ {post.likeCount}</span>
				<span class="stat">🔄 {post.repostCount}</span>
			</div>
		</div>
	{/snippet}

	{#snippet PostStatsSnippet({ post, url })}
		<a href={url} class="stats">
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
		</a>
	{/snippet}

	{#snippet SeeMoreSnippet({ showMore, remaining })}
		<button class="see-more" on:click={showMore}>
			Show {remaining} more replies
		</button>
	{/snippet}

	{#snippet CollapseBarSnippet({ collapsed, setCollapsed })}
		{#if !collapsed}
			<button
				class="collapse-bar"
				on:click={() => setCollapsed(!collapsed)}
				aria-label={collapsed ? "Expand replies" : "Collapse replies"}
			>
			</button>
		{/if}
	{/snippet}
</BlueskyComments>

<style>
	:global(body) {
		background: #ffffff;
	}

	article {
		max-width: 600px;
		margin: 2rem auto;
		padding: 2rem;
	}


	/* Loader styles */
	.loader {
		display: flex;
		justify-content: center;
		padding: 2rem;
	}

	.box {
		width: 50px;
		height: 50px;
		background: #FF6B6B;
		border: 4px solid #000;
		animation: bounce 0.6s infinite alternate;
	}

	@keyframes bounce {
		to {
			transform: translateY(-20px);
		}
	}

	/* Error styles */
	.error {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: #FF6B6B;
		color: #000;
		padding: 1rem;
		border: 4px solid #000;
		margin: 1rem 0;
		transform: rotate(2deg);
	}

	/* Post styles */
	.post {
		background: #4ECDC4;
		border: 4px solid #000;
		padding: 1rem;
		margin-bottom: 1rem;
		transform: rotate(-1deg);
		transition: transform 0.2s;
	}

	.post:hover {
		transform: rotate(0.5deg) translateY(0px);
	}

	.post.collapsed {
		opacity: 0.7;
		background: #95a5a6;
		cursor: pointer;
	}

	.post-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.avatar {
		width: 48px;
		height: 48px;
		border: 3px solid #000;
		border-radius: 0;
		overflow: hidden;
	}

	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.author-info {
		display: flex;
		flex-direction: column;
	}

	.display-name {
		color: #000;
		font-weight: 800;
		font-size: 1.1rem;
	}

	.handle {
		color: #2c3e50;
		font-weight: 600;
	}

	.content {
		background: #fff;
		border: 3px solid #000;
		padding: 1rem;
		margin: 0.5rem 0;
		transform: rotate(0.5deg);
	}

	.post-stats {
		display: flex;
		gap: 0.5rem;
		font-size: 1.25rem;
	}

	.stat {
		background: #FF6B6B;
		border: 2px solid #000;
		padding: 0.5rem;
		font-weight: 600;
	}

	.see-more {
		background: #FFE66D;
		border: 3px solid #000;
		padding: 0.75rem 1.5rem;
		font-weight: 700;
		font-size: 1.1rem;
		cursor: pointer;
		transform: rotate(-1deg);
		transition: transform 0.2s;
		margin: 0.75rem 0;
	}

	.see-more:hover {
		transform: rotate(1deg) translateY(-2px);
		background: #FF6B6B;
	}

	/* Stats styles */
	.stats {
		display: flex;
		gap: 2rem;
		padding: 1rem;
		margin: 0.75rem 0;
		background: #FFE66D;
		border: 4px solid #000;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		transform: rotate(-0.5deg);
		transition: transform 0.2s, background-color 0.2s;
	}

	.stats:hover {
		transform: rotate(0.5deg) translateY(-2px);
		background: #FF6B6B;
	}

	.stat {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		background: transparent;
		border: transparent;
	}

	.icon {
		font-size: 2rem;
	}

	.count {
		font-weight: 700;
		font-size: 1.1rem;
		color: #000;
	}

	/* Collapse bar styles */
	.collapse-bar {
		display: flex;
		align-items: center;
		padding-left: 8px;
		cursor: pointer;
		background: none;
		border: none;
		position: absolute;
		height: 100%;
		left: 24px;
		top: 0px;
		z-index: 1;
	}

	.collapse-bar::after {
		content: "";
		position: absolute;
		left: -5px;
		top: 0;
		bottom: 0;
		width: 4px;
		border-radius: 4px;
		background-color: #EEE;
		display: block;
		transition: background-color 0.2s;
	}

	.collapse-bar:hover::after {
		background-color: #FF6B6B;
	}
</style>
