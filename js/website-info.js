document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todas las tablas dentro de cada specs-card
    const tables = document.querySelectorAll('.specs-card table');

    tables.forEach(table => {
        const tbody = table.tBodies[0];
        if (!tbody) return;

        // Eliminar cada fila que contenga el símbolo "-" en cualquiera de sus celdas
        const rows = Array.from(tbody.querySelectorAll('tr'));
        rows.forEach(tr => {
            const cells = Array.from(tr.querySelectorAll('td'));
            const hasDash = cells.some(td => td.textContent.trim() === '-');
            if (hasDash) tr.remove();
        });

        // Si después de eliminar no quedan filas, eliminar también el specs-subtitle asociado
        const remainingRows = tbody.querySelectorAll('tr').length;
        if (remainingRows === 0) {
            // Buscar el elemento .specs-subtitle anterior inmediato (si existe) y eliminarlo
            let prev = table.previousElementSibling;
            while (prev && !prev.classList.contains('specs-subtitle')) {
                prev = prev.previousElementSibling;
            }
            if (prev && prev.classList.contains('specs-subtitle')) prev.remove();

            // Opcional: eliminar la tabla vacía para limpiar el DOM
            table.remove();
        }
    });
});
