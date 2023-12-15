//dropdown click
var ecomevent="";
var eventName="";
var nested="";
var finalcode="";
var prevtext="";

if(!localStorage.getItem("codeid")){
	window.localStorage.setItem("codeid", 0);
}
//var partrefund=false;
var addMore=document.getElementById('addMore');

var eventparams= document.getElementById("diveventparams");
var actionfieldparams= document.getElementById("divactionfieldparams");
var prodparams=document.getElementById("divproducts");
var nestedrow=document.getElementsByClassName("keyvaluenested")[0];
var pastCodeelem=document.getElementById("pastCode");

//document.getElementById("web").click();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//window.onload=getData();
document.addEventListener("DOMContentLoaded", removebranding, false);
function removebranding(){
try{
    var sorc=document.getElementsByTagName("img");
for(var i=0;i<sorc.length;i++){
//alert(sorc[i].src);
    if(sorc[i].src.indexOf("000webhost")>-1){
//console.log("inside");
		sorc[i].parentElement.parentElement.remove();
break;
	}
}
}
catch(e){}
}

document.getElementById("dldropdown").addEventListener("change", function(){
var value=this.value;

switch (value) {
			case 'adobeobj':
				document.getElementById("dlName").value="digitalData";
				document.getElementById("dlName").placeholder="Default digitalData";
				//alert(document.getElementById("dlName").value);
				swapContent ("adobeobj");
				break;
            case 'declare':
				document.getElementById("dlName").value="dataLayer";
				document.getElementById("dlName").placeholder="Default dataLayer";
				swapContent ("datalayerdec");
                break;
            case 'push':
				document.getElementById("dlName").value="dataLayer";
				document.getElementById("dlName").placeholder="Default dataLayer";
                swapContent ("datalayerPush");
                break;
			case 'select':
			dataLayer.push({"event":"pageView","pageName":"defaultScreen"});
			if(document.getElementById('addMore')!=null){
				document.getElementById('addMore').style.visibility = "hidden";
			}
				document.getElementById("dlName").style.visibility="hidden";
				document.getElementById("dlLabel").style.visibility="hidden";
				document.getElementById('dataGenerate').style.visibility = "hidden";
				document.getElementById('taggingcode').style.visibility = "hidden";
				document.getElementById('MainContainer').innerHTML = "";
				document.getElementById('taggingcode').innerHTML = "DataLayer Code";
				document.getElementById("taggingcode").style.height="auto";
				removeerrormsg();
                break;
			case 'andrdevnt':
				document.getElementById("dlName").value="mFirebaseAnalytics";
				document.getElementById("dlName").placeholder="Default mFirebaseAnalytics";
				swapContent("androidEvent");
				break;
			case 'iosevnt':
				document.getElementById("dlName").value="Analytics";
				document.getElementById("dlName").placeholder="Default Analytics";
				swapContent("iOSEvent");
				break;
			case 'ecomm':
				document.getElementById("dlName").value="dataLayer";
				document.getElementById("dlName").placeholder="Default dataLayer";
                swapContent ("datalayerEcomm");
				//document.getElementById('taggingcode').style.visibility = "visible";
				//document.getElementById('taggingcode').innerHTML = "Coming soon";
                break;
        }
})


function measurementChange(){
     var option= document.getElementById("Configs").value;
     document.getElementById("prodparams").innerText="";

     if(option=="UA"){
         arr=["name","id", "price","brand","category","variant","list","position","coupon"];
         for(i=0;i<arr.length;i++){
            const para = document.createElement("option");
            para.innerText = arr[i];
            document.getElementById("prodparams").appendChild(para);
        }
     }
     else if(option=="GA4"){
            arr=["item_id","item_name","item_price","item_brand","item_list","item_discount","item_collection","item_collection2","item_collection3","item_collection4","item_collection5","item_created_at","item_compare_at_price","item_compare_at_price_max","item_compare_at_price_min","item_gift_card","item_handle","item_has_only_default_variant","item_price_max","item_price_min","item_price_varies","item_tags","item_type","item_url","item_vendor","item_quantity"];
         for(i=0;i<arr.length;i++){
            const para = document.createElement("option");
            para.innerText = arr[i];
            document.getElementById("prodparams").appendChild(para);
        }
         
     }
}

