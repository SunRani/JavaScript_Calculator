var input = document.getElementById("eval");
var output = document.getElementById("ans");

function onScreen() {
    console.log(this.document)
};

window.addEventListener("click", (event) => {
    if(event.target === document.getElementById("one")) {
        document.getElementById("eval").innerHTML += (document.getElementById("one").textContent);
    }

    else if(event.target === document.getElementById("two")) {
        document.getElementById("eval").innerHTML += (document.getElementById("two").textContent);
    }

    else if(event.target === document.getElementById("three")) {
        document.getElementById("eval").innerHTML += (document.getElementById("three").textContent);
    }

    else if(event.target === document.getElementById("four")) {
        document.getElementById("eval").innerHTML += (document.getElementById("four").textContent);
    }

    else if(event.target === document.getElementById("five")) {
        document.getElementById("eval").innerHTML += (document.getElementById("five").textContent);
    }
    
    else if(event.target === document.getElementById("six")) {
        document.getElementById("eval").innerHTML += (document.getElementById("six").textContent);
    }

    else if(event.target === document.getElementById("seven")) {
        document.getElementById("eval").innerHTML += (document.getElementById("seven").textContent);
    }

    else if(event.target === document.getElementById("eight")) {
        document.getElementById("eval").innerHTML += (document.getElementById("eight").textContent);
    }

    else if(event.target === document.getElementById("nine")) {
        document.getElementById("eval").innerHTML += (document.getElementById("nine").textContent);
    }

    else if (event.target === document.getElementById("add")) {
        document.getElementById("eval").innerHTML += document.getElementById("add").textContent;
    }

    else if (event.target === document.getElementById("subtract")) {
        document.getElementById("eval").innerHTML += document.getElementById("subtract").textContent;
    }

    else if (event.target === document.getElementById("multiply")) {
        document.getElementById("eval").innerHTML += '*';
    }

    else if (event.target === document.getElementById("divide")) {
        document.getElementById("eval").innerHTML += document.getElementById("divide").textContent;
    }

    else if (event.target === document.getElementById("equals")) {
        document.getElementById('ans').innerHTML = eval(document.getElementById("eval").textContent);
    }

    else if (event.target === document.getElementById("clear")) {
        document.getElementById("eval"). innerHTML = '&nbsp;';
        document.getElementById("ans").innerHTML = '&nbsp;';
    }
});
