
function convertToJSON(formData) {
    /*
    let jsonObject = {}
    formData.forEach(fucntion(IDBCursorWithValue, key){
        jsonObject[key] = value;
    });

    return JSON.stringify(jsonObject);
    */
}

(function() {
    function sendRequest(data) {
        var xhr = new XMLHttpRequest();
        var url = "https://7oe55zfy92.execute-api.us-east-1.amazonaws.com/dev/api/v1.0/create_user";
        alert("hello");
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE')
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json);
            }
        };
        xhr.send(data);
        alert("hi");
    }

	function toJSONString( form ) {
		var obj = {};
		var elements = form.querySelectorAll( "input, select, textarea" );
		for( var i = 0; i < elements.length; ++i ) {
			var element = elements[i];
			var name = element.name;
			var value = element.value;

			if( name ) {
				obj[ name ] = value;
			}
		}

		return JSON.stringify( obj );
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "register-form" );
        var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
            output.innerHTML = json;
           
            sendRequest(json);
            
        }, false);
        
        /*
        var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
			var json = toJSONString( this );
			output.innerHTML = json;

        }, false);
        */

	});

})();