function openPage(pageName, elmnt, color){
	  // Hide all div elements with class="tabcontent" by default */
	  var i, tabcontent, tablinks;
	  tabcontent = document.getElementsByClassName("tabcontent");
	  for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
		//tabcontent[i].style.backgroundImage = "radial-gradient(grey,white)";
		//tabcontent[i].style.border="1px solid";
	  }
	
	  // Remove the style attributes of all tab buttons
	  tablinks = document.getElementsByClassName("tablinks");
	  for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor = "dimgrey";
		tablinks[i].style.color = "white";
		//tablinks[i].style.backgroundImage = "radial-gradient(lightblue,white)";
		tablinks[i].style.border="1px solid black";
		tablinks[i].style.borderLeft="5px solid blue";

	  }
	
	  // Show the specific tab content
	  document.getElementById(pageName).style.display = "inline-block";
	
	  // Add the specific color to the button used to open the tab content
	  elmnt.style.backgroundColor = color;
	  elmnt.style.backgroundImage="";
	  elmnt.style.border="";
	  elmnt.style.color="black";
	  

}
	
//Swap the main container with the container as per dropdown choice
function swapContent (id) {
	removeerrormsg();
	//let addMore=document.getElementById('addMore');
	dataLayer.push({"event":"pageView","pageName":id});
	document.getElementById("copyToClipboard").style.visibility="hidden";
	document.getElementById('taggingcode').innerHTML = "DataLayer Code";
	document.getElementById("taggingcode").style.height="auto";
	document.getElementById('dataGenerate').style.visibility = "visible";
	document.getElementById('taggingcode').style.visibility = "visible";
	document.getElementById("dlName").style.visibility="visible";
	document.getElementById("dlLabel").style.visibility="visible";
	
	if(document.getElementById('addMore')!=null){
		addMore.style.visibility="visible";
	}
	else{	
	var functionbuttondiv = document.getElementById("divfunctionButtons");
	functionbuttondiv.insertBefore(addMore, functionbuttondiv.childNodes[0]);
	}
	if(id=="datalayerEcomm"){
	//document.getElementById('taggingcode').innerHTML = "DataLayer Code";
	addMore.remove();
	document.getElementById('dataGenerate').style.visibility = "hidden";
	document.getElementById('taggingcode').style.visibility = "hidden";
	//document.getElementById('MainContainer').style.visibility = "visible";
	}
	
	let main = document.getElementById('MainContainer');
	main.innerHTML="";
//	let oldChild = main.firstElementChild;
    let newChild = document.getElementById(id);
	let clone = newChild.cloneNode(true);
	clone.style.visibility = "visible";
	clone.style.display = "inline-block";

	//if(oldChild!=null){
    //const clone = div.cloneNode(true);
     //while (main.firstChild) main.firstChild.remove();
	// main.replaceChild(clone, oldChild);
	 
	//}
	//else{
		main.appendChild(clone);
	//}
	
	if(id=="datalayerEcomm"){
document.getElementById("ecommdropdown").addEventListener("change", function(){
var value=this.value;

document.getElementById('taggingcode').innerHTML = "DataLayer Code";
document.getElementById("taggingcode").style.height="auto";

switch (value) {
            case 'impression':
				//document.getElementById("useevent").style.visibility="visible";
				appendContent ("datalayerecommevent","impression");
				ecomevent="impressions";
				eventName="product-impression";
                break;
            case 'click':
				document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","click");
			   ecomevent="click";
			   eventName="product-productClick";
                break;
			case 'choose':
				appendContent ("datalayerecommevent","choose");
				ecomevent="";
				eventName="";
                break;
			case 'details':
               //document.getElementById("useevent").style.visibility="visible";
			   appendContent ("datalayerecommevent","detail");
			   ecomevent="detail";
			   eventName="product-details";
			   break;
			case 'addtocart':
				document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","add");
			   ecomevent="add";
			   eventName="product-addtoCart";
                break;
			case 'removecart':
				document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","remove");
			   ecomevent="remove";
			   eventName="product-removefromCart";
                break;
				
			case 'checkout':
			document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","checkout");
			   ecomevent="checkout";
			   eventName="product-checkout";
                break;
			case 'checkoutopt':
			document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","checkoutopt");
			   ecomevent="checkout_option";
			   eventName="product-checkout_option";
                break;
			case 'purchase':
			   document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","purchase");
			   ecomevent="purchase";
			   eventName="product-purchase";
                break;
			case 'fullrefund':
			   document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","fullrefund");
			   ecomevent="refund";
			   eventName="product-refund";
                break;
			case 'partrefund':
			   document.getElementById("useevent").style.visibility="hidden";
               appendContent ("datalayerecommevent","partrefund");
			   ecomevent="refund";
			   eventName="product-refund";
			   //partrefund=true;
                break;

        }
})
	}
}

