document.addEventListener('DOMContentLoaded', function () {
    (function cleanupDashRows(){
        document.querySelectorAll('section.specs-section table tbody tr').forEach(tr => {
            const tds = tr.querySelectorAll('td');
            if (tds.length >= 2) {
                const dataTd = tds[1];
                const text = dataTd.textContent.trim();
                if (text === '-') tr.style.display = 'none';
            }
        });

        document.querySelectorAll('.specs-subtitle').forEach(sub => {
            let el = sub.nextElementSibling;
            while (el && el.tagName && el.tagName.toLowerCase() !== 'table') {
                el = el.nextElementSibling;
            }
            if (!el || el.tagName.toLowerCase() !== 'table') return;

            const rows = Array.from(el.querySelectorAll('tbody tr'));
            let hasMeaningful = false;

            for (const row of rows) {
                if (row.style.display === 'none') continue;
                const tds = row.querySelectorAll('td');
                for (let i = 1; i < tds.length; i++) {
                    const txt = tds[i].textContent.trim();
                    if (txt !== '' && txt !== '-') { hasMeaningful = true; break; }
                }
                if (hasMeaningful) break;
            }

            if (!hasMeaningful) {
                sub.remove();
                el.remove();
            }
        });

        document.querySelectorAll('section.specs-section table').forEach(table => {
            const rows = Array.from(table.querySelectorAll('tbody tr'));
            if (rows.length > 0 && rows.every(r => r.style.display === 'none')) {
                table.remove();
            }
        });
    })();

    (function cleanupDashBars(){
        document.querySelectorAll('.brillo-barra-interna').forEach(bar => {
            let label = null;
            const td = bar.closest('td');
            const tr = bar.closest('tr');

            if (td) {
                label = td.querySelector('[DataValor], [data-valor], span[id$="-valor"], span[data-valor]');
            }
            if (!label && tr) {
                label = tr.querySelector('[DataValor], [data-valor], span[id$="-valor"], span[data-valor]');
            }

            let val = '';
            if (label) {
                val = (label.getAttribute('DataValor') ?? label.getAttribute('data-valor') ?? label.textContent).trim();
            } else {
                val = (bar.getAttribute('aria-valuenow') ?? bar.dataset.value ?? bar.textContent).trim();
            }

            if (val === '-') {
                try { bar.remove(); } catch(e){}
                if (tr) tr.remove();
            }
        });
    })();
});