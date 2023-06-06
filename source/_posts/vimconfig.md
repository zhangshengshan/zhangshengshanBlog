---
title: vimconfig
date: 2023-06-06 14:57:14
tags: vim 
---

# MY CONFIG FOR SPACEVIM

## init.toml
```
#=============================================================================
# basic.toml --- basic configuration example for SpaceVim
# Copyright (c) 2016-2023 Wang Shidong & Contributors
# Author: Wang Shidong < wsdjeg@outlook.com >
# URL: https://spacevim.org
# License: GPLv3
#=============================================================================

# All SpaceVim option below [option] section
[options]
    # set spacevim theme. by default colorscheme layer is not loaded,
    # if you want to use more colorscheme, please load the colorscheme
    # layer
    colorscheme = "gruvbox"
		colorscheme_bg = "dark"
    # Disable guicolors in basic mode, many terminal do not support 24bit
    # true colors
    enable_guicolors = false
    # Disable statusline separator, if you want to use other value, please
    # install nerd fonts
    # statusline_separator = "nil"
    # statusline_iseparator = "bar"
    # buffer_index_type = 4
    # windows_index_type = 3
    enable_tabline_filetype_icon = false
    enable_statusline_mode = false
    statusline_unicode = false
    # Enable vim compatible mode, avoid changing origin vim key bindings
    vimcompatible = true


[options]
    bootstrap_before = "myspacevim#before"
    bootstrap_after  = "myspacevim#after"


[[custom_plugins]]
repo='wellle/targets.vim'
merged=false

[[custom_plugins]]
repo='terryma/vim-expand-region'
merged=false

[[custom_plugins]]
repo='tomtom/tlib_vim'
merged=false

[[custom_plugins]]
repo='mattn/webapi-vim'
merged=false

[[custom_plugins]]
repo='tyru/open-browser.vim'
merged=false

[[custom_plugins]]
repo='mg979/vim-visual-multi'
merged=false

[[custom_plugins]]
repo='tpope/vim-repeat'
merged=false

[[custom_plugins]]
repo='airblade/vim-gitgutter'
merged=false

[[custom_plugins]]
repo='scrooloose/nerdcommenter'
merged=false

[[custom_plugins]]
repo='tpope/vim-fugitive'
merged=false

[[custom_plugins]]
repo='szw/vim-maximizer'
merged=false

[[custom_plugins]]
repo='mattn/emmet-vim'
merged=false

[[custom_plugins]]
repo='vim-scripts/Mark'
merged=false

[[custom_plugins]]
repo='yegappan/mru'
merged=false

[[custom_plugins]]
repo='junegunn/vim-easy-align'
merged=false

[[custom_plugins]]
repo='j5shi/SearchComplete'
merged=false

[[custom_plugins]]
repo='vim-scripts/CmdlineComplete'
merged=false

[[custom_plugins]]
repo='jiangmiao/auto-pairs'
merged=false

[[custom_plugins]]
repo='MattesGroeger/vim-bookmarks'
merged=false

[[custom_plugins]]
repo= 'autowitch/hive.vim'
merged=false

[[custom_plugins]]
repo='github/copilot.vim'
merged=false

[[custom_plugins]]
repo='skywind3000/asyncrun.vim'
merged=false

[[custom_plugins]]
repo="XadillaX/json-formatter.vim"
merged=false


[[custom_plugins]]
repo="godlygeek/tabular"
merged=false

[[custom_plugins]]
repo="vim-scripts/matchit.zip"
merged=false

[[custom_plugins]]
repo='tbodt/deoplete-tabnine'
merged=false

[[custom_plugins]]
repo='wellle/tmux-complete.vim'
merged=false

[[custom_plugins]]
repo='jrozner/vim-antlr'
merged=false

[[custom_plugins]]
repo='MattesGroeger/vim-bookmarks'
merged=false

[[custom_plugins]]
repo='gennaro-tedesco/nvim-peekup'
merged=false

[[custom_plugins]]
repo='tpope/vim-speeddating'
merged=false


[[custom_plugins]]
repo='easymotion/vim-easymotion'
merged=false

[[custom_plugins]]
repo='psf/black'
merged=false

[[custom_plugins]]
repo='lyokha/vim-xkbswitch'
merged=false

[[custom_plugins]]
repo='liuchengxu/graphviz.vim'
merged=false

[[custom_plugins]]
repo='psliwka/vim-smoothie'
merged=false

[[custom_plugins]]
repo='rust-lang/rust.vim'
merged=false


[[custom_plugins]]
repo='racer-rust/vim-racer'
merged=false


[[custom_plugins]]
repo='pangloss/vim-javascript'
merged=false

[[custom_plugins]]
repo='marko-cerovac/material.nvim'
merged=false

[[custom_plugins]]
repo='integralist/vim-mypy'
merged=false

[[custom_plugins]]
repo='leafgarland/typescript-vim'
merge=false

[[custom_plugins]]
repo='ap/vim-css-color'
merge=false
```