function appendContent (id,evnt) {
	document.getElementById("copyToClipboard").style.visibility="hidden";
	let main = document.getElementById('MainContainer');
	let oldChild = document.querySelector("#MainContainer #datalayerecommevent");
	
	if(evnt!="choose"){
		let newChild;

	if(document.querySelectorAll("#datalayerecommevent")[1]==undefined){
     newChild= document.querySelectorAll("#datalayerecommevent")[0];
	}
	else{
	newChild= document.querySelectorAll("#datalayerecommevent")[1];
	}
	let clone = newChild.cloneNode(true);
	clone.style.visibility = "visible";
	clone.style.display = "inline-block";
	
	if(oldChild!=null){
	main.replaceChild(clone,oldChild);	
	}
	else{
	main.appendChild(clone);
	}
	document.getElementById('dataGenerate').style.visibility = "visible";
	document.getElementById('taggingcode').style.visibility = "visible";

	/*if(document.querySelector("#MainContainer #diveventparams")!=null){
		document.querySelector("#MainContainer #diveventparams").remove();
	}*/
	
	if(evnt=="impression" && document.querySelector("#MainContainer #divactionfieldparams")!=null)
	{
		document.getElementById("divactionfieldparams").remove();
		
	}
	/*else if(document.querySelector("#MainContainer #divactionfieldparams")==null){
		let main = document.querySelector("#MainContainer #datalayerecommevent");
		let newChild = actionfieldparams;
	    let clone = newChild.cloneNode(true);
		main.appendChild(clone);
		//document.getElementById("diveventparams").remove();
		//alert("hi");
	}*/

	else if((evnt=="checkoutopt"||evnt=="fullrefund") && document.querySelector("#MainContainer #divproducts")!=null){
		document.getElementById("divproducts").remove();
	}
	/*else if(document.querySelector("#MainContainer #divproducts")==null){
		let main = document.querySelector("#MainContainer #datalayerecommevent");
		let newChild = prodparams;
	    let clone = newChild.cloneNode(true);
		main.insertBefore(clone,main.childNodes[0]);
	}*/
	
	
	let buttonArray = document.querySelectorAll("button");

buttonArray.forEach(function(elem) {
    elem.addEventListener("click", function() {
        if(elem.id=="eventparams"){
			let parentdiv= document.getElementById("diveventparams");
			let childNode=document.getElementsByClassName("eventparams")[0];
			let clone=childNode.cloneNode(true);
			clone.getElementsByClassName("key")[0].value="";
			clone.getElementsByClassName("value")[0].value="";
			parentdiv.appendChild(clone);
		}
		
		else if(elem.id=="actionfieldparams"){
			let parentdiv= document.getElementById("divactionfieldparams");
			let childNode=document.getElementsByClassName("actionfieldparams")[0];
			let clone=childNode.cloneNode(true);
			clone.getElementsByClassName("key")[0].value="";
			clone.getElementsByClassName("value")[0].value="";
			parentdiv.appendChild(clone);

		}
		else if(elem.id=="addnewproduct"){
			let parentdiv= document.getElementById("divproducts");
			let childNode=document.getElementsByClassName("divproductparams")[0];
			let clone=childNode.cloneNode(true);
			for(i=0;i<clone.getElementsByClassName("productparams").length;i++){
			//clone.getElementsByClassName("productparams")[i].getElementsByClassName("key")[0].value="";
			clone.getElementsByClassName("productparams")[i].getElementsByClassName("value")[0].value="";
			}
			parentdiv.appendChild(clone);

		}
    });
});
	}
	else{
		oldChild.remove();
		if(document.getElementById('addMore')!=null){
				document.getElementById('addMore').style.visibility = "hidden";
			}
				document.getElementById('dataGenerate').style.visibility = "hidden";
				document.getElementById('taggingcode').style.visibility = "hidden";
				//document.getElementById('MainContainer').innerHTML = "";
				document.getElementById('taggingcode').innerHTML = "DataLayer Code";
				document.getElementById("taggingcode").style.height="auto";
	}
}

function addProdParam(elem){
	let parentdiv= elem.parentElement;
	let childNode=document.getElementsByClassName("productparams")[0];
	let clone=childNode.cloneNode(true);
	clone.getElementsByClassName("key")[0].value="";
	clone.getElementsByClassName("value")[0].value="";
	parentdiv.appendChild(clone);
}
	
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function addNode(elem){
	let main=elem.parentElement.parentElement;
	let child=nestedrow;
	let clone=child.cloneNode(true);
	clone.style.visibility="visible";
	main.appendChild(clone);
	//if(elem.parentElement.parentElement.){}
}

