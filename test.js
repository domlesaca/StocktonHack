//========= Step 1 - Client Side Compression ===========

//Images Objects
var source_img = document.getElementById("source_img"),
    target_img = document.getElementById("target_img");

//(NOTE: see the examples/js/demo.js file to understand how this object could be a local image 
//from your filesystem using the File API)

//An Integer from 0 to 100
var quality =  80,
// output file format (jpg || png || webp)
output_format = 'jpg', 
//This function returns an Image Object 
target_img.src = jic.compress(source_img,quality,output_format).src;  


//======= Step 2 - Upload compressed image to server =========

//Here we set the params like endpoint, var name (server side) and filename
var server_endpoint = 'upload.php',
	server_var_name = 'file',
	filename = "new.jpg";

//This is the callback that will be triggered once the upload is completed
var callback = function(response){ console.log(response); }

//Here goes the magic
jic.upload(target_img, server_endpoint, server_var_name, filename, callback);

//=======  Optional parameters example: errorCallback, duringCallback and customHeaders ======= 
// This function gets called on an error response of the server - status code of >= 400.
var errorCallback = function () {
	// Handle upload failure
};

// This function gets called while the file is uploading. Returns the percent completeness of the image being uploaded
var duringCallback = function (progressPercent) {
	//progressPercent can be used to show a progress bar
};

// Custom Request Headers, nifty for things like Basic Authorization

var customHeaders = { 'Authorization': 'Basic someBase64EncodedHash=====' };

jic.upload(target_img, server_endpoint, server_var_name, filename, successCallback, errorCallback, duringCallback, customHeaders);
