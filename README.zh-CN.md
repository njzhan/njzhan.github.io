# njzhan.github.io — 网站维护指南

**[English version →](README.md)**

北京大学计算机学院 詹乃军 教授个人学术主页。

- **网站地址：** https://njzhan.github.io
- **技术框架：** [Jekyll](https://jekyllrb.com/) + [al-folio](https://github.com/alshedivat/al-folio) 主题
- **部署方式：** 全自动。每次向 `main` 分支推送（push）后，网站会在 1–2 分钟内自动重新生成并发布，无需手动编译或上传任何文件。

---

## 日常修改流程

1. 修改文件（见下方[各页面修改说明](#各页面修改说明)）。
2. 提交并推送（见[提交与推送](#提交与推送)）。
3. 等待 1–2 分钟，刷新 https://njzhan.github.io 查看效果。

如果修改没有生效，请见[常见问题](#常见问题)。

> **少量文字修改的最简方式：** 无需在电脑上安装任何软件。在浏览器中打开 GitHub 上的对应文件，点击 ✏️ 铅笔图标直接编辑，然后点击 **Commit changes** 即可。这是完全正规的做法，GitHub 会自动完成提交与发布。

---

## 各文件对应关系

| 页面            | 网址                | 需要修改的文件                           |
| --------------- | ------------------- | ---------------------------------------- |
| 主页 / 个人简介 | `/`                 | `_pages/about.md`                        |
| 论文列表        | `/Publications/`    | `_bibliography/papers.bib`               |
| 学术服务        | `/Services/`        | `_pages/academic-services.md`            |
| 科研项目        | `/Grants/`          | `_pages/grants.md`                       |
| 学生            | `/Students/`        | `_pages/students.md`                     |
| 教学            | `/Teaching/`        | `_pages/teaching.md`                     |
| 离散数学 2017   | `/teaching/dm2017/` | `_pages/dm2017.md`                       |
| 简历            | `/CV/`              | `_data/cv.yml`（PDF 放在 `assets/pdf/`） |

其他常用文件：

| 内容                                 | 文件                          |
| ------------------------------------ | ----------------------------- |
| 邮箱、Google Scholar、DBLP、简历链接 | `_data/socials.yml`           |
| 网站标题、描述、导航栏姓名           | `_config.yml`                 |
| 个人照片                             | `assets/img/prof_pic.jpg`     |
| 论文 PDF                             | `assets/pdf/papers/`          |
| 软件工具下载（MARS、HHL Prover 等）  | `assets/tools/`               |
| 课程讲义                             | `assets/pdf/teaching/dm2017/` |

每个页面文件开头都有一段位于两行 `---` 之间的内容，称为 _front matter_（页面属性），用于设置标题、网址和导航栏位置。**`---` 下方的正文可以自由修改；除非确实需要移动或重命名页面，否则不要改动 front matter。**

```yaml
---
layout: page
permalink: /Grants/ # 页面网址
title: Grants # 导航栏中显示的名称
nav: true # false 表示不在导航栏显示（但仍可通过网址访问）
nav_order: 3 # 导航栏中从左到右的顺序
---
```

当前导航栏顺序为：About（始终排第一）· Publications · Services · Grants · Students · Teaching。简历页面特意设置为 `nav: false`，即可通过 `/CV/` 访问但不在导航栏中显示。

---

## 各页面修改说明

正文均使用 **Markdown** 格式书写，常用语法如下：

```markdown
## 这是标题

- 这是列表项
- **粗体**、_斜体_
- [链接文字](https://example.com)
```

### 主页（`_pages/about.md`）

包含个人简介、研究兴趣（Research interests）、工具与资源（Tools and resources）以及招生说明。直接修改文字即可。

更换照片：替换 `assets/img/prof_pic.jpg`（保持文件名不变）。修改照片旁的办公地址或邮箱：编辑 front matter 中的 `more_info` 部分。

### 论文列表（`_bibliography/papers.bib`）

这是唯一不使用 Markdown 的页面，由 BibTeX 文件自动生成，**有几条必须遵守的规则**，添加论文前请先阅读本节。

文件分为四个部分，由注释行标记：

```bibtex
% ===== Books and book chapters =====            → @book / @incollection → [B1]、[B2]…
% ===== Edited volumes and special issues =====  → @misc                 → [E1]、[E2]…
% ===== Journal papers =====                     → @article              → [J1]、[J2]…
% ===== Conference and workshop papers =====     → @inproceedings        → [C1]、[C2]…
```

条目的类型（`@article` 等）决定它出现在页面的哪个部分。

#### ⚠️ 三条重要规则

1. **不要重新排序或排列整个文件。** `[J1]`、`[C1]` 这些编号是根据条目在文件中的先后顺序自动生成的。一旦排序，所有论文的编号都会改变，与简历等处引用的编号就对不上了。
2. **新论文要添加到所在部分的最前面**，即紧接在 `% =====` 注释行下方。这样它就成为 `[J1]`（或 `[C1]`），其余条目依次后移——与旧网站的编号方式完全一致。
3. **`booktitle` 不要以 "In" 开头。** 模板会自动添加 "In"，若写成 `booktitle = {In Proc. of CAV 2026}`，页面上会显示为 "In In Proc. of CAV 2026"。

#### 添加期刊论文

先将 PDF 放入 `assets/pdf/papers/`（文件名不要含空格），然后在期刊部分的最前面添加：

```bibtex
@article{zhan2027example,
  bibtex_show = {true},
  abbr = {TOSEM},
  title = {论文标题},
  author = {First Author and Second Author and Naijun Zhan},
  journal = {ACM Transactions on Software Engineering and Methodology, 36(2):1-30},
  year = {2027},
  pdf = {papers/my-new-paper.pdf},
  html = {https://doi.org/10.1145/xxxxxxx},
}
```

#### 添加会议论文

写法相同，仅需将类型改为 `@inproceedings`，并把 `journal` 换成 `booktitle`：

```bibtex
@inproceedings{zhan2027example,
  bibtex_show = {true},
  abbr = {CAV},
  title = {论文标题},
  author = {First Author and Naijun Zhan},
  booktitle = {Proc. of CAV 2027, Lecture Notes in Computer Science 12345, pp.1-20},
  year = {2027},
  pdf = {papers/my-new-paper.pdf},
}
```

#### 字段说明

| 字段                   | 是否必需              | 说明                                                                           |
| ---------------------- | --------------------- | ------------------------------------------------------------------------------ |
| 引用键                 | 必需                  | `{` 后面的 `zhan2027example`，不能与其他条目重复，惯例为「姓+年份+标题首词」。 |
| `title`                | 必需                  | 论文标题。                                                                     |
| `author`               | 必需                  | **每两位作者之间**都要用 `and` 分隔。詹老师的姓名会自动加以强调显示。          |
| `year`                 | 必需                  | 年份。                                                                         |
| `journal`              | `@article` 必需       | 期刊名称、卷号、页码。                                                         |
| `booktitle`            | `@inproceedings` 必需 | 会议名称及论文集信息，不能以 "In" 开头。                                       |
| `publisher`            | `@book` 必需          | 出版社。                                                                       |
| `howpublished`         | `@misc` 必需          | 编著论文集或专刊的详细信息。                                                   |
| `bibtex_show`          | 建议填写              | 填 `{true}` 会显示 "Bib" 按钮。                                                |
| `pdf`                  | 可选                  | `{papers/文件名.pdf}`，路径相对于 `assets/pdf/`。                              |
| `html`                 | 可选                  | DOI 或出版社链接，会显示 "HTML" 按钮。                                         |
| `abbr`                 | 可选                  | 会议或期刊简称，如 `{CAV}`。                                                   |
| `award` / `award_name` | 可选                  | 见下。                                                                         |

#### 标注获奖论文

添加两个字段：`award_name` 是徽章上的简短文字，`award` 是点击徽章后展开的完整说明。

```bibtex
  award = {Best Paper Award at SETTA 2018.},
  award_name = {Best Paper},
```

目前有三篇论文标注了奖项（ATVA 2018、SETTA 2018、HSCC 2025），可在文件中搜索 `award_name` 查看实际写法。

#### 尚未正式发表的论文

会议名称写成 `EMSOFT 2027 (to appear)` 的形式。

### 学术服务（`_pages/academic-services.md`）

包括编委会、指导委员会以及按年份排列的程序委员会。添加新年份时，复制一行已有内容并放在程序委员会列表最前面即可。会议链接格式为 `https://dblp.org/db/conf/<会议名>/`；DBLP 上没有收录的会议使用 `https://dblp.org/search?q=<会议名>`。

### 科研项目（`_pages/grants.md`）

按时间倒序排列的编号列表。编号会自动生成，只需在最前面添加一行，后面的编号会自动顺延。

### 学生（`_pages/students.md`）

依次为在读博士生、硕士生，以及博士、硕士、博士后三类毕业生。学生毕业后，将其从在读名单移到毕业生名单，并注明去向：

```markdown
- 姓名 (now: Assistant Professor, Some University)
```

文件底部有一段被注释掉的本科生名单，如需公开显示，删除包围它的 `<!--` 和 `-->` 标记即可。

### 教学（`_pages/teaching.md` 与 `_pages/dm2017.md`）

`teaching.md` 是课程列表；`dm2017.md` 是离散数学课程页面，讲义存放在 `assets/pdf/teaching/dm2017/`。

如需为其他课程建立页面：复制 `_pages/dm2017.md`，修改 front matter 中的 `permalink` 和 `title`，将讲义放入 `assets/pdf/teaching/` 下的新文件夹，并在 `teaching.md` 中添加链接。

### 简历（`_data/cv.yml`）

`/CV/` 页面上显示的结构化简历内容。更新可下载的简历 PDF 时，将新文件放入 `assets/pdf/`，并**同时**修改以下两处的文件名——注意两处的路径写法不同：

- `_pages/cv.md` → `cv_pdf: Naijun-cv-2022.pdf`（只写文件名）
- `_data/socials.yml` → `cv_pdf: /assets/pdf/Naijun-cv-2022.pdf`（写完整路径）

### 邮箱与学术主页链接（`_data/socials.yml`）

页脚和侧边栏的图标链接来自此文件。

---

## 本地预览（可选）

也可以完全跳过预览直接推送——网站会自动重新生成，即使出错也随时可以再提交一次修正。但改动较大时，建议先预览。

**请使用 Docker**（macOS 自带的 Ruby 版本过旧，无法编译本网站）：

```bash
cd /path/to/njzhan.github.io

# 编译一次，然后用浏览器打开 _site/index.html
docker run --rm -v "$PWD:/srv/jekyll" -e JEKYLL_ENV=production \
  amirpourmand/al-folio:v0.15.0 \
  /bin/bash -c "cd /srv/jekyll && bundle exec jekyll build"

# 或启动实时预览，访问 http://localhost:8080
docker compose up
```

---

## 提交与推送

在项目文件夹中执行：

```bash
# 1. 格式检查——如果跳过这一步，自动检查会报错
npx prettier . --write

# 2. 查看改动了哪些文件
git status

# 3. 暂存、提交、推送
git add -A
git commit -m "Add CAV 2027 paper"
git push origin main
```

查看部署进度（可选）：

```bash
gh run list --branch main --limit 3
```

提交说明请写明具体改动，例如「Add CAV 2027 paper」「Update Wang Ziran's graduation status」，不要只写「update」。

### 如果 `git push` 报「Permission denied」或 403 错误

这通常出现在同一台电脑登录了多个 GitHub 账号时，git 使用了错误的凭据。改用 GitHub CLI 的凭据推送：

```bash
gh auth switch --user njzhan
git -c credential.helper= -c 'credential.helper=!gh auth git-credential' push origin main
```

---

## 常见问题

**推送后网站没有更新。**
等待 2 分钟后强制刷新（`Cmd/Ctrl + Shift + R`）。若仍未更新，检查编译是否失败：执行 `gh run list --branch main --limit 5`，或打开 GitHub 页面的 **Actions** 标签。若 "Deploy site" 显示红色 ✗，说明编译出错，日志中会指出具体文件。

**"Prettier code formatter" 检查失败。**
执行 `npx prettier . --write`，然后重新提交并推送。该检查只负责代码格式，不影响已发布的网站内容。

**某篇论文的编号不对。**
说明该条目在 `_bibliography/papers.bib` 中的位置不对。编号按每个部分内自上而下的顺序生成。

**论文 PDF 链接打不开。**
确认文件确实在 `assets/pdf/papers/` 中，且 `pdf = {papers/...}` 中的文件名完全一致（包括大小写）。文件名请勿使用空格。

**会议名称显示成了 "In In Proc. of…"。**
删除该条目 `booktitle` 开头的 "In"。

**改错了，想撤销。**
所有历史版本都保存在 git 中，不会丢失：

```bash
git log --oneline -10          # 找到最后一次正常的提交
git revert <commit-id>         # 以新提交的方式安全撤销某次修改
git push origin main
```

---

## 目录结构

```
_pages/          各内容页面（Markdown 格式）
_bibliography/   papers.bib —— 完整论文列表
_data/           cv.yml、socials.yml 等结构化数据
assets/
  pdf/papers/    论文 PDF
  pdf/teaching/  课程讲义
  tools/         软件工具下载
  img/           个人照片
_layouts/        页面模板（一般无需修改）
_sass/           样式文件（一般无需修改）
_config.yml      网站全局设置
website/         旧版 lcs.ios.ac.cn 网站的存档，已被 git 忽略，不会发布
```

`_site/` 是自动生成的结果目录，请勿修改，每次编译都会被覆盖。

---

## 开发者注意事项

本站对 al-folio 主题做了若干有意的定制。若日后升级主题，请保留以下改动：

- `_layouts/bib.liquid` 中的 `[B1]/[E1]/[J1]/[C1]` 编号由服务端生成，使用 jekyll-scholar 提供的分节 `index` 变量，并由页面 front matter 中的 `pub_index_labels: true` 控制。最初尝试过用 CSS 计数器，但**不可行**：CSS 计数器不会在 `display: none` 的元素上递增，导致使用论文搜索框筛选时编号会被悄悄重排。
- 编号所在的 `<span>` 必须放在 Bootstrap 栅格列**之外**。因为这些列带有 `position: relative`，若把绝对定位的编号放在列内，它会以列为定位基准，从而与论文标题重叠。
- `bib.liquid` 还补充了 `@book`（`publisher`）和 `@misc`（`howpublished`）的出版信息渲染，主题原版完全没有输出这两类。
- `_pages/publications.md` 中按条目类型分别调用了四次 `{% bibliography %}`，均使用 `--group_by none`。请保持每个 `<h2 class="bibliography">` 下只有一个 `<ol>`，否则搜索框隐藏空分节的逻辑会出错。
- 论文缩略图和主页「精选论文」区块已有意关闭（`enable_publication_thumbnails: false`、`selected_papers: false`）。

---

## 致谢

本站基于 [al-folio](https://github.com/alshedivat/al-folio) Jekyll 主题构建，遵循 MIT 许可证，详见 [LICENSE](LICENSE)。主题文档：[INSTALL.md](INSTALL.md)、[CUSTOMIZE.md](CUSTOMIZE.md)、[FAQ.md](FAQ.md)。
