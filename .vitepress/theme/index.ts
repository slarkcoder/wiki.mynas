import Theme from "vitepress/theme"
import googleAnalytics from 'vitepress-plugin-google-analytics'
import './style/var.css'

export default {
	...Theme,
	enhanceApp: (ctx) => {
		googleAnalytics({
		  id: 'G-GZXN8CPFKZ', // Replace with your GoogleAnalytics ID, which should start with the 'G-'
		})
	  }
}