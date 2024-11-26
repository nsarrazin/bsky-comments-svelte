<div class="loading">
	<div class="spinner"></div>
</div>

<style>
	.spinner {
		width: 2rem;
		height: 2rem;
		border: 3px solid #eee;
		border-top-color: #666;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}
	.loading {
		display: flex;
		justify-content: center;
		padding: 2rem;
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
