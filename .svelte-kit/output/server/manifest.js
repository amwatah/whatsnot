export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"start-e438724a.js","js":["start-e438724a.js","chunks/vendor-dc7f6bfc.js","chunks/singletons-d1fb5791.js"],"css":["assets/vendor-d4961c13.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "status",
				pattern: /^\/status\/?$/,
				names: [],
				types: [],
				path: "/status",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "calls",
				pattern: /^\/calls\/?$/,
				names: [],
				types: [],
				path: "/calls",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "chat",
				pattern: /^\/chat\/?$/,
				names: [],
				types: [],
				path: "/chat",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
