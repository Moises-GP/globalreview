function sortTableByColumnAndUpdateRank(columnIndex) {
    const table = document.querySelector(".card-container tbody");
    const rows = Array.from(table.rows);

    const rowValues = rows.map((row, index) => {
        const cellValue = row.cells[columnIndex].textContent.trim() === "-" ? -1 : parseInt(row.cells[columnIndex].textContent.trim());
        const deviceName = row.cells[1].textContent.trim();
        const firstWord = deviceName.split(' ')[0];
        return { row, value: cellValue, name: deviceName, firstWord: firstWord, originalIndex: index };
    });

    rowValues.sort((a, b) => {
        if (b.value === a.value) {
            return a.firstWord.localeCompare(b.firstWord);
        }
        return b.value - a.value;
    });

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }

    let previousValue = null;
    rowValues.forEach((rowValue, index) => {
        if (previousValue !== null && rowValue.value === previousValue) {
            rowValue.row.cells[0].textContent = "=";
        } else {
            rowValue.row.cells[0].textContent = index + 1;
        }
        previousValue = rowValue.value;
        table.appendChild(rowValue.row);
    });

    const headers = document.querySelectorAll(".card-container th");
    headers.forEach((header, idx) => {
        if (idx === columnIndex) {
            header.classList.add("selected");
        } else {
            header.classList.remove("selected");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    sortTableByColumnAndUpdateRank(2);
});

document.getElementById("cameraHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(2);
});
document.getElementById("selfieHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(3);
});
document.getElementById("audioHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(4);
});
document.getElementById("displayHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(5);
});
document.getElementById("batteryHeader").addEventListener("click", () => {
    sortTableByColumnAndUpdateRank(6);
});