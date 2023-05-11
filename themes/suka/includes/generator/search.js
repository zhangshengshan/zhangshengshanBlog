module.exports = function (hexo) {
    if (hexo.config.suka_theme.search.enable !== true) {
        return;
    }

    const pathFn = require('path');
    const { stripHTML } = require('hexo-util');

    let config = hexo.config.suka_theme.search;

    // Set default search path
    if (!config.path) config.path = 'search.json';

    function searchGenerator(locals = {}) {
        const url_for = hexo.extend.helper.get('url_for').bind(this);

        const parse = (item) => {
            let _item = {};
            if (item.title) _item.title = item.title;
            if (item.date) _item.date = item.date;
            if (item.path) _item.url = url_for(item.path);
            if (item.tags && item.tags.length > 0) {
                _item.tags = [];
                item.tags.forEach((tag) => {
                    _item.tags.push(tag.name);
                });
            }
            if (item.categories && item.categories.length > 0) {
                _item.categories = [];
                item.categories.forEach((cate) => {
                    _item.categories.push(cate.name);
                });
            }
            if (item._content) {
                _item.content = stripHTML(item.content.trim().replace(/<pre(.*?)\<\/pre\>/gs, ''))
                    .replace(/\n/g, ' ').replace(/\s+/g, ' ')
                    .replace(new RegExp('(https?|ftp|file)://[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]', 'g'), '');
            }
            return _item;
        };

        const searchfield = config.field;

        let posts,
            pages;

        if (searchfield) {
            if (searchfield === 'post') {
                posts = locals.posts.sort('-date');
            } else if (searchfield === 'page') {
                pages = locals.pages;
            } else {
                posts = locals.posts.sort('-date');
                pages = locals.pages;
            }
        } else {
            posts = locals.posts.sort('-date');
        }

        let res = [];

        if (posts) {
            posts.each((post) => {
                res.push(parse(post));
            });
        }
        if (pages) {
            pages.each((page) => {
                res.push(parse(page));
            });
        }

        return {
            path: config.path,
            data: JSON.stringify(res)
        };
    }

    if (pathFn.extname(config.path) === '.json') {
        hexo.extend.generator.register('json', searchGenerator);
    }
};