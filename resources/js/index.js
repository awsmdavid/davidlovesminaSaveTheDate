$(document).ready(function() {

  //swap background
  $(".postcard")
      .mouseover(function() {
        var src1 = "http://www.archives.davcheng.com/davidlovesminasavethedate/resources/img/background-photo-1b.png";
        var src2 = "http://www.archives.davcheng.com/davidlovesminasavethedate/resources/img/save-the-date-postcard-5b.png";
        $("#background-photo-image").attr("src", src1);
        $("#postcard-image").attr("src", src2);
      })
      .mouseout(function() {
        var src1 = "http://www.archives.davcheng.com/davidlovesminasavethedate/resources/img/background-photo-1a.png";
        var src2 = "http://www.archives.davcheng.com/davidlovesminasavethedate/resources/img/save-the-date-postcard-5a.png";
        $("#background-photo-image").attr("src", src1);
        $("#postcard-image").attr("src", src2);
      });
});