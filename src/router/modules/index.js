const files = require.context(".", false, /\.js$/)

let configRouter = []

files.keys().forEach(key => {
    if (key === "./index.js") return
    configRouter = configRouter.concat(files(key).default)
})
export default configRouter