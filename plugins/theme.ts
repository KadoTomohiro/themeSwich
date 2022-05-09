import {Context} from '@nuxt/types/app';

export default (ctx: Context) => {
  // ctx.$axiosとか使ってテーマ取得
  // テーマに必要なキーは型定義した方がいいね
  const theme = Math.random()> 0.5 ? {  // この条件式は深い意味はないので無視してください
    '--base-color': '#bababa',
    '--main-color': '#ff5370',
    '--sub-color': '#ffd1d1',
    '--accent-color': '#6fcb81',
    '--text-color': '#000000'
  } : null
  const root = document.querySelector(':root')

  // とりあえず動かすためのすごく雑な実装なのでこのまま真似しないように
  if (theme && existElement(root)) {

    Object.keys(theme).forEach((themeKey: string) => {
      // @ts-ignore
      root.style.setProperty(themeKey, theme[themeKey])
    })

  }

}

function existElement(elm: Element | null): elm is Element {
  return !!elm
}
