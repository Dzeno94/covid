var para=document.getElementsByTagName("p");



   /* for (var i = 0; i < para.length; i++) {
        var rijeci=para[i].innerHTML.split(" ");
        
        
            for (var j = 0; j < rijeci.length; j++) {
                var rijec = rijeci[j];
                console.log(rijec)
                if(rijec.includes("COVID-19")){
  
       var span = "<span style='background-color: red;'>" + rijec + "</span>"
                 
                 rijeci[j]=span;
                 }
            }
            para[i].innerHTML=rijeci.join(" ");
        }*/

        function replace(){
            var search= document.getElementById("search").value;
            var enterText= document.getElementById("enterText").value

            for (var i = 0; i < para.length; i++) {
                var rijeci=para[i].innerHTML.split(" ");
                
                
                    for (var j = 0; j < rijeci.length; j++) {
                        var rijec = rijeci[j];
                   
                        if(rijec.includes(search)){
              
                         
                         rijeci[j]=enterText;
                         }
                    }
                    para[i].innerHTML=rijeci.join(" ");
                }

        }
        function searchText(){
            var search= document.getElementById("search").value;
           

            for (var i = 0; i < para.length; i++) {
                var rijeci=para[i].innerHTML.split(" ");
                
                
                    for (var j = 0; j < rijeci.length; j++) {
                        var rijec = rijeci[j];
                   
                        if(rijec===search) {
                            var select = `<span style='background-color:yellow;'> ${search}  </span>`
                         
                         rijeci[j]=select;
                        
                         }
                    }
                    para[i].innerHTML=rijeci.join(" ");
                }

        }
        
    


