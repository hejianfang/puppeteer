const chance = require('chance').Chance()

/**
 * 基于源文件名，生成随机文件名
 * @param {string} name 源文件名字
 * @param {string} ext 源文件后缀
 */
export function randomFilename (name: string, ext: string) {
  return `${name}_${Date.now()}_${chance.hash({ length: 3 })}${ext}`
}
/**
 * 控制页面自动滚动
 * */
/* ts-ignore */
export function autoScroll (page: any) {
  return page.evaluate(() => {
    return new Promise<void>(resolve => {
      let totalHeight = 0
      const distance = 100
      // 每200毫秒让页面下滑100像素的距离
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight
        window.scrollBy(0, distance)
        totalHeight += distance
        if (totalHeight >= scrollHeight) {
          clearInterval(timer)
          resolve()
        }
      }, 200)
    })
  })
}
