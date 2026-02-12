import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Music Player",
  description: "A VitePress Site",
  head: [
    // 引入 LXGW WenKai Screen 字体
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/lxgw-wenkai-screen-webfont@1.1.0/style.css' }],
    // 引入 JetBrains Mono 字体
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/kjartanhr/JetBrainsMono-Webfont@main/JetBrainsMono/JetBrainsMono.css' }]
  ],
  base: '/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '所有歌单', link: '/songs-list' } 
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: '已有歌单', link: '/songs-list' },
          { text: '自行获取', link: '/get-song' }
        ]
      },
      {
        text: '我的收藏',
        items: [
          { text: 'ふたつの影', link: '/songs/futatsu-no-kage' },
          { text: '明け星', link: '/songs/akeboshi' },
          { text: 'アルカテイル', link: '/songs/alka-tale' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
