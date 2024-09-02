//selecting side nav bar and menu icon

var sidenav=document.getElementById("sidenav")


var menuicon=document.getElementById("menuicon")
menuicon.addEventListener("click", function(){
    sidenav.style.right=0
})

var closenav=document.getElementById("close-nav")
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})




//product search

var productcontainer = document.getElementById("productcontainer")
var search=document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")//taking all div tags

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()//touppercase--->>taking all lower and upper cases

    for(count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("h1").textContent//p[count]--.one div slect aagirum .athukula irukura text content

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"//match aagalana
        }
        else{
           productlist[count].style.display="block"//match aagita
        }
    }
})