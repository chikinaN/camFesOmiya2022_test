window.onload = function() {
      setInterval(function() {
      const nowtime = new Date();
      document.getElementById("Current_time").innerHTML = nowtime.toLocaleString();
    }, 1000);
  
  var time = new Date();
  var hour = time.getHours() + 1;
  if(hour >= 13){
    const box1 = document.getElementsByClassName(".content_time_1");
    if (box1) {
      box1.style.backgroundColor = '#fffffd';
    }
  }
  if(hour >= 14){
    const box2 = document.getElementsByClassName(".content_time_2");
    if (box2) {
      box2.style.backgroundColor = '#fffffd';
    }
  }
  if(hour >= 15){
    const box3 = document.getElementsByClassName(".content_time_3");
    if (box3) {
      box3.style.backgroundColor = '#fffffd';
    }
  }
  if(hour >= 16){
    const box4 = document.getElementsByClassName(".content_time_4");
    if (box4) {
      box4.style.backgroundColor = '#fffffd';
    }
  }
  if(hour >= 17){
    const box5 = document.getElementsByClassName(".content_time_5");
    if (box5) {
      box5.style.backgroundColor = '#fffffd';
    }
  }
}