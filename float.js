

var wrapper=document.querySelector('#wrapper')
var clickMe=document.querySelector('#clickMe')
var popover=document.querySelector('.popover')
var n=0

clickMe.addEventListener('click',function(e){
   if(popover.style.display==='block'){
    popover.style.display='none'
   }else{
    popover.style.display='block' 
   }
})
wrapper.addEventListener('click',function(e){
    e.stopPropagation()
})
document.addEventListener('click',function(e){
    popover.style.display='none'
})//方案1

// $('#clickMe').on('click',function(){
//     $('.popover').show()
//     setTimeout(function(){
//         $(document).one('click',function(){
//             $('.popover').hide()
//         })
//     },0)
// })方案2有bug