function removeNode(elem){
//	console.log(elem.parentElement.parentElement.children.length);
	//elem.parentElement.remove();
	//console.log(elem.parentElement.parentElement.children);

	let MainContainer=document.getElementById("MainContainer").children[0];

	if(elem.parentElement.parentElement.children.length==1 && MainContainer.id=="datalayerdec"){
		elem.parentElement.parentElement.parentElement.getElementsByClassName("parinputvalue")[0].getElementsByTagName("input")[0].disabled = false;
		elem.parentElement.parentElement.parentElement.getElementsByClassName("parinputvalue")[0].getElementsByTagName("span")[0].innerHTML="+ Nested";	
		//elem.parentElement.parentElement.querySelector(".nestedparams").innerHTML="";
		//nested.style.visibility="hidden";
	}
	elem.parentElement.remove();
	
	//if(elem.parentElement.parentElement.){}
}

//var datalayerclass = document.getElementById("MainContainer").firstElementChild;
var addmore=document.getElementById("addMore");
addmore.addEventListener("click", function newRow(){	
    var datalayerclass = document.getElementById("MainContainer").firstElementChild;
	//alert("class name is "+datalayerclass);
	var div = document.createElement("div");
	var parinputdiv=document.createElement("div");
	var nesteddiv=document.createElement("div");
	var inputkey = document.createElement("input");
	var inputvalue = document.createElement("input");
	var b = document.createElement("b");
	var p = document.createElement("p");
	var removeicon= document.createElement("img");
	var span=document.createElement("span");

	div.classList.add("input-group","keyvalue");
	div.style.padding="0 2px 2px 0";

	inputkey.setAttribute("type", "text");	
	inputkey.setAttribute("class", "form-control key");
	inputkey.setAttribute("id", "key");
	inputkey.setAttribute("placeholder", "Key");
	inputkey.setAttribute("style", "display: inline");
	inputkey.setAttribute("onfocus","removeerrormsg()");

	parinputdiv.setAttribute("style","display: inline;width:50%");
	parinputdiv.setAttribute( "class","parinputvalue");
	
	inputvalue.setAttribute("type", "text");	
	inputvalue.setAttribute("class", "form-control value");
	inputvalue.setAttribute("onfocus","removeerrormsg()");
	inputvalue.setAttribute("id","value");
	inputvalue.setAttribute("placeholder", "Value");	

	parinputdiv.appendChild(inputvalue);

	if(document.getElementById("MainContainer").children.adobeobj!=undefined ||
	document.getElementById("MainContainer").children.datalayerdec!=undefined || 
	document.getElementById("MainContainer").children.datalayerPush!=undefined){
		
	span.setAttribute("class","nestedparam");
	span.setAttribute( "onclick","nestedparams(this)");
	span.innerHTML="+ Nested";
	parinputdiv.appendChild(span);
	}

	
	

	nesteddiv.setAttribute("class","container nestedparams");
	nesteddiv.setAttribute("style","margin-top: 4px; display:block;visibility:hidden;")

	removeicon.setAttribute("class","my-auto");
	removeicon.setAttribute("id","removeIcon");
	removeicon.src="Images\/images.png";
	removeicon.setAttribute("alt","remove row");
	removeicon.setAttribute("style","visibility:inherit;height: 17px;width: 23px;padding-left: 6px");
	removeicon.onclick = function() {
    this.parentElement.remove();
	}
	
	b.innerHTML=":"
	
	p.setAttribute("style","margin-left:4px;margin-right:4px;display: inline");
	p.setAttribute("class","my-auto");
	p.appendChild(b);
	div.appendChild(inputkey);
	div.appendChild(p);
	//div.appendChild(inputvalue);
	div.appendChild(parinputdiv);
	div.appendChild(removeicon);
	div.appendChild(nesteddiv);
	datalayerclass.appendChild(div);
});

//grey out nested param row
function nestedparams(elem){

	var doc = elem.parentElement.parentElement.children;
	for (var i = 0; i < doc.length; i++) {
		if (doc[i].className.indexOf("nestedparams")>-1) {
			nested = doc[i];
			//console.log(nested);
		  break;
		}        
	}
//nested = elem.parentElement.parentElement.getElementsByClassName("nestedparams")[0];

if(elem.innerHTML=="+ Nested"){
elem.parentElement.getElementsByTagName("input")[0].disabled = true;
elem.innerHTML="- Nested";

nested.style.visibility="visible";

newChild= document.getElementsByClassName("keyvaluenested")[document.getElementsByClassName("keyvaluenested").length-1];
let clone = newChild.cloneNode(true);
clone.style.visibility="visible";
nested.appendChild(clone);

//elem.parentElement.setAttribute("background-color","darkgrey");
	}
else{
	elem.parentElement.getElementsByTagName("input")[0].disabled = false;
	elem.innerHTML="+ Nested";	
	elem.parentElement.parentElement.querySelector(".nestedparams").innerHTML="";
	nested.style.visibility="hidden";
	//console.log(nested)
	//elem.parentElement.removeAttribute("background-color");
	//removeNode(elem);
}
}

