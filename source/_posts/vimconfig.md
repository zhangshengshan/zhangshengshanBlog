---
title: vimconfig
date: 2023-06-06 14:57:14
tags: vim 
---

# MY CONFIG FOR SPACEVIM

## BASIC CONFIG 
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


## CUSTOM CONFIG 
```
function! myspacevim#before() abort
 call SpaceVim#custom#SPCGroupName(['G'], '+TestGroup')
 call SpaceVim#custom#SPC('nore', ['G', 't'], 'echom 1', 'echomessage 1', 1)
  " let profile = SpaceVim#mapping#search#getprofile('rg')
" let default_opt = profile.default_opts + ['--no-ignore-vcs']
" call SpaceVim#mapping#search#profile({'rg' : {'default_opts' : default_opt}})

set clipboard+=unnamed
"禁止生成临时文件
set noswapfile
" 光标移动到buffer的顶部和底部时保持3行距离
map <leader><leader>h :MRU<CR> 

func! SqlToUpper()
    %s/\<select\>\|\<from\>\|\<as\>\|\<where\>\|\<if\>\|\<not\>\|\<group\>\|\<by\>\|\<left\>\|\<right\>\|\<join\>\|\<outer\>\|\<full\>\|\<to_date\>\|\<from_unixtime\>\|\<unixtime_stamp\>\|\<when\>\|\<case\>\|\<then\>\|\<max\>\|\<min\>\|\<avg\>\|\<end\>\|\<else\>\|\<and\>\|\<or\>\|\<on\>\|\<count\>\|\<sum\>|\<use\>|\<limit\>/\U&/g
    %s/\<add\>\|\<admin\>\|\<after\>\|\<analyze\>\|\<archive\>\|\<asc\>\|\<before\>\|\<bucket\>\|\<buckets\>\|\<cascade\>\|\<change\>\|\<cluster\>\|\<clustered\>\|\<clusterstatus\>\|\<collection\>\|\<columns\>\|\<comment\>\|\<compact\>\|\<compactions\>\|\<compute\>\|\<concatenate\>\|\<continue\>\|\<data\>\|\<databases\>\|\<datetime\>\|\<day\>\|\<dbproperties\>\|\<deferred\>\|\<defined\>\|\<delimited\>\|\<dependency\>\|\<desc\>\|\<directories\>\|\<directory\>\|\<disable\>\|\<distribute\>\|\<elem_type\>\|\<enable\>\|\<escaped\>\|\<exclusive\>\|\<explain\>\|\<export\>\|\<fields\>\|\<file\>\|\<fileformat\>\|\<first\>\|\<format\>\|\<formatted\>\|\<functions\>\|\<hold_ddltime\>\|\<idxproperties\>\|\<ignore\>\|\<index\>\|\<indexes\>\|\<inpath\>\|\<inputdriver\>\|\<inputformat\>\|\<items\>\|\<jar\>\|\<keys\>\|\<key_type\>\|\<limit\>\|\<lines\>\|\<load\>\|\<location\>\|\<lock\>\|\<locks\>\|\<logical\>\|\<long\>\|\<mapjoin\>\|\<materialized\>\|\<metadata\>\|\<minus\>\|\<minute\>\|\<month\>\|\<msck\>\|\<noscan\>\|\<no_drop\>\|\<offline\>\|\<option\>\|\<outputdriver\>\|\<outputformat\>\|\<overwrite\>\|\<owner\>\|\<partitioned\>\|\<partitions\>\|\<plus\>\|\<pretty\>\|\<principals\>\|\<protection\>\|\<purge\>\|\<read\>\|\<readonly\>\|\<rebuild\>\|\<recordreader\>\|\<recordwriter\>\|\<regexp\>\|\<reload\>\|\<rename\>\|\<repair\>\|\<replace\>\|\<replication\>\|\<restrict\>\|\<rewrite\>\|\<rlike\>\|\<role\>\|\<roles\>\|\<schema\>\|\<schemas\>\|\<second\>\|\<semi\>\|\<serde\>\|\<serdeproperties\>\|\<server\>\|\<sets\>\|\<shared\>\|\<show\>\|\<show_database\>\|\<skewed\>\|\<sort\>\|\<sorted\>\|\<ssl\>\|\<statistics\>\|\<stored\>\|\<streamtable\>\|\<string\>\|\<struct\>\|\<tables\>\|\<tblproperties\>\|\<temporary\>\|\<terminated\>\|\<tinyint\>\|\<touch\>\|\<transactions\>\|\<unarchive\>\|\<undo\>\|\<uniontype\>\|\<unlock\>\|\<unset\>\|\<unsigned\>\|\<uri\>\|\<use\>\|\<utc\>\|\<utctimestamp\>\|\<value_type\>\|\<view\>\|\<while\>\|\<year\>\<all\>\|\<alter\>\|\<and\>\|\<array\>\|\<as\>\|\<authorization\>\|\<between\>\|\<bigint\>\|\<binary\>\|\<boolean\>\|\<both\>\|\<by\>\|\<case\>\|\<cast\>\|\<char\>\|\<column\>\|\<conf\>\|\<create\>\|\<cross\>\|\<cube\>\|\<current\>\|\<current_date\>\|\<current_timestamp\>\|\<cursor\>\|\<database\>\|\<decimal\>\|\<delete\>\|\<describe\>\|\<distinct\>\|\<double\>\|\<drop\>\|\<else\>\|\<end\>\|\<exchange\>\|\<exists\>\|\<extended\>\|\<external\>\|\<fetch\>\|\<float\>\|\<following\>\|\<for\>\|\<from\>\|\<full\>\|\<function\>\|\<grant\>\|\<group\>\|\<grouping\>\|\<having\>\|\<if\>\|\<import\>\|\<in\>\|\<inner\>\|\<insert\>\|\<int\>\|\<intersect\>\|\<interval\>\|\<into\>\|\<is\>\|\<join\>\|\<lateral\>\|\<left\>\|\<less\>\|\<like\>\|\<local\>\|\<macro\>\|\<map\>\|\<more\>\|\<not\>\|\<null\>\|\<of\>\|\<on\>\|\<or\>\|\<order\>\|\<out\>\|\<outer\>\|\<over\>\|\<partialscan\>\|\<partition\>\|\<percent\>\|\<preceding\>\|\<preserve\>\|\<procedure\>\|\<range\>\|\<reads\>\|\<reduce\>\|\<revoke\>\|\<right\>\|\<rollup\>\|\<row\>\|\<rows\>\|\<select\>\|\<set\>\|\<smallint\>\|\<table\>\|\<tablesample\>\|\<then\>\|\<timestamp\>\|\<to\>\|\<transform\>\|\<trigger\>\|\<truncate\>\|\<unbounded\>\|\<union\>\|\<uniquejoin\>\|\<update\>\|\<user\>\|\<using\>\|\<utc_tmestamp\>\|\<values\>\|\<varchar\>\|\<when\>\|\<where\>\|\<window\>\|\<with\>/\U&/g
endfunc

augroup black_on_save
  autocmd!
  autocmd BufWritePre *.py Black
augroup end

let g:XkbSwitchEnabled = 1
map <leader>ma :ma 
xmap ga <Plug>(EasyAlign)
nmap ga <Plug>(EasyAlign)

" fun! DeleteAllBuffersInWindow()
    " let s:curWinNr = winnr()
    " if winbufnr(s:curWinNr) == 1
        " ret
    " endif
    " let s:curBufNr = bufnr("%")
    " exe "bn"
    " let s:nextBufNr = bufnr("%")
    " while s:nextBufNr != s:curBufNr
        " exe "bn"
        " exe "bdel ".s:nextBufNr
        " let s:nextBufNr = bufnr("%")
    " endwhile
" endfun

" map <leader><leader>bda     :call DeleteAllBuffersInWindow()
map <leader><leader>- :ChooseWin<CR>
let g:choosewin_overlay_enable = 1


map <leader><leader>f :!black %<CR>

" map <leader><leader>s <Plug>(easymotion-s)
" map <leader><leader>f <Plug>(easymotion-f)
nmap <Leader>; <Plug>(easymotion-next)
nmap <Leader>, <Plug>(easymotion-prev)
" map <Leader><leader> <Plug>(easymotion-prefix)
" nmap gw        :InteractiveWindow<CR>
" nmap <leader>w :InteractiveWindow<CR>
nmap ]h <Plug>(GitGutterNextHunk)
nmap [h <Plug>(GitGutterPrevHunk)

hi   MarkWord1    ctermbg=Cyan           ctermfg=Black    guibg=#FFDAB9 guifg=Black
hi   MarkWord2    ctermbg=Green          ctermfg=Black    guibg=#2F4F4F guifg=Black
hi   MarkWord3    ctermbg=Yellow         ctermfg=Black    guibg=#191970 guifg=Black
hi   MarkWord4    ctermbg=Red            ctermfg=Black    guibg=#40E0D0 guifg=Black
hi   MarkWord5    ctermbg=Magenta        ctermfg=Black    guibg=#00FF00 guifg=Black
hi   MarkWord6    ctermbg=Blue           ctermfg=Black    guibg=#FFFF00 guifg=Black
hi   MarkWord7    ctermbg=Brown          ctermfg=Black    guibg=#D2691E guifg=Black
hi   MarkWord8    ctermbg=LightCyan      ctermfg=Red      guibg=#FF0000 guifg=Black
hi   MarkWord9    ctermbg=LightGreen     ctermfg=Red      guibg=#9400D3 guifg=Black
hi   MarkWord10   ctermbg=LightYellow    ctermfg=Red      guibg=#CDB38B guifg=Black
hi   MarkWord11   ctermbg=LightRed       ctermfg=Red      guibg=#27408B guifg=Black
hi   MarkWord12   ctermbg=LightMagenta   ctermfg=Red      guibg=#E0FFFF guifg=Black
hi   MarkWord13   ctermbg=LightBlue      ctermfg=Red      guibg=#00CD00 guifg=Black
hi   MarkWord14   ctermbg=DarkBlue       ctermfg=Blue     guibg=#FFEC8B guifg=Black
hi   MarkWord15   ctermbg=DarkGreen      ctermfg=Blue     guibg=#FFD700 guifg=Black
hi   MarkWord16   ctermbg=DarkCyan       ctermfg=Blue     guibg=#8B658B guifg=Black
hi   MarkWord17   ctermbg=DarkRed        ctermfg=Blue     guibg=#8B3A3A guifg=Black
hi   MarkWord18   ctermbg=DarkMagenta    ctermfg=Blue     guibg=#FF7F24 guifg=Black
hi   MarkWord19   ctermbg=DarkYellow     ctermfg=Blue     guibg=#CD2626 guifg=Black
hi   MarkWord20   ctermbg=DarkGray       ctermfg=Blue     guibg=#FF7F00 guifg=Black


noremap <leader><leader>ff :<C-U><C-R>=printf("Leaderf file %s", "")<CR><CR>
noremap <leader><leader>fm :<C-U><C-R>=printf("Leaderf mru %s", "")<CR><CR>
noremap <leader><leader>fh :Leaderf cmdHistory <CR>
noremap <leader><leader>ft :<C-U><C-R>=printf("Leaderf tag %s", "")<CR><CR>
noremap <leader><leader>fr :<C-U><C-R>=printf("Leaderf --recall")<CR><CR>
noremap <C-G> :<C-U><C-R>=printf("Leaderf! rg --current-buffer -e %s ", expand("<cword>"))<CR>
noremap <C-F> :<C-U><C-R>=printf("Leaderf! rg --stayOpen -g '*.hql' -e %s  ", expand("<cword>"))<CR>
noremap  fr :<C-U>Leaderf! rg --recall<CR>

let g:Lf_GtagsAutoGenerate = 0
let g:Lf_Gtagslabel = 'native-pygments'


:imap <C-J> <Plug>snipMateNextOrTrigger
:smap <C-J> <Plug>snipMateNextOrTrigger

let g:netrw_nogx = 1 " disable netrw's gx mapping.

nmap <leader>gx :OpenBrowser <c-r><c-a><CR>
vmap <leader>gx :OpenBrowser <c-r><c-a><CR>

function! HandleURL()
  let s:uri = matchstr(getline("."), '[a-z]*:\/\/[^ >,;]*')
  echo s:uri
  if s:uri != ""
    execute "!open '".s:uri."'"
  else
    echo "No URI found in line."
  endif
endfunction
map <leader><leader>u :call HandleURL()<cr>

map <leader><leader>gs :Gstatus<CR> 

" https://data.bytedance.net/coral/datamap/detail/table_info/HiveTable/ea_rpt/{query}/block_info#group=default
" https://data.bytedance.net/coral/datamap/detail/data_preview/HiveTable/ea_rpt/{query}=default
let g:openbrowser_search_engines = {
\   'stg':'https://data.bytedance.net/coral/datamap/detail/table_info/hive/ea_stg/{query}',
\   'ods':'https://data.bytedance.net/coral/datamap/detail/table_info/hive/ea_ods/{query}',
\   'mds':'https://data.bytedance.net/coral/datamap/detail/table_info/hive/ea_mds/{query}',
\   'dm' :'https://data.bytedance.net/coral/datamap/detail/table_info/hive/ea_dm/{query}',
\   'rpt':'https://data.bytedance.net/coral/datamap/detail/table_info/hive/ea_rpt/{query}',
\   'coral': 'https://data.bytedance.net/coral/datamap_new/result?query={query}',
\   'trans': 'https://translate.google.com.hk/?sl=zh-CN&tl=en&text={query}&op=translate',
\   'manta':'https://data.bytedance.net/manta/monitor/hive?current=1&is_trigger=false&limit=10&monitor_state=all&monitor_types=all&projects=cn_532&query={query}&search_type=db_tb_name&type=cn',
\   'self':'https://data.bytedance.net/manta/rule/hive/sql?alarm_level=all&is_myself=false&is_trigger=false&monitor_state=all&monitor_types=all&query={query}&search_type=monitor_name&type=cn&projects=cn_532',
\   'manta_report':'https://data.bytedance.net/manta/datacheck/list?is_myself=false&query={query}&search_type=db_tb_name&type=cn'
\}
nmap <leader>gg :OpenBrowserSearch <C-R>=expand("<cword>")<CR><CR>
nmap <leader>gt :OpenBrowserSearch -trans <C-R>=expand("<cword>")<CR><CR>

func! MantaReport()
    let l:engine = expand("<cWORD>")
    echom l:engine
    execute 'silent :OpenBrowserSearch -manta_report ' . l:engine
endfunc

func! Manta()
    let l:engine = expand("<cword>")
    echom l:engine
    execute 'silent :OpenBrowserSearch -manta ' . l:engine
    " execute 'silent :OpenBrowserSearch -self ' . l:engine
endfunc

func! EchoCword()
    let l:cword= expand("<cword>")
    echom l:cword
endfunc

func! AccessCoral()

    let l:engine = expand("<cword>")
    echom l:engine
    
    if( stridx(l:engine, "stg") == 0 ) 
        " echom "stg"
        execute 'silent :OpenBrowserSearch -stg ' . l:engine
        execute 'silent :OpenBrowserSearch -uatstg ' . l:engine
    elseif(stridx(l:engine, "ods") == 0)
        " echom "ods"
        execute ':OpenBrowserSearch -ods ' . l:engine
        execute ':OpenBrowserSearch -uatods ' . l:engine
    elseif(stridx(l:engine, "mds") == 0)
        " echom "mds"
        execute ':OpenBrowserSearch -mds ' . l:engine
        execute ':OpenBrowserSearch -uatmds ' . l:engine
    elseif(stridx(l:engine, "dm") == 0)
        " echom "dm"
        execute ':OpenBrowserSearch -dm ' . l:engine
        execute ':OpenBrowserSearch -uatdm ' . l:engine
    elseif(stridx(l:engine, "rpt") == 0)
        " echom "rpt"
        execute ':OpenBrowserSearch -rpt ' . l:engine
        execute ':OpenBrowserSearch -uatrpt ' . l:engine
    elseif(stridx(l:engine, "http") == 0)
        execute ':OpenBrowser()' 
    else
        echom "coral"
        execute ':OpenBrowserSearch -coral ' . l:engine
    endif
endfunc

let g:Lf_NumberOfHighlight=1



func! Findtable()
    let l:table_name = expand("<cword>")
    echo l:table_name
    execute ':/).*' . l:table_name
endfunc


" don't show the help in normal mode
let g:Lf_HideHelp = 1
let g:Lf_UseCache = 0
let g:Lf_UseVersionControlTool = 0
let g:Lf_IgnoreCurrentBufferName = 1
" popup mode
" let g:Lf_WindowPosition = 'right'
"
let g:Lf_ShowDevIcons = 1
let g:Lf_WindowHeight = 0.2                               
let g:Lf_PreviewInPopup = 1
let g:Lf_StlSeparator = { 'left': "\ue0b0", 'right': "\ue0b2", 'font': "DejaVu Sans Mono for Powerline" }
let g:Lf_ShowRelativePath = 1
let g:Lf_PreviewResult = {
        \ 'File': 1,
        \ 'Buffer': 1,
        \ 'Mru': 1,
        \ 'Tag': 1,
        \ 'BufTag': 1,
        \ 'Function': 1,
        \ 'Line': 1,
        \ 'Colorscheme': 1,
        \ 'Rg': 1,
        \ 'Gtags': 1
        \}

let g:Lf_PreviewHorizontalPosition = 'right'                    
let g:Lf_ShortcutF ='<leader>w'

map = <Plug>(expand_region_expand)
map - <Plug>(expand_region_shrink)
let g:mwDefaultHighlightingPalette = 'maximum'
" nnoremap <silent><Leader>m m

" Plugin key-mappings.
" Note: It must be "imap" and "smap".  It uses <Plug> mappings.
imap <C-k>     <Plug>(neosnippet_expand_or_jump)
smap <C-k>     <Plug>(neosnippet_expand_or_jump)
xmap <C-k>     <Plug>(neosnippet_expand_target)

" SuperTab like snippets behavior.
" Note: It must be "imap" and "smap".  It uses <Plug> mappings.
"imap <expr><TAB>
" \ pumvisible() ? "\<C-n>" :
" \ neosnippet#expandable_or_jumpable() ?
" \    "\<Plug>(neosnippet_expand_or_jump)" : "\<TAB>"
smap <expr><TAB> neosnippet#expandable_or_jumpable() ?
\ "\<Plug>(neosnippet_expand_or_jump)" : "\<TAB>"

" For conceal markers.
if has('conceal')
  set conceallevel=2 concealcursor=niv
endif


" Enable snipMate compatibility feature.
let g:neosnippet#enable_snipmate_compatibility = 1

" Tell Neosnippet about the other snippets
let g:neosnippet#snippets_directory='~/.vim_back/bundle/vim-snippets/snippets'

imap <silent><script><expr> <C-J> copilot#Accept("\<CR>")
let g:copilot_no_tab_map = v:true
" for .hql files
au BufNewFile,BufRead *.hql set filetype=hive expandtab

au BufNewFile,BufRead *.hql set filetype=hive expandtab

let g:Lf_ShowRelativePath=1
map <leader>cc <plug>NERDCommenterToggle

imap <silent><script><expr> <C-J> copilot#Accept("\<CR>")
let g:copilot_no_tab_map = v:true


"
" Help Vim recognize *.sbt and *.sc as Scala files
au BufRead,BufNewFile *.sbt,*.sc set filetype=scala

" Used to expand decorations in worksheets
" nmap <Leader>ws <Plug>(coc-metals-expand-decoration)
"" Toggle panel with Tree Views
"nnoremap <silent> <space>t :<C-u>CocCommand metals.tvp<CR>
"" Toggle Tree View 'metalsPackages'
"nnoremap <silent> <space>tp :<C-u>CocCommand metals.tvp metalsPackages<CR>
"" Toggle Tree View 'metalsCompile'
"nnoremap <silent> <space>tc :<C-u>CocCommand metals.tvp metalsCompile<CR>
"" Toggle Tree View 'metalsBuild'
"nnoremap <silent> <space>tb :<C-u>CocCommand metals.tvp metalsBuild<CR>
"" Reveal current current class (trait or object) in Tree View 'metalsPackages'
"nnoremap <silent> <space>tf :<C-u>CocCommand metals.revealInTreeView metalsPackages<CR>




" How to open the generated output file.
" If does not exist, graphviz.vim will automatically choose the right way depending on the platform.
let g:graphviz_viewer = 'open'
let g:graphviz_output_format = 'svg'


map <leader>gvs :GraphvizShow<CR>
map <leader>gvc :GraphvizCompile<CR>
map <leader>gvg :!dot -Tsvg % -o ~/Desktop/output.svg && open ~/Desktop/output.svg <CR>
function! MyGraphViz()
    :Graphviz!!
endfunction


if exists(":Tabularize")
  nmap <Leader>a= :Tabularize /=<CR>
  vmap <Leader>a= :Tabularize /=<CR>
  nmap <Leader>a: :Tabularize /:\zs<CR>
  vmap <Leader>a: :Tabularize /:\zs<CR>
endif

inoremap <silent> <Bar>   <Bar><Esc>:call <SID>align()<CR>a

function! s:align()
  let p = '^\s*|\s.*\s|\s*$'
  if exists(':Tabularize') && getline('.') =~# '^\s*|' && (getline(line('.')-1) =~# p || getline(line('.')+1) =~# p)
    let column = strlen(substitute(getline('.')[0:col('.')],'[^|]','','g'))
    let position = strlen(matchstr(getline('.')[0:col('.')],'.*|\s*\zs.*'))
    Tabularize/|/l1
    normal! 0
    call search(repeat('[^|]*|',column).'\s\{-\}'.repeat('.',position),'ce',line('.'))
  endif
endfunction


" let g:spacevim_project_auto_root=0

let g:spacevim_project_auto_root='current'

non_root = 'current'_create.py " . l:db . " " . l:tb
endfunction 

function! DoradoOpen()
  let l:keyword= expand("<cWORD>")
  execute ":AsyncRun python ~/opt/tools/common_open.py " . " dorado_open " . l:keyword
endfunction 

function! DoradoIdOpen()
  let l:keyword= expand("<cWORD>")
  execute ":AsyncRun python ~/opt/tools/common_open.py " . " dorado_id_open " . l:keyword
endfunction 

function! AllCoralOpen()
	let l:keyword= expand("<cWORD>")
	" execute ":AsyncRun python ~/opt/tools/common_open.py " "coral_field"   . " " . l:keyword
	" execute ":AsyncRun python ~/opt/tools/common_open.py " "coral_block"   . " " . l:keyword
	" execute ":AsyncRun python ~/opt/tools/common_open.py " "coral_preview" . " " . l:keyword
	" execute ":AsyncRun python ~/opt/tools/common_open.py " "coral_produce" . " " . l:keyword
	execute "!python ~/opt/tools/common_open.py " "coral_field"   . " " . l:keyword
	execute "!python ~/opt/tools/common_open.py " "coral_block"   . " " . l:keyword
	execute "!python ~/opt/tools/common_open.py " "coral_preview" . " " . l:keyword
	execute ":AsyncRun python ~/opt/tools/common_open.py " "coral_produce" . " " . l:keyword
    " sleep 10
endfunction 

function! DirectUrl()
	execute ":!python ~/opt/tools/multi_open.py " . @z
endfunction 

function! VisualSelection()
    if mode()=="v"
        let [line_start, column_start] = getpos("v")[1:2]
        let [line_end, column_end] = getpos(".")[1:2]
    else
        let [line_start, column_start] = getpos("'<")[1:2]
        let [line_end, column_end] = getpos("'>")[1:2]
    end

    if (line2byte(line_start)+column_start) > (line2byte(line_end)+column_end)
        let [line_start, column_start, line_end, column_end] =
        \   [line_end, column_end, line_start, column_start]
    end
    let lines = getline(line_start, line_end)
    if len(lines) == 0
            return ['']
    endif
    if &selection ==# "exclusive"
        let column_end -= 1 "Needed to remove the last character to make it match the visual selction
    endif
    if visualmode() ==# "\<C-V>"
        for idx in range(len(lines))
            let lines[idx] = lines[idx][: column_end - 1]
            let lines[idx] = lines[idx][column_start - 1:]
        endfor
    else
        let lines[-1] = lines[-1][: column_end - 1]
        let lines[ 0] = lines[ 0][column_start - 1:]
    endif

	let ret = join(lines, ",")
    " echo ret
    " echom ret
	call setreg('z', ret)
    " execute ":!python ~/opt/tools/multi_open.py " . @z
	return ret
endfunction

function! GetDdl() abort
  let l:dbtb=expand("<cWORD>")
  echo l:dbtb
  execute ":AsyncRun python ~/opt/tools/ddl.py " . l:dbtb 
endfunction

function! GetTask() abort
  let l:dbtb=expand("<cWORD>")
  echo l:dbtb
  execute ":AsyncRun python ~/opt/tools/task.py " . l:dbtb 
endfunction

map <leader><leader>m :MaximizerToggle <CR>
map <F10> :call MyGraphViz()<CR>
map <F2> :MaximizerToggle<CR>
map <F4> :call Findtable()<CR>
map <F5> :call TritonAuthApply()<CR>
map <F6> :call SqlToUpper()<CR>
map <F7> :call PlantumlOpen()<CR>
map <F8> :call Manta()<CR>
map <F9> :call AccessCoral()<CR>
map <leader>ca :call AllCoralOpen()<CR>
map <leader>dh :call SubStitute()<CR>
map <leader>do :call DoradoOpen()<CR>
map <leader>dp :call DataPreview()<CR>
map <leader>dt :call DoradoIdOpen()<CR>
map <leader>mc :call MantaDataExploreCreate()<CR>
map <leader>mp :call MantaReport()<CR>

function! MultiOpenFunc()

    let l:content = VisualSelection()
    echom l:content 
    " sleep 5
    execute ":!python ~/opt/tools/multi_open.py " . l:content

endfunction 
function! CoralBatchOp(func_select)
    let l:content = VisualSelection()

    echom l:content
    echom "==================================="
    echom a:func_select
    echom "==================================="

    if a:func_select ==# "dorado_open_batch"
        execute ":!python ~/opt/tools/common_open.py " . "dorado_open_batch" . " " .  l:content
    elseif a:func_select ==# "dorado_id_open_batch"
        execute ":!python ~/opt/tools/common_open.py " . "dorado_id_open_batch" . " " .  l:content
    elseif a:func_select ==# "coral_field_batch"
        execute ":!python ~/opt/tools/common_open.py " . "coral_field_batch" . " " .  l:content
    elseif a:func_select ==# "coral_block_batch"
        execute ":!python ~/opt/tools/common_open.py " . "coral_block_batch" . " " .  l:content
    elseif a:func_select ==# "coral_preview_batch"
        execute ":!python ~/opt/tools/common_open.py " . "coral_preview_batch" . " " .  l:content
    elseif a:func_select ==# "coral_produce_batch"
        execute ":!python ~/opt/tools/common_open.py " . "coral_produce_batch" . " " .  l:content
    endif 
    " sleep 5

endfunction

function! OpenInstances()

    let l:content = VisualSelection()
    echom l:content
    execute ":!python /Users/bytedance/opt/tools/instance.py " . l:content 
    sleep 5

endfunction

if !has('python3')
  echo "Error: Required vim compiled with +python3"
  finish
endif


xnoremap <Leader>dm :<C-u>call MultiOpenFunc()<CR> 

map <leader>dg :call GenerateSQL()<CR>
map <leader>dd :call GetDdl()<CR>
map <leader>dt :call GetTask()<CR>
xnoremap <Leader>do :<C-u>call CoralBatchOp("dorado_open_batch")<CR> 
xnoremap <Leader>di :<C-u>call CoralBatchOp("dorado_id_open_batch")<CR> 
xnoremap <Leader>df :<C-u>call CoralBatchOp("coral_field_batch")<CR> 
xnoremap <Leader>db :<C-u>call CoralBatchOp("coral_block_batch")<CR> 
xnoremap <Leader>dv :<C-u>call CoralBatchOp("coral_preview_batch")<CR> 
xnoremap <Leader>dp :<C-u>call CoralBatchOp("coral_produce_batch")<CR> 
xnoremap <Leader>di :<C-u>call OpenInstances()<CR> 


function! SubStitute()
    :%s/ea_stg/ea_lark_expense_sensitive/g
    :%s/ea_ods/ea_lark_expense_sensitive/g
    :%s/ea_mds/ea_lark_expense_sensitive/g
    :%s/mds_/dwd_/g
endfunction 

map <leader>pr :retab<CR>

highlight BookmarkSign ctermbg=NONE ctermfg=160
highlight BookmarkLine ctermbg=194 ctermfg=NONE
let g:bookmark_sign = '♥'
let g:bookmark_highlight_lines = 1


function! LibrarySorter()
python3 << EOF
import vim
EOF
endfunction

nnoremap <c-j> <cmd>call smoothie#do("\<C-D>") <CR>
map <c-d> <cmd>call smoothie#downwards()<CR>
vnoremap <c-j> <cmd>call smoothie#do("\<C-D>") <CR>


let g:bookmark_save_per_working_dir = 1



" let g:LanguageClient_serverCommands = {
    " \ 'rust': ['~/.cargo/bin/rustup', 'run', 'stable', 'rls'],
    " \ }
" noremap <silent> gt<Plug>(lcn-definition)

let g:LanguageClient_serverCommands = {
\ 'rust': ['rust-analyzer'],
\ }

nmap <silent>ldg :call CocAction('diagnosticInfo')<CR>
nmap <silent>ldf :call CocAction('jumpDefinition')<CR>
nmap <silent>ljd :call CocAction('jumpDeclaration')<CR>
nmap <silent>ltd :call CocAction('jumpTypeDefinition')<CR>

let g:material_style = "palenight"
"
" nnoremap <Leader>dd :call vimspector#Launch()<CR>
" nnoremap <Leader>de :call vimspector#Reset()<CR>
" nnoremap <Leader>dc :call vimspector#Continue()<CR>
"
" nnoremap <Leader>dt :call vimspector#ToggleBreakpoint()<CR>
" nnoremap <Leader>dT :call vimspector#ClearBreakpoints()<CR>
"
" nmap <Leader>dk <Plug>VimspectorRestart
" nmap <Leader>dh <Plug>VimspectorStepOut
" nmap <Leader>dl <Plug>VimspectorStepInto
" nmap <Leader>dj <Plug>VimspectorStepOver
"
"
let g:vimspector_enable_mappings = 'HUMAN'
map <leader>fdi :setlocal foldmethod=indent<CR>
map <leader>fdm :setLocal foldmethod=manual<CR>
map <leader><leader>m :Mark<CR>

let g:user_emmet_settings = {
\  'php' : {
\    'extends' : 'html',
\  },
\  'scala' : {
\    'extends' : 'html',
\  },
\  'java' : {
\    'extends' : 'html',
\  },
\}
let g:user_emmet_install_global = 0
autocmd FileType html,css,java,scala,dot,tsx EmmetInstall

let g:user_emmet_leader_key='<C-Z>'
let g:typescript_compiler_binary = 'tsc'
let g:typescript_compiler_options = ''

autocmd FileType typescript :set makeprg=tsc
endfunction


function! myspacevim#after() abort

endfunction


```
