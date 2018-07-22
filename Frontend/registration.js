
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
        var url = "https://qgub8jl46k.execute-api.us-east-1.amazonaws.com/dev/api/v1.0/create_user";
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Access-Control-Allow-Methods', '*')
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json);
            }
        };
        xhr.send(data);
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

		return obj;
	}

	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.getElementById( "register-form" );
        var output = document.getElementById( "output" );
		form.addEventListener( "submit", function( e ) {
			e.preventDefault();
            var json = toJSONString( this );
            json = JSON.stringify({
                User: {
                    'Name': json['name'],
                    'email': json['Email'],
                    'phoneNumber': json['phone'],
                    'city': json['city'],
                    'state': json['state'],
                    'userType': json['Account_Type'],
                    'Bio': "Enter bio"
                },
                Interests: [json['Interests']],
                Skills: [json['Skills']],
                profilepic: "NA"
            })
            output.innerHTML = json;
            
            sendRequest(json);
            
        }, false);
        
	});

})();