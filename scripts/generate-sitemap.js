require('dotenv').config();
const fs = require('fs');
const path = require('path');

const pages = ['/', '/about', '/hair', '/beards', '/shaves', '/duo-packages', '/gift-certificates'];

const sitemap = pages.map((page) => `${process.env.REACT_APP_DOMAIN}${page}`).join('\n');

fs.writeFileSync(path.resolve(__dirname, '../public/sitemap.txt'), sitemap);
