import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'bugmi',
  favicon: '/ladybuglogo.png',
  logo: '/ladybuglogo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: '/',
  exportStatic: {},
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '我的博客',
      path: 'https://u.wangez.cn/b2',
    },
    {
      title: '笔记',
      path: '/notebook',
      // 可通过如下形式嵌套二级导航菜单，目前暂不支持更多层级嵌套：
      children: [
        { title: 'Linux', path: '/notebook/linux/docker' },
      ],
    },
  ],
  sitemap:{ hostname: "https://wangez.cn", excludes: ["https://wangez.cn/umi.js","https://wangez.cn/umi.css"] }
  // more config: https://d.umijs.org/config
});
