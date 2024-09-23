---
docName: 'explain_cat_command_ko'
title: 'Explain cat command in Korean'
description: 'Explain cat command in Korean.'
coverImageName: 'ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg'
keywords: ['posix cat', 'linux cat', 'ko']
writtenAt: '2024-09-11 11:00'
updatedAt: '2024-09-11 11:00'
---

# cat

> 파일 출력 및 연결.
> 더 많은 정보: <https://manned.org/cat.1posix>.

- 파일 내용을 `stdout`으로 출력:

```bash
cat {{경로/대상/파일}}
```

- 여러 파일을 출력 파일로 연결:

```bash
cat {{경로/대상/파일1 경로/대상/파일2 ...}} > {{경로/대상/출력_파일}}
```

- 여러 파일을 출력 파일에 추가:

```bash
cat {{경로/대상/파일1 경로/대상/파일2 ...}} >> {{경로/대상/출력_파일}}
```

- 버퍼링 없이 파일 내용을 출력 파일로 복사:

```bash
cat -u {{/dev/tty12}} > {{/dev/tty13}}
```

- `stdin`을 파일로 쓰기:

```bash
cat - > {{경로/대상/파일}}
```

> _src. <https://github.com/tldr-pages/tldr/blob/main/pages.ko/common/cat.md>_
