var Body = {	
    setColor:function(color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor:function(color){
//         var alist = document.querySelectorAll('a');
//             i = 0;
//             while (i<alist.length) {
// 	              alist[i].style.color = color;
// 	              i = i+1;
//             }
	    $('a').css('color',color);
    }
}
function nightdayhandler(self){                                      
    if(self.value === 'night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
	    
        Links.setColor('yellow');                                            
    } else {   
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
	    
	Links.setColor('blue');					    
    }
}
