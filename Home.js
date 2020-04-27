const con = document.querySelectorAll(".CONTENT") ; 
const Cool = document.querySelectorAll(".Show_cool")
const Appear_Options = {
    threshold : 0  
}; 


const Appear_On_Scroll = new IntersectionObserver
(function(
    entries  , 
    Appear_On_Scroll 
){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }else {
            entry.target.classList.add('Appear');
            Appear_On_Scroll.unobserve(entry.target) ;
        }
    })
} ,
 Appear_Options);

Cool.forEach(cool => {
    Appear_On_Scroll.observe(cool);
})

 con.forEach(con => {
     Appear_On_Scroll.observe(con) ; 
 });

