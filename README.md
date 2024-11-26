# Bluesky Comments Svelte

A Svelte 5 component for embedding Bluesky comment threads on your website. Easily add Bluesky discussions to your blog posts, documentation, or any web page. 

Comes with default styling, but you can customize it by passing in your own Svelte snippets. Also supports **filtering** and **sorting** options.

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

| ![Screenshot from 2024-11-26 20-34-13](https://github.com/user-attachments/assets/a857b180-7855-41b9-8f32-580e8033069f) | ![Screenshot from 2024-11-26 20-33-14](https://github.com/user-attachments/assets/b7acc756-9152-4ec7-83fc-4720819bdcf0) |
| ------------- | ------------- |
| The default styling with no config. | However adding your own style is very easy thanks to snippets. |


## Customization Options

### Sorting and Filtering

You can customize how the thread loads with the `LoadingOptions` prop:

* `sortBy` currently takes two options, either `likes` or `recent`. Sorts by likes by default.
* `filterFn` takes a full post and return true or false. You can use this to add any filtering logic you want. By default it will filter out pins.

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

Contributions are welcome! This is pretty new territory for me so I would be happy to get feedback on this.

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build the library: `npm run package`

## License

MIT License - See LICENSE file for details.
