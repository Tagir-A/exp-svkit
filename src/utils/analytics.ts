import * as Panelbear from '@panelbear/panelbear-js'

let isAnalyticsOn = false

// Load the Panelbear tracker once in your app
export const initAnalytics = () => {
	if (isAnalyticsOn) {
		return
	}
	Panelbear.load('9iGQljPXk4d', { autoTrack: true, honorDNT: true })
	isAnalyticsOn = true
}

export const trackPage = () => {
	initAnalytics()
	Panelbear.trackPageview()
}
