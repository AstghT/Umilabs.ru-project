    function pressHandler(e) {
        console.log(e.value);
        if (e.value.length < 5) {
			document.getElementById(e.id + 'ValidationLine').className = " line";
			document.getElementById(e.id + 'ValidationLine').className += " red";
            e.className = "red";
        } else {
			document.getElementById(e.id + 'ValidationLine').className = " line";
			document.getElementById(e.id + 'ValidationLine').className += " green";
            e.className = "green";
        }
    }


    //document.getElementById("validate").addEventListener("keyup",pressHandler);