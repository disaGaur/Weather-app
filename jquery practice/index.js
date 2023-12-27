// $("h1").css("color" , "green");
// $("h1").css("font-size" , "10rem");
// $("h1").addClass("big-title margin-50");
// $("h1").addClass("big-title margin-50").text("Good Bye!");
// $("button").text("Don't click me");
// $("button").html("<em>Hey</em>");
// $("a").attr("href" , "https://www.yahoo.com");
// for(var i=0;i<5;i++)
// {
    // document.querySelectorAll("button")[i].addEventListener("click" , function()
    // {
    //     document.querySelector("h1").style.color="purple";
    // }
    // )
// }
// $("button").click(function()
// {
//     $("h1").css("color" , "purple");
// }
// )
// $(document).keypress(function()
// {
//     console.log(event.key);
// }
// )
// $(document).keypress(function()
// {
//     $("h1").text(event.key);
// }
// )
// $("h1").on("mouseover" , function()
// {
//     $("h1").css("color" , "pink");
// })
// $("h1").on("mouseover" , function()
// {
//     $("h1").hide();
// })
// $("h1").on("mouseover" , function()
// {
//     $("h1").show();
// })
// $("h1").on("mouseover" , function()
// {
//     $("h1").toggle();
// })
$("h1").on("mouseover" , function()
{
    $("h1").faded();
})