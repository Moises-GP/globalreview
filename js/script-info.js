//Barra de pantalla cuerpo
    const valorPantallaCuerpo = document.getElementById("pantalla-cuerpo-valor");
    const barraPantallaCuerpo = document.getElementById("pantalla-cuerpo-barra");

    if (valorPantallaCuerpo && barraPantallaCuerpo) {
        const porcentajePantallaCuerpo = parseFloat(valorPantallaCuerpo.getAttribute("data-valor")) || 0;
        barraPantallaCuerpo.style.width = Math.min(porcentajePantallaCuerpo, 100) + "%";
    }

//Barra de brillo
document.addEventListener("DOMContentLoaded", function() {
    const valorSpan = document.getElementById("brillo-valor");
    const barraInterna = document.getElementById("brillo-barra-interna");

    const brilloMaximo = 2372;

    if (valorSpan && barraInterna) {
        const brilloActual = parseInt(valorSpan.getAttribute("data-valor")) || 0;
        const porcentaje = Math.min((brilloActual / brilloMaximo) * 100, 100);
        barraInterna.style.width = porcentaje + "%";
    }

    // Barras Geekbench
    const singleBar = document.getElementById("geekbench-single-bar");
    const multiBar = document.getElementById("geekbench-multi-bar");
    const singleValor = document.getElementById("geekbench-single-valor");
    const multiValor = document.getElementById("geekbench-multi-valor");
    const singleMax = 3453;
    const multiMax = 9532;

    if (singleBar && singleValor) {
        const singleValue = parseInt(singleValor.getAttribute("data-valor")) || 0;
        const singlePercent = Math.min((singleValue / singleMax) * 100, 100);
        singleBar.style.width = singlePercent + "%";
    }
    if (multiBar && multiValor) {
        const multiValue = parseInt(multiValor.getAttribute("data-valor")) || 0;
        const multiPercent = Math.min((multiValue / multiMax) * 100, 100);
        multiBar.style.width = multiPercent + "%";
    }

    // Barra AnTuTu
    const antutuValor = document.getElementById("antutu-valor");
    const antutuBarra = document.getElementById("antutu-barra");
    const antutuMax = 3063922;

    if (antutuValor && antutuBarra) {
        const valor = parseInt(antutuValor.getAttribute("data-valor")) || 0;
        const porcentaje = Math.min((valor / antutuMax) * 100, 100);
        antutuBarra.style.width = porcentaje + "%";
    }

// 3DMark Wild Life barra
    const wildlifeValor = document.getElementById("wildlife-valor");
    const wildlifeBarra = document.getElementById("wildlife-barra");
    const wildlifeMax = 21252;

    if (wildlifeValor && wildlifeBarra) {
        const valor = parseInt(wildlifeValor.getAttribute("data-valor")) || 0;
        const porcentaje = Math.min((valor / wildlifeMax) * 100, 100);
        wildlifeBarra.style.width = porcentaje + "%";
    }

    // PCMark 3.0 barra
    const pcmarkValor = document.getElementById("pcmark-valor");
    const pcmarkBarra = document.getElementById("pcmark-barra");
    const pcmarkMax = 19982;

    if (pcmarkValor && pcmarkBarra) {
        const valor = parseInt(pcmarkValor.getAttribute("data-valor")) || 0;
        const porcentaje = Math.min((valor / pcmarkMax) * 100, 100);
        pcmarkBarra.style.width = porcentaje + "%";
    }

    // Barra Calidad de la fotografía
    const dxomarkFotoValor = document.getElementById("dxomark-foto-valor");
    const dxomarkFotoBarra = document.getElementById("dxomark-foto-barra");
    const dxomarkFotoMax = 169;

    function actualizarDxOMarkFotoBarra() {
        if (dxomarkFotoValor && dxomarkFotoBarra) {
            const valor = parseFloat(dxomarkFotoValor.getAttribute("data-valor")) || 0;
            const porcentaje = Math.min((valor / dxomarkFotoMax) * 100, 100);
            dxomarkFotoBarra.style.width = porcentaje + "%";
        }
    }
    actualizarDxOMarkFotoBarra();
    if (dxomarkFotoValor) {
        const observerFoto = new MutationObserver(actualizarDxOMarkFotoBarra);
        observerFoto.observe(dxomarkFotoValor, { attributes: true, attributeFilter: ['data-valor'] });
    }

    // Barra Calidad de vídeo
    const dxomarkVideoValor = document.getElementById("dxomark-video-valor");
    const dxomarkVideoBarra = document.getElementById("dxomark-video-barra");
    const dxomarkVideoMax = 159;

    function actualizarDxOMarkVideoBarra() {
        if (dxomarkVideoValor && dxomarkVideoBarra) {
            const valor = parseFloat(dxomarkVideoValor.getAttribute("data-valor")) || 0;
            const porcentaje = Math.min((valor / dxomarkVideoMax) * 100, 100);
            dxomarkVideoBarra.style.width = porcentaje + "%";
        }
    }
    actualizarDxOMarkVideoBarra();
    if (dxomarkVideoValor) {
        const observerVideo = new MutationObserver(actualizarDxOMarkVideoBarra);
        observerVideo.observe(dxomarkVideoValor, { attributes: true, attributeFilter: ['data-valor'] });
    }

    // Barra DxOMark Score
    const dxomarkScoreValor = document.getElementById("dxomark-score-valor");
    const dxomarkScoreBarra = document.getElementById("dxomark-score-barra");
    const dxomarkScoreMax = 163;

    function actualizarDxOMarkBarra() {
        if (dxomarkScoreValor && dxomarkScoreBarra) {
            const valor = parseFloat(dxomarkScoreValor.getAttribute("data-valor")) || 0;
            const porcentaje = Math.min((valor / dxomarkScoreMax) * 100, 100);
            dxomarkScoreBarra.style.width = porcentaje + "%";
        }
    }

    actualizarDxOMarkBarra();

    if (dxomarkScoreValor) {
        const observer = new MutationObserver(actualizarDxOMarkBarra);
        observer.observe(dxomarkScoreValor, { attributes: true, attributeFilter: ['data-valor'] });
    }

// Barra DxOMark Selfie - Fotografía
    const dxomarkFotoSelfieValor = document.getElementById("dxomark-foto-selfie-valor");
    const dxomarkFotoSelfieBarra = document.getElementById("dxomark-foto-selfie-barra");
    const dxomarkFotoSelfieMax = 149;

    function actualizarDxOMarkFotoSelfieBarra() {
        if (dxomarkFotoSelfieValor && dxomarkFotoSelfieBarra) {
            const valor = parseFloat(dxomarkFotoSelfieValor.getAttribute("data-valor")) || 0;
            const porcentaje = Math.min((valor / dxomarkFotoSelfieMax) * 100, 100);
            dxomarkFotoSelfieBarra.style.width = porcentaje + "%";
        }
    }
    actualizarDxOMarkFotoSelfieBarra();
    if (dxomarkFotoSelfieValor) {
        const observerFotoSelfie = new MutationObserver(actualizarDxOMarkFotoSelfieBarra);
        observerFotoSelfie.observe(dxomarkFotoSelfieValor, { attributes: true, attributeFilter: ['data-valor'] });
    }

    // Barra DxOMark Selfie - Vídeo
    const dxomarkVideoSelfieValor = document.getElementById("dxomark-video-selfie-valor");
    const dxomarkVideoSelfieBarra = document.getElementById("dxomark-video-selfie-barra");
    const dxomarkVideoSelfieMax = 156;

    function actualizarDxOMarkVideoSelfieBarra() {
        if (dxomarkVideoSelfieValor && dxomarkVideoSelfieBarra) {
            const valor = parseFloat(dxomarkVideoSelfieValor.getAttribute("data-valor")) || 0;
            const porcentaje = Math.min((valor / dxomarkVideoSelfieMax) * 100, 100);
            dxomarkVideoSelfieBarra.style.width = porcentaje + "%";
        }
    }
    actualizarDxOMarkVideoSelfieBarra();
    if (dxomarkVideoSelfieValor) {
        const observerVideoSelfie = new MutationObserver(actualizarDxOMarkVideoSelfieBarra);
        observerVideoSelfie.observe(dxomarkVideoSelfieValor, { attributes: true, attributeFilter: ['data-valor'] });
    }

    // Barra DxOMark Selfie - Score
    const dxomarkScoreSelfieValor = document.getElementById("dxomark-score-selfie-valor");
    const dxomarkScoreSelfieBarra = document.getElementById("dxomark-score-selfie-barra");
    const dxomarkScoreSelfieMax = 151;

    function actualizarDxOMarkScoreSelfieBarra() {
        if (dxomarkScoreSelfieValor && dxomarkScoreSelfieBarra) {
            const valor = parseFloat(dxomarkScoreSelfieValor.getAttribute("data-valor")) || 0;
            const porcentaje = Math.min((valor / dxomarkScoreSelfieMax) * 100, 100);
            dxomarkScoreSelfieBarra.style.width = porcentaje + "%";
        }
    }
    actualizarDxOMarkScoreSelfieBarra();
    if (dxomarkScoreSelfieValor) {
        const observerScoreSelfie = new MutationObserver(actualizarDxOMarkScoreSelfieBarra);
        observerScoreSelfie.observe(dxomarkScoreSelfieValor, { attributes: true, attributeFilter: ['data-valor'] });
    }

    // Barra Duración general de la batería
    const bateriaDuracionValor = document.getElementById("bateria-duracion-valor");
    const bateriaDuracionBarra = document.getElementById("bateria-duracion-barra");
    const bateriaDuracionMax = 35.1;

    if (bateriaDuracionValor && bateriaDuracionBarra) {
        const valor = parseFloat(bateriaDuracionValor.getAttribute("data-valor")) || 0;
        const porcentaje = Math.min((valor / bateriaDuracionMax) * 100, 100);
        bateriaDuracionBarra.style.width = porcentaje + "%";
    }

    // Barra Volumen máximo altavoces
    const volumenMaximoValor = document.getElementById("volumen-maximo-valor");
    const volumenMaximoBarra = document.getElementById("volumen-maximo-barra");
    const volumenMaximoDB = 100;

    if (volumenMaximoValor && volumenMaximoBarra) {
        const valor = parseFloat(volumenMaximoValor.getAttribute("data-valor")) || 0;
        const porcentaje = Math.min((valor / volumenMaximoDB) * 100, 100);
        volumenMaximoBarra.style.width = porcentaje + "%";
    }

    var h2 = document.querySelector('.info-card h2');
    if (h2) {
        h2.setAttribute('translate', 'no');
        h2.classList.add('notranslate');
    }
});