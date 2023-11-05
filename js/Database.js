//database structure
//CodeID, image, heading, code
//alert("database is called");
var db;
var customerObjectStore;

function addData(id,img,header,code,scrolheight){
 // alert("adddata is called");
 db.onversionchange = function() {
   db.close();
   alert("Database is outdated, please reload the page.")
 };
 //var customerObjectStore = db.transaction("previousCode", "readwrite")
 //var objectstore=customerObjectStore.objectStore("previousCode");
 customerObjectStore = db.transaction("previousCodes", "readwrite");

 customerObjectStore.onerror=function(e){
   console.log("TXerror: "+e.target.error);
 }
 objStore=customerObjectStore.objectStore("previousCodes");

 db.onerror=function(e){
     console.log("error: "+e.target.error);
 }

 let obj=  { CodeID:id, image: img, heading: header, code: code, scrollheight:scrolheight}
 //customerData.forEach(function(previousCodes) {
   objStore.add(obj);
//});
//objStore.delete("2");
}

function deleteData(elem){

  elem.parentElement.parentElement.remove();
  
  var id=elem.parentElement.getElementsByClassName("pcbuttonId")[0].textContent;

  
  customerObjectStore = db.transaction("previousCodes", "readwrite");
  objStore=customerObjectStore.objectStore("previousCodes");

  objStore.delete(id.toString());

  if(document.getElementsByClassName("pastCode").length<2){
    document.getElementById("titlePastcodes").style.display="none";
  }

}


window.onload=function(){
   //alert("The page has finished loading");

   let openDB= window.indexedDB.open("previousCodeData",1);
  

  //  var customerData = [
  //   { CodeID: "1", image: "http://cdn/close.png", heading: "datalayer dec", code: "datalayer.push({event:hi})" },
  //   { CodeID: "2", image: "http://cdn/android.png", heading: "android event", code: "datalayer.push({event:hi})" },
  //   { CodeID: "3", image: "http://cdn/ios.png", heading: "ios event", code: "datalayer.push({event:hi})" }

  // ];

   openDB.onupgradeneeded=function (e) {
   //  alert("onupgrade called");
    let db = e.target.result;
    let objectStore = db.createObjectStore("previousCodes", { keyPath: "CodeID" });
    //objectStore=db.createObjectStore("previousCode",{autoIncrement:true});
    //objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
    objectStore.createIndex("CodeID", "CodeID", { unique: true });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  //objectStore.transaction.oncomplete = function(event) {
    // Store values in the newly created objectStore.
   // customerObjectStore = db.transaction("previousCodes", "readwrite").objectStore("previousCodes");
   // customerData.forEach(function(previousCodes) {
   //   customerObjectStore.add(previousCodes);
   // });

//};

      // alert("please upgrade your browser to use this function")
   }

   openDB.onerror=function () {
       alert("error: "+openDB.error);
   }
   openDB.onsuccess=function () {
       db=openDB.result;
       getData();
       //alert("onsuccess");
      
    //console.log(objStore);
  

    //customerObjectStore.oncomplete=function(){
      //db.close();
    //}

    
//alert("hi");
     

      
     // customerData.forEach(function(customer) {
      //  objectstore.add(customer);
     // });
   }
   function getData(){

    customerObjectStore = db.transaction("previousCodes", "readwrite");
    objStore=customerObjectStore.objectStore("previousCodes");
  
    let code1=objStore.openCursor();
    //console.log(code1);
    code1.onsuccess=function(e){
  
      //alert("hi");
      let cursor=e.target.result;
      if(cursor){
        //alert(cursor.key+" "+cursor.value.image);
        addCollapsibleRow(cursor.value.code,cursor.value.scrollheight,cursor.value.heading,cursor.key);
        cursor.continue();
      }
  }
   }

   openDB.onblocked = function() {
    // this event shouldn't trigger if we handle onversionchange correctly
    alert("please close the other tabs");
  
    // it means that there's another open connection to the same database
    // and it wasn't closed after db.onversionchange triggered for it
  };

 
}
