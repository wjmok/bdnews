'use strict';

const db = require('../models/index');

exports.createNews = function* ( body ) {
  const title    = body.title;
  const content  = body.content;
  const coverUrl = body.cover_url;
  const linkUrl  = body.link_url;

  const categoryId = body.category_id;

  const news = yield db.News.create({
    title: title,
    content: content,
    cover_url: coverUrl,
    link_url: linkUrl,
    category_id: categoryId
  });

  return news.toJSON();
};

