import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'bugmi',
  favicon: '/ladybuglogo.png',
  logo: '/ladybuglogo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  publicPath: '/',
  exportStatic: {},
  headScripts: [`var _hmt = _hmt || [];(function() {var hm = document.createElement("script");hm.src = "https://hm.baidu.com/hm.js?928b5a4a4bc7b7e04d7f30eefac14771";var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(hm, s);})();`],
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
