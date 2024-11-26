<script>
	import BlueskyComments from '$lib/BlueskyComments.svelte';
</script>

<article>
	<h1>The default BlueskyComments component</h1>
	<p>
		It looks like this. It's not awful, but it's not great either. The looks could definitely be
		improved. It does work though.
	</p>
	<p>
		You can customize the look of the component by passing in your own Svelte snippets. This one
		shows the default styling.
	</p>

</article>

<BlueskyComments uri="at://coryzue.com/app.bsky.feed.post/3lbrkypd37224"></BlueskyComments>

<style>
	article {
		max-width: 600px;
		margin: 2rem auto;
	}

	h1 {
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	p {
		line-height: 1.4;
	}
</style>
