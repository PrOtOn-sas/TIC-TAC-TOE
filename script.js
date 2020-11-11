let xod = 1
let char = "X"
let area = [
["*", "*", "*"],
["*", "*", "*"],
["*", "*", "*"]
]
document.querySelector("table").onclick = function () {
    let td = event.target
    let column = td.cellIndex
    let row = td.parentElement.rowIndex
    console.log(column)
    console.log(row)
    if (td.tagName == "TD" && area[row][column] != "X" && area[row][column] != "0") {
        td.innerText = char
        if (char === "X") {
            td.classList.add("X")
        } else if (char === "0") {
            td.classList.add("O")
        }
        area[row][column] = char
        if (sas() === "X") {
            alert("KRESTIKI POBEDILY")
        }
        if (sas() === "0") {
            alert("NOLIKI POBEDILY")
        }
        xod++
        change()
    }
    console.log(area)
}

function change() {
    if (xod % 2 == 0) {
        char = "0"
    } else {
        char = "X"
    }
}


function sas() {
    if (area[0][0] == "X" && area[0][1] == "X" && area[0][2] == "X") {

        return "X";

    }

    if (area[1][0] == "X" && area[1][1] == "X" && area[1][2] == "X") {

        return "X";

    }

    if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {

        return "X";

    }

    if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {

        return "X";

    }

    if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {

        return "X";

    }

    if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {

        return "X";

    }

    if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {

        return "X";

    }

    if (area[0][2] == "X" && area[1][1] == "X" && area[2][0] == "X") {

        return "X";

    }

    if (area[0][0] == "0" && area[0][1] == "0" && area[0][2] == "0") {

        return "0";

    }

    if (area[1][0] == "0" && area[1][1] == "0" && area[1][2] == "0") {

        return "0";

    }

    if (area[2][0] == "0" && area[2][1] == "0" && area[2][2] == "0") {

        return "0";

    }

    if (area[0][0] == "0" && area[1][0] == "0" && area[2][0] == "0") {

        return "0";

    }

    if (area[0][1] == "0" && area[1][1] == "0" && area[2][1] == "0") {

        return "0";

    }

    if (area[0][2] == "0" && area[1][2] == "0" && area[2][2] == "0") {

        return "0";

    }

    if (area[0][0] == "0" && area[1][1] == "0" && area[2][2] == "0") {

        return "0";

    }

    if (area[0][2] == "0" && area[1][1] == "0" && area[2][0] == "0") {

        return "0";

    }

    return false;

}
