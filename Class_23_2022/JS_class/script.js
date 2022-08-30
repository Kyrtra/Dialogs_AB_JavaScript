
//Navigator object properties:

navigator.buildID;
//Returns the build identifier of the browser. 
//In modern browsers this property now returns a fixed timestamp as a privacy measure, e.g. 20181001000000 in Firefox 64 onwards.

document.getElementById("demo").innerHTML = navigator.buildID;//strādā tikai Firefox

navigator.cookieEnabled;
//navigator.cookieEnabled returns a Boolean value that indicates whether cookies are enabled or not.
//The property is read-only.

document.getElementById("demo_1").innerHTML = navigator.cookieEnabled;//strādā visos

navigator.connection;
//The Navigator.connection read-only property returns a NetworkInformation object containing information about the system's connection, 
//such as the current bandwidth of the user's device or whether the connection is metered.

document.getElementById("demo_2").innerHTML = navigator.connection; //strādā Chrome, Opera

navigator.getBattery();
//The getBattery() method provides information about the system's battery. It returns a battery promise, 
//which is resolved in a BatteryManager object providing also some new events you can handle to monitor the battery status. 

document.getElementById("demo_3").innerHTML = navigator.getBattery();//strādā Chrome

// We get the initial value when the promise resolves ...
navigator.getBattery().then(function(battery) {
    console.log(battery.level);
    // ... and any subsequent updates.
    battery.onlevelchange = function() {
      console.log(this.level);
    };
  });

//https://w3c.github.io/battery/#dom-navigator-getbattery








