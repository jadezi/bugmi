import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'bugmi',
  favicon: 'http://pic2.wangez.cn/ladybuglogo.png',
  logo: 'http://pic2.wangez.cn/ladybuglogo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  sitemap:{ hostname: "https://wangez.cn", excludes: ["https://wangez.cn/umi.js","https://wangez.cn/umi.css"] }
  // more config: https://d.umijs.org/config
});
