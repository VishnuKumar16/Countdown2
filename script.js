function countDown(){
    setInterval( function(){

        let dest = new Date("august 23, 2024, 01:00:00").getTime();
        let cur = new Date().getTime();
        let diff = dest - cur;

        let day =Math.floor (diff / (1000*60*60*24));
       

        let hr = Math.floor(diff%(1000*60*60*24)/(1000*60*60))
       

        let min = Math.floor(diff%(1000*60*60)/(1000*60))
        

        let sec = Math.floor(diff%(1000*60)/(1000))
        


        document.getElementById("day").innerHTML = day+"<br/>"+"Day";
        document.getElementById("hr").innerHTML = hr+"<br/>"+"Hr";
        document.getElementById("min").innerHTML = min+"<br/>"+"Min";
        document.getElementById("sec").innerHTML = sec+"<br/>"+"Sec";


    },1000);
}

countDown();