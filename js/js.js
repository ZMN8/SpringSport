/**
 * Created by Administrator on 2016/8/10.
 */
//sro();
//function sro(){
//    var Top=document.body.scrollTop;
//    console.log(Top);
//    if(Top<390){
//        $(".slide_nav").hide();
//    }else{
//        $(".slide_nav").show();
//    }
//}
//window.onscroll= function () {
//    sro();
//}
var slide_nav=document.querySelector(".slide_nav");
window.onscroll= function () {
   var t=document.body.scrollTop;
    if(t<390){
        slide_nav.style.opacity=0;
    }else{
        slide_nav.style.opacity=1;
    }
}