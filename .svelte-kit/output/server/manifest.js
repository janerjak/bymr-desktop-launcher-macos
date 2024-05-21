export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BPZgr3Bw.js","app":"_app/immutable/entry/app.CNdYrHpg.js","imports":["_app/immutable/entry/start.BPZgr3Bw.js","_app/immutable/chunks/entry.Crvd8aMT.js","_app/immutable/chunks/scheduler.BvZPyRWq.js","_app/immutable/chunks/index.DjWMz06n.js","_app/immutable/entry/app.CNdYrHpg.js","_app/immutable/chunks/scheduler.BvZPyRWq.js","_app/immutable/chunks/index.rAyYiyK0.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
