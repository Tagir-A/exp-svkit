<script>
	import { onMount } from 'svelte'
	import { initAnalytics } from '$src/utils/analytics'

	onMount(async () => {
		initAnalytics()
	})
</script>

<nav>
	<a href=".">Home</a>
	<a href="kubachi">Kubachi</a>
</nav>

<slot />
