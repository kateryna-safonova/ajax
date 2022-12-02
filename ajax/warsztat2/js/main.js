$(document).ready(function () {
  $("#getDate").click(function () {
//     $.get("https://akademia108.pl/api/ajax/get-post.php")
//       .done(function (data) {
//         let pId = $("<p></p>").text(`Post ID: ${data.id}`);
//         let pUserID = $("<p></p>").text(`User ID: ${data.userId}`);
//         let pTitle = $("<p></p>").text(`Title: ${data.title}`);
//         let pBody = $("<p></p>").text(`Body: ${data.body}`);
//         let hr = $("<hr />");

//         let jqBody = $("body");
//         jqBody.append(pId);
//         jqBody.append(pUserID);
//         jqBody.append(pTitle);
//         jqBody.append(pBody);
//         jqBody.append(hr);
//       })
//       .fail(function (error) {
//         console.error(error);
//       });
//   });
$.getJSON("https://akademia108.pl/api/ajax/get-post.php")
      .done(function (data) {
        let pId = $("<p></p>").text(`Post ID: ${data.id}`);
        let pUserID = $("<p></p>").text(`User ID: ${data.userId}`);
        let pTitle = $("<p></p>").text(`Title: ${data.title}`);
        let pBody = $("<p></p>").text(`Body: ${data.body}`);
        let hr = $("<hr />");

        let jqBody = $("body");
        jqBody.append(pId);
        jqBody.append(pUserID);
        jqBody.append(pTitle);
        jqBody.append(pBody);
        jqBody.append(hr);
      })
      .fail(function (error) {
        console.error(error);
      });
  });
});
