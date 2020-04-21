(function(){
    let updateHour = function(){
    
        let date = new Date();
    
        let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let hour = date.getHours();
        let min = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = ['AM',"PM"]

        if(hour < 10){
            hour = "0" + hour;
        }

        if(min < 10){
            min = "0" + min;
        }
        
        if(seconds < 10){
            seconds = "0"+ seconds;
        }

        if(hour <= 11){
            ampm = "AM"
        }

        if(hour >= 12){
            ampm = "PM"
        }

        document.getElementById('hour').innerHTML = hour;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('sec').innerHTML = seconds;
        document.getElementById('ampm').innerHTML = ampm;
    
        let weekDay = date.getDay();
        let month = date.getMonth();
        let day = date.getDate();
        let year = date.getFullYear();
    
        document.getElementById('weekday').innerHTML = week[weekDay];
        document.getElementById('month').innerHTML = months[month];
        document.getElementById('day').innerHTML = day;
        document.getElementById('year').innerHTML = year;
    }
    
    
    updateHour();
    let inter = setInterval(updateHour,1000);
}
)();

