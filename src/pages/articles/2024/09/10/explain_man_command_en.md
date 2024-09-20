---
docName: 'explain_man_command_en'
title: 'Explain cat command in English'
description: 'Explain cat command in English.'
coverImageName: 'marnhe-du-plooy-U6u_A5z6mME-unsplash.jpg'
keywords: ['posix cat', 'linux cat', 'en']
writtenAt: '2024-09-10 10:00'
updatedAt: '2024-09-10 10:00'
---

# cat

> Print and concatenate files.
> More information: <https://manned.org/cat.1posix>.

- Print the contents of a file to `stdout`:

`cat {{path/to/file}}`

- Concatenate several files into an output file:

`cat {{path/to/file1 path/to/file2 ...}} > {{path/to/output_file}}`

- Append several files to an output file:

`cat {{path/to/file1 path/to/file2 ...}} >> {{path/to/output_file}}`

- Copy the contents of a file into an output file without buffering:

`cat -u {{/dev/tty12}} > {{/dev/tty13}}`

- Write `stdin` to a file:

`cat - > {{path/to/file}}`

> _src. <https://github.com/tldr-pages/tldr/blob/main/pages/common/cat.md>_