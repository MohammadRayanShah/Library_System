var pics=["img/img1.jpg","img/img2.jpg","img/img3.jpg","img/img4.jpg","img/img5.jpg"];
function loadImgs()
{
    document.getElementById("index-image").getElementsByTagName("img")[0].src=pics[0];
   changeImg(0);
} 
function changeImg(n)
{
    document.getElementById("index-image").getElementsByTagName("img")[0].src=pics[n % pics.length];
    setTimeout(function(){changeImg(n+1)},7000)
}