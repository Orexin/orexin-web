# orexin-web

Webová stránka Orexinu

## Jak zfungovat repo pro development

- `git clone https://github.com/Orexin/orexin-web.git`
- `npm i`
- `npm start` (`localhost:6969`)
- **nainstalovat Prettier vscode extension**
- build `npm build` (nefunkční webpack.prod.js config zatím)

snippet '%' => `<img src=\"<%= require('${1:link}') %>\" alt=\"${2}\">`

## Deploy

- `npm run deploy` (nefunkční webpack.prod.js config zatím)

## Ideas

ascii art logo to meta desc

- [ ] nav
- [x] nav background none, při hoveru white background celého navu
- [ ] [nav hover sharing moving underline at first active at that link on which you're on](https://codepen.io/bennettfeely/pen/MxOrLO)
- [ ] respo
- [ ] nabidka section
- [ ] contact form
- [ ] portfolio
- [ ] footer
- [ ] language redirecting (cs/en), onload redirect depending on browser language preference
- [ ] respo
- [ ] activate preloader only if needed, which will solve blink and scroll up on load
- [ ] SEO feature snippet
