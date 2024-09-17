---
docName: 'explain_cat_command_jp'
title: 'Explain cat command in Japanese'
description: 'Explain cat command in Japanese.'
coverImageName: 'mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg'
keywords: ['posix cat', 'linux cat', 'jp']
writtenAt: '2024-09-12 12:00'
updatedAt: '2024-09-12 12:00'
---

# cat

> ファイルの出力と連結を行います。
> 詳しくはこちら: <https://manned.org/cat.1posix>

- ファイルの内容を標準出力に出力する:

`cat {{ファイルパス}}`

- 複数ファイルを連結して 1 つの出力ファイルにする:

`cat {{ファイルパス1 ファイルパス2 ...}} > {{出力ファイルパス}}`

- 複数ファイルを 1 つの出力ファイルに追加する:

`cat {{ファイルパス1 ファイルパス2 ...}} >> {{出力ファイルパス}}`

- ファイルの内容をバッファリング(一時保存)せずに出力ファイルにコピーする:

`cat -u {{/dev/tty12}} > {{/dev/tty13}}`

- `stdin`(標準入力)をファイルに書き込む:

`cat - > {{ファイルパス}}`

> _src. <https://github.com/tldr-pages/tldr/blob/main/pages.ja/common/cat.md>_
