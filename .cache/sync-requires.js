const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("E:\\PRO\\Humane Standards Repo\\portal\\.cache\\dev-404-page.js"))),
  "component---src-templates-advanced-js": hot(preferDefault(require("E:\\PRO\\Humane Standards Repo\\portal\\src\\templates\\advanced.js"))),
  "component---src-templates-page-js": hot(preferDefault(require("E:\\PRO\\Humane Standards Repo\\portal\\src\\templates\\page.js"))),
  "component---src-templates-post-js": hot(preferDefault(require("E:\\PRO\\Humane Standards Repo\\portal\\src\\templates\\post.js")))
}

