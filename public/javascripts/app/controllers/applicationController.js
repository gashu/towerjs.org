var fs,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

fs = require('fs');

App.ApplicationController = (function(_super) {

  __extends(ApplicationController, _super);

  ApplicationController.name = 'ApplicationController';

  function ApplicationController() {
    return ApplicationController.__super__.constructor.apply(this, arguments);
  }

  ApplicationController.layout("application");

  ApplicationController.prototype.index = function() {
    var content, currentPage, i, page, pages, _i, _j, _len, _len1;
    pages = _.map(["application", "models", "views", "controllers", "http", "assets", "generators", "stores", "testing", "utils", "deployment", "development", "contributing"], function(i) {
      return "guides/" + i;
    });
    pages = ['guides'].concat(pages);
    for (i = _i = 0, _len = pages.length; _i < _len; i = ++_i) {
      page = pages[i];
      content = fs.readFileSync("" + Tower.root + "/public/docs/" + page + ".html", "utf-8");
      pages[i] = App.Post.create({
        title: Tower.Support.String.camelize(page),
        body: content,
        slug: page
      });
    }
    if (this.request.location.segments.length === 0) {
      currentPage = pages[0];
    } else {
      for (_j = 0, _len1 = pages.length; _j < _len1; _j++) {
        page = pages[_j];
        if (this.request.location.segments.join('/') === page.slug) {
          currentPage = page;
          break;
        }
      }
    }
    currentPage || (currentPage = pages[0]);
    return this.render("index", {
      locals: {
        pages: pages,
        url: this.request.url,
        currentPage: currentPage
      }
    });
  };

  return ApplicationController;

})(Tower.Controller);
