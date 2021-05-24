<script>
	import { onMount } from 'svelte'
	import { initAnalytics, trackPage } from '$src/utils/analytics'
	import Kubachi from '../markdown/kubachi.svx'

	onMount(async () => {
		trackPage()
	})
</script>

<Kubachi />
