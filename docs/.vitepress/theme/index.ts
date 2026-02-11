import DefaultTheme from 'vitepress/theme'
import './style.css'
import MusicPlayer from '../components/MusicPlayer.vue' 
import SongImporter from '../components/SongImporter.vue'

import type { Theme } from 'vitepress'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: any }) { 
    app.component('MusicPlayer', MusicPlayer)
    app.component('SongImporter', SongImporter)
  }
} satisfies Theme