meta charset: "utf-8"

title t("title")

meta name: "description", content: t("description")
meta name: "keywords", content: t("keywords")
meta name: "robots", content: t("robots")
meta name: "author", content: t("author")

csrfMetaTag()

appleViewportMetaTag width: "device-width", max: 1, scalable: false

stylesheetTag "http://fonts.googleapis.com/css?family=Forum|Josefin+Sans"
stylesheets "lib", "vendor", "application"
stylesheetTag "/stylesheets/lib/stylesheets/bootstrap/bootstrap.css"

#if browserIs("firefox")
#  stylesheets "font"

#if contentFor "headStyleSheets"
#  yield "headStyleSheets"

javascriptTag "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"
javascripts "vendor", "lib", "application"

if Tower.env == "development"
  javascripts "development"
  
#if contentFor "headJavaScripts"
#  yield "headJavaScripts"

contentFor "bottom", ->
  javascripts "bottom"