function clearall(){
	var inputs=document.getElementsByTagName("input");
	for(i=0;i<inputs.length;i++){
		inputs[i].value="";
	}
	document.getElementById('taggingcode').innerHTML = "DataLayer Code";
	document.getElementById("copyToClipboard").style.visibility="hidden";
	document.getElementById("taggingcode").style.height="auto";
	return;
}

function copyToClipboard(elem) {
	/* Get the text field */
	var copyText="";
	if(elem){
	copyText=elem.parentElement.getElementsByClassName("pccontextText")[0];
	}
	else{
	copyText = document.getElementById("taggingcode");
	}
	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
	/* Copy the text inside the text field */
	document.execCommand("copy");
  }

function addCollapsibleRow(tagcode,scrollHeight,heading,id){
	//display the title block for previous codes
	document.getElementById("titlePastcodes").style.display="block";

	let tempparent=document.getElementById("PastCodes");
	//let tempchild=document.getElementById("pastCode");
	let clonenode= pastCodeelem.cloneNode(true);
	clonenode.style.display="block";
	tempparent.appendChild(clonenode);
	let coll = clonenode.getElementsByClassName("collapsible");
	let rowId=clonenode.getElementsByClassName("pcbuttonId");
	let rowTitle=clonenode.getElementsByClassName("pcbuttonText");
	let content=clonenode.getElementsByClassName("pccontextText");
	let rowTitleImg=clonenode.getElementsByClassName("pcbuttonImg");
	//let ctc= clonenode.getElementsByClassName("copyToClipboard");

	coll[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
  if(id){
	rowId[0].textContent=id;
  }
  else {
  rowId[0].textContent=localStorage.getItem("codeid");
  }
  content[0].textContent=tagcode;
  content[0].style.height=scrollHeight+"px";

  if(heading){
	prevtext=heading;
  }
  else{
  var e = document.getElementById("dldropdown");
  prevtext = e.options[e.selectedIndex].text;

  if(prevtext.indexOf("Website Ecommerce")>-1){
	e = document.getElementById("ecommdropdown");
	ecommtext = e.options[e.selectedIndex].text;
	prevtext+=" - "+ecommtext;
  }
}

  rowTitle[0].textContent=prevtext;

  if(prevtext.indexOf("Android")>-1){
  rowTitleImg[0].src="Images/android.png";
  }
  else if(prevtext.indexOf("iOS")>-1){
	rowTitleImg[0].src="Images/ios.png";
  }
  else{
	rowTitleImg[0].src="Images/web.png";
  }
}

function removeerrormsg() {
	if(document.getElementById("errormsg")!=null ||document.getElementById("errormsg")!=undefined){
	document.getElementById("errormsg").remove();
	//document.removeEventListener('click', removeerrormsg());
	}
}

function ErrorMsg(msg){
	var error = document.getElementById("error");
		//error msg
		error.innerHTML = "<span id='errormsg' style='color: red;padding: 2px;'>"+msg 
                        +"</span>"	
}

function fnExcelReport()
{

	var table=document.getElementsByTagName("table")[0];
    var tab_text="<table border='2px'><tr>Datalayer Helper - Gradiweb</tr><tr style='background-color: #ef8195;color: white;'><th>Name</th><th>dataLayer</th><th>Comments</th></tr>";
    var textRange; var j=0;
    tab = document.getElementById('headerTable'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
		//console.log(tab_text);
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"DatalayerCodes.xlsx");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  
	//    var sa = document.createElement('a');
	//    var data_type = 'data:application/vnd.ms-excel';
	//    var table_html =encodeURIComponent(tab_text);
	//    sa.href = data_type + ', ' + table_html;
	//    sa.download = 'exported_table.xlsx';

	
	table.textContent="";
    return (sa);
	

}

function createExportTable(){

	var table=document.getElementsByTagName("table")[0];

	var temp=document.getElementsByClassName("pastCode");

	for(var i=1;i<temp.length;i++){
	var txtname=temp[i].getElementsByClassName("pcbuttonText")[0].textContent;

	var txtcode=temp[i].getElementsByClassName("pccontextText")[0].textContent.replaceAll("\n","<br style='mso-data-placement:same-cell;' />");
	//var fmttxtcode=js_beautify(txtcode);
	var newRow=document.createElement("tr");
	var newcell1=document.createElement("td");
	var newcell2=document.createElement("td");
	var newcell3=document.createElement("td");

	newcell1.textContent=txtname;
	newcell2.innerHTML=txtcode;
	newcell3.textContent="";
	//alert(newcell2.textContent);

	newRow.appendChild(newcell1);
	newRow.appendChild(newcell2);
	newRow.appendChild(newcell3);
	table.appendChild(newRow);


	}
	//alert("finished");
	fnExcelReport();
}

function generateCode()
{
	document.getElementById('taggingcode').innerHTML = "DataLayer Code";
	document.getElementById("taggingcode").style.height="auto";
	try{

	var temp = document.getElementById("MainContainer").firstElementChild;

	var push=true;
	
	var dlname=document.getElementById("dlName").value;
	
	var dataLayer=[];
	var tempobj={};
	var obj = {};
	
	function pushTodl(name, val) {
	var specialChars = /[^a-zA-Z0-9 ]/g;
	 if (name.match(specialChars)) {
		 ErrorMsg("Special Charecters are not allowed in key name");
		 push=false;
        //alert ("Only characters A-Z, a-z and 0-9 are allowed!")
        //document.actorInsert.actInsert.focus();
        return false;
    }
	else
	{
   		obj[name] = val;
	}
   //dataLayer.push(obj);
}

function pushToobj(name, val) {
  
   objtemp[name] = val;
}
if(temp.id=="adobeobj"||temp.id=="datalayerdec"||temp.id=="datalayerPush" || temp.id=="androidEvent" || temp.id=="iOSEvent"){
	for(i=0;i<temp.children.length;i++){
	
	if(temp.children[i].getElementsByClassName("key")[0]!=undefined){
		var keyy= temp.children[i].getElementsByClassName("key")[0].value;
	}
	else{
		keyy="event";
	}
	
	if(temp.children[i].getElementsByClassName("value")[0].disabled==true){
		var nestedtemp=temp.children[i].getElementsByClassName("nestedparams")[0].getElementsByClassName("keyvaluenested");
		for(n=0;n<nestedtemp.length;n++){
			var nestedkey= nestedtemp[n].getElementsByClassName("keynested")[0].value;
			var nestedvalue= nestedtemp[n].getElementsByClassName("valuenested")[0].value;
			if(nestedkey=="" || nestedvalue==""){
				tempobj={};
				ErrorMsg("Please fill all the boxes");
				//push=false;
				break;
			}
			else{
			tempobj[nestedkey]=nestedvalue;
			}
		}
	if(Object.keys(tempobj).length != 0  && tempobj.constructor === Object){	
	pushTodl(keyy, tempobj);
	tempobj={};
	}
	}

	else{
	var value= temp.children[i].getElementsByClassName("value")[0].value;
	
	if(keyy=="" || value==""){
		dataLayer=[];
		ErrorMsg("Please fill all the boxes");
		push=false;
		//document.addEventListener('click', removeerrormsg());
		break;
	}
	else{
	pushTodl(keyy, value);
	}
}

	}
	if((Object.keys(obj).length != 0  && obj.constructor === Object && push==true)){
	dataLayer.push(obj);
	}
	else{
	push=true;
	}
}

else if(temp.id=="datalayerEcomm")
{
	var dltemp=[];
	var dltemp2=[];
	var dltemp3=[];
	var objtemp = {};
	var object={};
	var objtemp2={};
	var objtemp3={};

	var divprods=document.getElementById("divproducts");
	var prods=divprods.getElementsByClassName("divproductparams");
	//var productparams=document.querySelectorAll("#MainContainer .productparams");
	
	
	for (i=0;i<prods.length;i++){
	
	for(j=0;j<prods[i].querySelectorAll(".productparams").length;j++){
	
	var keyy= prods[i].querySelectorAll(".productparams")[j].getElementsByClassName("key")[0].value;
	
	var value= prods[i].querySelectorAll(".productparams")[j].getElementsByClassName("value")[0].value;
	
	if(document.querySelector("#MainContainer #datalayerecommevent #divproducts")==null){
		objtemp={};
		break;
	}
	else{
	//pushToobj(keyy, value);
	objtemp[keyy] = value;
	}
	}
	if(Object.keys(objtemp).length != 0  && objtemp.constructor === Object){
	dltemp.push(objtemp);
	objtemp	={};
	}
}
	
	//objtemp["impressions"]=dataLayer;
	var divactionfieldparams=document.getElementById("divactionfieldparams");
	var actionfieldparams=divactionfieldparams.getElementsByClassName("actionfieldparams");
	
	for(i=0;i<actionfieldparams.length;i++){
		var keyy= actionfieldparams[i].getElementsByClassName("key")[0].value;
		var value= actionfieldparams[i].getElementsByClassName("value")[0].value;
		if(keyy=="" ||keyy==undefined /*|| value=="" || value==undefined*/){
		objtemp2={};
		break;
		}
		else{
		objtemp2[keyy] = value;
		}
	}
	
	//dltemp2.push(objtemp);
	
	objtemp["event"]=eventName;
	var divevent=document.getElementById("diveventparams");
	var eventparams=divevent.getElementsByClassName("eventparams");
	
	for(i=0;i<eventparams.length;i++){
		var keyy= eventparams[i].getElementsByClassName("key")[0].value;
		var value= eventparams[i].getElementsByClassName("value")[0].value;
		
		if(keyy=="" ||keyy==undefined){
		//objtemp3={};
		break;
		}
		else{
		objtemp[keyy] = value;
		}
		//objtemp3[keyy] = value;
		
	}
	
	//dltemp3.push(objtemp);
	//objtemp={};
	if(Object.keys(objtemp2).length != 0  && objtemp2.constructor === Object){
	object["actionField"]=objtemp2;	
	}
	
	//object["products"]=dltemp;
	
	if(ecomevent=="impressions"){
		objtemp3[ecomevent]=dltemp;
	}
	//else if(ecomevent=="checkout_option"){
	//object["products"]=dltemp;
	//objtemp3[ecomevent]=object;
	//}
	else if(dltemp.length==0){
	objtemp3[ecomevent]=object;	
	}
	else{
	    if(document.getElementById("Configs").value=="GA4"){
	        object["items"]=dltemp;
	    }
	    else{
	        object["products"]=dltemp;
	    }
	objtemp3[ecomevent]=object;	
	}
	objtemp["ecommerce"]=objtemp3;
}
	
	if(temp.className.indexOf("datalayer")>-1 || temp.className.indexOf("adobeobj")>-1){
		if(dlname==""||dlname==undefined){
			if(temp.className.indexOf("adobeobj")>-1){
			dlname="digitalData";
			}
			else {dlname="dataLayer";}
			 }
	
	 if(temp.className.indexOf("adobeobj")>-1 && dataLayer.length!=0){
		document.getElementById("copyToClipboard").style.visibility="visible";
		var code=dlname+"="+JSON.stringify(dataLayer).replace(/\]|\[/g,'');
	 }
	if(temp.className.indexOf("datalayerdec")>-1 && dataLayer.length!=0){
		//document.getElementById("jsbeautfier").style.visibility="visible";
		//var code=dlname+"="+"[{"+JSON.stringify(dataLayer).replace(/{|}|\]|\[/g,'')+"}];";
		document.getElementById("copyToClipboard").style.visibility="visible";
    document.getElementById("clearall").style.visibility="visible";

    
		var code=dlname+"="+JSON.stringify(dataLayer);
		//var beautify=js_beautify(code);
	//document.getElementById("taggingcode").innerHTML=;
	}
	else if(temp.className.indexOf("datalayerPush")>-1 && dataLayer.length!=0){
		//document.getElementById("jsbeautfier").style.visibility="visible";
		//var code=dlname+".push"+"({"+JSON.stringify(dataLayer).replace(/{|}|\]|\[/g,'')+"});"
		document.getElementById("copyToClipboard").style.visibility="visible";
    document.getElementById("clearall").style.visibility="visible";
		var code=dlname+".push"+"("+JSON.stringify(dataLayer).replace(/\]|\[/g,'')+")";
	//document.getElementById("taggingcode").innerHTML=;
		//var beautify=js_beautify(code);	
	//$("#taggingcode").text(code);
	//document.getElementById("taggingcode").style.height=document.getElementById("taggingcode").scrollHeight+"px";
	}
	else if(temp.className.indexOf("datalayerEcomm")>-1){
	//document.getElementById("jsbeautfier").style.visibility="visible";
	document.getElementById("copyToClipboard").style.visibility="visible";
  document.getElementById("clearall").style.visibility="visible";

	var code= dlname+".push"+"("+JSON.stringify(objtemp)+");";
	//var beautify=js_beautify(code);
	//document.getElementById("taggingcode").innerHTML=;	
	//$("#taggingcode").text(beautify);
	//document.getElementById("taggingcode").style.height=document.getElementById("taggingcode").scrollHeight+"px";
	}
	var beautify=js_beautify(code);
	$("#taggingcode").text(beautify);
	document.getElementById("taggingcode").style.height=document.getElementById("taggingcode").scrollHeight+"px";

	//finalcode=beautify;
	if(finalcode=="" || finalcode!=beautify){
		finalcode=beautify;
		addCollapsibleRow(beautify,document.getElementById("taggingcode").scrollHeight);
		addData(localStorage.getItem("codeid"),"img",prevtext,beautify,document.getElementById("taggingcode").scrollHeight);
		window.localStorage.setItem("codeid",parseInt(localStorage.getItem("codeid"))+1);


	}
	else if(finalcode==beautify){
		alert("The code is already generated");
	}


	}
	else if(temp.className.indexOf("android")>-1){
		if(dlname==""||dlname==undefined){
			dlname="mFirebaseAnalytics";
			 }
		
		if(temp.className.indexOf("androidEvent")>-1){
			document.getElementById("copyToClipboard").style.visibility="visible";
			//console.log(dataLayer);
			var event=dataLayer[0].event;
			var code="";
			if(dataLayer.length>0){
			code+="Bundle params = new Bundle();\n";
			//for(i=1;i<dataLayer.length;i++){
			//	code+="params.putString("+dataLayer[i]+");";
			//}
			delete dataLayer[0].event;
			dataLayer.forEach(function(item) {
				Object.keys(item).forEach(function(key) {
				code+="params.putString(\""+key+"\",\""+item[key]+"\");\n";
				 // console.log("key:" + key + "value:" + item[key]);
				});
			  });
		}
			code+=dlname+".logEvent(\""+event+"\", params);";
			//var code= dlname+".push"+"("+JSON.stringify(dataLayer)+");";
			//var beautify=js_beautify(code);
			$("#taggingcode").text(code);
			document.getElementById("taggingcode").style.height=document.getElementById("taggingcode").scrollHeight+"px";

			if(finalcode=="" || finalcode!=code){
				document.getElementById("titlePastcodes").style.display="block";
				finalcode=code;
				addCollapsibleRow(code,document.getElementById("taggingcode").scrollHeight);
				addData(localStorage.getItem("codeid"),"img",prevtext,code,document.getElementById("taggingcode").scrollHeight);
				window.localStorage.setItem("codeid",parseInt(localStorage.getItem("codeid"))+1);

		
			}
			else if(finalcode==code){
				alert("The code is already generated");
			}
			//addCollapsibleRow(code,document.getElementById("taggingcode").scrollHeight);

		}
	}
	else if(temp.className.indexOf("iOS")>-1){
		if(dlname==""||dlname==undefined){
			dlname="mFirebaseAnalytics";
			 }	
		if(temp.className.indexOf("iOSEvent")>-1){
			document.getElementById("copyToClipboard").style.visibility="visible";
			var event=dataLayer[0].event;
			var code="";
			//if(dataLayer.length>0){
			code+="Analytics.logEvent(\""+event+"\", parameters: [\n";
			//for(i=1;i<dataLayer.length;i++){
			//	code+="params.putString("+dataLayer[i]+");";
			//}
			var temprobj= {};
			delete dataLayer[0].event;
			dataLayer.forEach(function(item) {
				Object.keys(item).forEach(function(key) {
				temprobj[key]=item[key];
				 // console.log("key:" + key + "value:" + item[key]);
				});
			  });
			  
			code+= JSON.stringify(temprobj).replace(/{|}/g,'');
		//}
			code+="])";
			//var code= dlname+".push"+"("+JSON.stringify(dataLayer)+");";
			var beautify=js_beautify(code);
			$("#taggingcode").text(beautify);
			document.getElementById("taggingcode").style.height=document.getElementById("taggingcode").scrollHeight+"px";

			if(finalcode=="" || finalcode!=code){
				document.getElementById("titlePastcodes").style.display="block";
				finalcode=code;
				addCollapsibleRow(code,document.getElementById("taggingcode").scrollHeight);
				addData(localStorage.getItem("codeid"),"img",prevtext,code,document.getElementById("taggingcode").scrollHeight);
				window.localStorage.setItem("codeid",parseInt(localStorage.getItem("codeid"))+1);
		
			}
			else if(finalcode==code){
				alert("The code is already generated");
			}
			//addCollapsibleRow(code,document.getElementById("taggingcode").scrollHeight);
		}
	}
}
catch(e){
	console.log(e);
}
}


      var stepper1Node = document.querySelector('#stepper1')
      var stepper1 = new Stepper(document.querySelector('#stepper1'))

      stepper1Node.addEventListener('show.bs-stepper', function (event) {
        console.warn('show.bs-stepper', event)
      })
      stepper1Node.addEventListener('shown.bs-stepper', function (event) {
        console.warn('shown.bs-stepper', event)
      })

      var stepper2 = new Stepper(document.querySelector('#stepper2'), {
        linear: false,
        animation: true
      })
      var stepper3 = new Stepper(document.querySelector('#stepper3'), {
        animation: true
      })
      var stepper4 = new Stepper(document.querySelector('#stepper4'))


      $(document).ready(function() {
        // Abrir sidemodal
        $("#openSidemodal").click(function() {
          alert('clicked elemente')
          $("#sidemodal").width("100%");
        });
      
        // Cerrar sidemodal
        $("#closeSidemodal").click(function() {
          $("#sidemodal").width("0");
        });
      });