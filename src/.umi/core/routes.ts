import { ApplyPluginsType } from '/Users/hanjiacheng/WebstormProjects/umijswebproject/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('/Users/hanjiacheng/WebstormProjects/umijswebproject/src/.umi/plugin-layout/Layout.tsx').default,
    "routes": [
      {
        "path": "/",
        "component": require('@/pages/bar').default,
        "exact": true
      },
      {
        "path": "/index",
        "component": require('@/pages/index').default,
        "exact": true
      },
      {
        "path": "/list",
        "component": require('@/pages/bar').default,
        "exact": true
      }
    ]
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
