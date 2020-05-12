import React from 'react';
import { ApplyPluginsType } from 'umi';
import { plugin } from '../core/umiExports';

export default (props) => {
  const runtimeConfig = plugin.applyPlugins({
    key: 'layout',
    type: ApplyPluginsType.modify,
    initialValue: {},
  }) || {};
  const userConfig = {
    ...{'theme':'PRO','locale':false,'showBreadcrumb':true},
    ...runtimeConfig
  };
  return React.createElement(require('/Users/hanjiacheng/WebstormProjects/umijswebproject/node_modules/@umijs/plugin-layout/lib/layout/index.js').default, {
    userConfig,
    ...props
  })
}
