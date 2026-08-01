const items = document.querySelectorAll(
".card, .services div, .gallery img, .review"
);


const observer = new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},
{
threshold:.15
});



items.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition="1s";

observer.observe(item);

});
