document.addEventListener('DOMContentLoaded', function () {
    const tables = document.querySelectorAll('.specs-card table');

    tables.forEach(table => {
        const tbody = table.tBodies[0];
        if (!tbody) return;

        const rows = Array.from(tbody.querySelectorAll('tr'));
        rows.forEach(tr => {
            const cells = Array.from(tr.querySelectorAll('td'));
            const hasDashText = cells.some(td => td.textContent.trim() === '-');

            const hasDashDataValor = Array.from(tr.querySelectorAll('[DataValor]')).some(el => {
                const val = el.getAttribute('DataValor');
                return val && val.trim() === '-';
            });

            if (hasDashText || hasDashDataValor) tr.remove();
        });

        const remainingRows = tbody.querySelectorAll('tr').length;
        if (remainingRows === 0) {
            let prev = table.previousElementSibling;
            while (prev && !prev.classList.contains('specs-subtitle')) {
                prev = prev.previousElementSibling;
            }
            if (prev && prev.classList.contains('specs-subtitle')) prev.remove();

            table.remove();
        }
    });
});