// @ts-expect-error - Ignore the TypeScript error
import * as fs from 'fs'

// Get the `index.html` file from the `dist` folder
const indexHtml = fs.readFileSync('dist/index.html', 'utf8')

// Replace `="/` with `="./` in the `index.html` file
const modifiedIndexHtml = indexHtml.replace(/="\//g, '="./')

// Save the modified `index.html` file back to the `dist` folder
fs.writeFileSync('dist/index.html', modifiedIndexHtml)
