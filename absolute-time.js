$(function () {
  console.log('githubility was loaded [absolute time]');
  $("relative-time").each(function () {
    var datetime = $(this).attr("datetime");
    var title = $(this).attr("title");
    var text = $(this).text();
    $(this).after('<local-time datetime="' + datetime
      + '" title="' + text
      + '">' + title + '</local-time>').hide();
  });
});
