# Bluesky Comments Svelte

A Svelte 5 component for embedding Bluesky comment threads on your website. Easily add Bluesky discussions to your blog posts, documentation, or any web page. 

Comes out of the box with default styling, but is highly customizable by passing in your own Svelte snippets. Also supports filtering and sorting options.

## Installation

```bash
npm i -D bsky-comments-svelte
```

## Basic Usage

```svelte
<script>
  import { BlueskyComments } from 'bsky-comments-svelte';
</script>

<BlueskyComments uri="https://bsky.app/<profile>/post/<post-uri>" />
```

The URI can be either:
- An AT Protocol URI (e.g., `at://did:plc:user/app.bsky.feed.post/threadid`)
- A Bluesky web URL (e.g., `https://bsky.app/profile/user.bsky.social/post/threadid`)

## Customization Options

### Loading Options

You can customize how the thread loads with the `LoadingOptions` prop:

```svelte
<BlueskyComments 
  uri="at://your-post-uri"
  LoadingOptions={{
    sortBy: 'likes', // 'likes' or 'recent'
    filterFn: (post) => post.record.text !== '📌', // Custom filter function for which posts to show
  }}
/>
```

### Styling Components

The component is highly customizable by passing Svelte 5 snippets. You can override any of the default components:

- `LoaderSnippet` - Loading indicator
- `ErrorSnippet` - Error display
- `PostStatsSnippet` - Post statistics (likes, replies, reposts)
- `PostSnippet` - Individual post display
- `SeeMoreSnippet` - "Show more" button
- `CollapseBarSnippet` - Thread collapse controls

```svelte
<BlueskyComments uri="at://your-post-uri">
  {#snippet LoaderSnippet()}
    <div>Loading...</div>
  {/snippet}

  {#snippet PostSnippet({ post, collapsed, setCollapsed })}
    <div class:collapsed>
      <img src={post.author.avatar} alt={post.author.displayName} />
      <div class="content">
        <h3>{post.author.displayName}</h3>
        <p>{post.record.text}</p>
      </div>
    </div>
  {/snippet}
</BlueskyComments>
```

## Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build the library: `npm run package`

## License

MIT License - See LICENSE file for details.

