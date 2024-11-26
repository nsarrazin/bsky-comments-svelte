<div class="container">
    <h1>Bluesky Comments</h1>
    <p>A simple, customizable Svelte component for embedding Bluesky comment threads on your website.</p>
    
    <div class="examples">
        <h2>Examples</h2>
        <div class="links">
            <a href="/styled" class="link">Styled Example</a>
            <a href="/unstyled" class="link">Unstyled Example</a>
        </div>
    </div>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 3rem;
    }

    .examples {
        margin-top: 2rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .links {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .link {
        padding: 0.75rem 1.5rem;
        border: 2px solid #1da1f2;
        border-radius: 4px;
        color: #1da1f2;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s;
    }

    .link:hover {
        background: #1da1f2;
        color: white;
    }
</style>
