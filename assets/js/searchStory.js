// jQuery is required
function searchStory() {
  $(".search-result-sample").remove();
  let stories = undefined;
  $.getJSON("../../stories.json", function (json) {
    stories = json;

    let keyword = document.getElementById("searchInput").value;

    if (stories != undefined && keyword != "") {
      stories.forEach((story) => {
        let showThisStory = false;
        story.keywords.forEach((kw) => {
          if (
            !showThisStory &&
            (kw.includes(keyword) ||
              keyword.includes(kw) ||
              story.title.includes(keyword))
          ) {
            console.log(story.title);
            let $res = $("#search-result-template").clone();
            $res.addClass("search-result-sample");
            $res.children(".search-result-link").attr("href", story.path);
            $res
              .children(".search-result-link")
              .children(".search-result-title")
              .text(story.title);

            $res.show();
            showThisStory = true;

            $("#search-results").append($res);
          }
        });
      });
    }
  });
}
