document.addEventListener("DOMContentLoaded", function() {
    const modelKey = document.body.getAttribute("data-model");
    if (!modelKey || !window.smartphoneSpecs[modelKey]) return;

    const design = window.smartphoneSpecs[modelKey].design;
    const display = window.smartphoneSpecs[modelKey].display;
    const performance = window.smartphoneSpecs[modelKey].performance;
    const maincamera = window.smartphoneSpecs[modelKey].maincamera;
    const selfiecamera = window.smartphoneSpecs[modelKey].selfiecamera;
    const memory = window.smartphoneSpecs[modelKey].memory;
    const battery = window.smartphoneSpecs[modelKey].battery;
    const connectivity = window.smartphoneSpecs[modelKey].connectivity;
    const sound = window.smartphoneSpecs[modelKey].sound;
    const others = window.smartphoneSpecs[modelKey].others;


    if (!design) return;

    if (document.getElementById("height")) document.getElementById("height").innerHTML = design.Height;
    if (document.getElementById("width")) document.getElementById("width").innerHTML = design.Width;
    if (document.getElementById("thickness")) document.getElementById("thickness").innerHTML = design.Thickness;
    if (document.getElementById("weight")) document.getElementById("weight").innerHTML = design.Weight;
    if (document.getElementById("waterproof")) document.getElementById("waterproof").innerHTML = design.Waterproof;
    if (document.getElementById("advanced-cooling")) document.getElementById("advanced-cooling").innerHTML = design.AdvancedCooling;
    if (document.getElementById("rear-material")) document.getElementById("rear-material").innerHTML = design.RearMaterial;
    if (document.getElementById("frame-material")) document.getElementById("frame-material").innerHTML = design.FrameMaterial;
    if (document.getElementById("colors")) document.getElementById("colors").innerHTML = design.Colors;
    if (document.getElementById("fingerprint-scanner")) document.getElementById("fingerprint-scanner").innerHTML = design.FingerprintScanner;
    if (document.getElementById("screen-body-ratio") && design.ScreenBodyRatio) {
        document.getElementById("screen-body-ratio").textContent = design.ScreenBodyRatio.value;
        document.getElementById("screen-body-ratio").setAttribute("DataValor", design.ScreenBodyRatio.dataValor);
    }
    
    if (document.getElementById("type")) document.getElementById("type").innerHTML = display.Type;
    if (document.getElementById("size")) document.getElementById("size").innerHTML = display.Size;
    if (document.getElementById("resolution")) document.getElementById("resolution").innerHTML = display.Resolution;
    if (document.getElementById("aspect-ratio")) document.getElementById("aspect-ratio").innerHTML = display.AspectRatio;
    if (document.getElementById("ppi")) document.getElementById("ppi").innerHTML = display.PPI;
    if (document.getElementById("refresh-rate")) document.getElementById("refresh-rate").innerHTML = display.RefreshRate;
    if (document.getElementById("adaptive-refresh-rate")) document.getElementById("adaptive-refresh-rate").innerHTML = display.AdaptiveRefreshRate;
    if (document.getElementById("touch-sampling-rate")) document.getElementById("touch-sampling-rate").innerHTML = display.TouchSamplingRate;
    if (document.getElementById("hdr-support")) document.getElementById("hdr-support").innerHTML = display.HDRSupport;
    if (document.getElementById("max-rated-brightness")) document.getElementById("max-rated-brightness").innerHTML = display.MaxBrightness;
    if (document.getElementById("max-rated-brightness-hdr")) document.getElementById("max-rated-brightness-hdr").innerHTML = display.MaxBrightnessHDR;
    if (document.getElementById("screen-protection")) document.getElementById("screen-protection").innerHTML = display.ScreenProtection;
    if (document.getElementById("screen-body-ratio2")) document.getElementById("screen-body-ratio2").innerHTML = display.ScreenBodyRatio2;
    if (document.getElementById("display-features")) document.getElementById("display-features").innerHTML = display.DisplayFeatures;
    if (document.getElementById("rgb-color-space")) document.getElementById("rgb-color-space").innerHTML = display.RGBColorSpace;
    if (document.getElementById("pwm")) document.getElementById("pwm").innerHTML = display.PWM;
    if (document.getElementById("response-time")) document.getElementById("response-time").innerHTML = display.ResponseTime;
    if (document.getElementById("contrast")) document.getElementById("contrast").innerHTML = display.Contrast;
    if (document.getElementById("peak-brightness-auto") && display.PeakBrightnessTestAuto) {
        document.getElementById("peak-brightness-auto").innerHTML = display.PeakBrightnessTestAuto.value;
        document.getElementById("peak-brightness-auto").setAttribute("DataValor", display.PeakBrightnessTestAuto.dataValor);
    }

    if (document.getElementById("chipset")) document.getElementById("chipset").innerHTML = performance.Chipset;
    if (document.getElementById("max-clock")) document.getElementById("max-clock").innerHTML = performance.MaxClock;
    if (document.getElementById("cpu-cores")) document.getElementById("cpu-cores").innerHTML = performance.CPUCores;
    if (document.getElementById("architecture")) document.getElementById("architecture").innerHTML = performance.Architecture;
    if (document.getElementById("cache")) document.getElementById("cache").innerHTML = performance.Cache;
    if (document.getElementById("manufacturing")) document.getElementById("manufacturing").innerHTML = performance.Manufacturing;
    if (document.getElementById("lithography-process")) document.getElementById("lithography-process").innerHTML = performance.LithographyProcess;
    if (document.getElementById("neural-processor")) document.getElementById("neural-processor").innerHTML = performance.NeuralProcessor;
    if (document.getElementById("graphics")) document.getElementById("graphics").innerHTML = performance.Graphics;
    if (document.getElementById("gpu-shading-units")) document.getElementById("gpu-shading-units").innerHTML = performance.GPUShadingUnits;
    if (document.getElementById("gpu-clock")) document.getElementById("gpu-clock").innerHTML = performance.GPUClock;
    if (document.getElementById("flops")) document.getElementById("flops").innerHTML = performance.FLOPS;
    if (document.getElementById("geekbench-single-valor") && performance.Geekbench6Single) {
        document.getElementById("geekbench-single-valor").innerHTML = performance.Geekbench6Single.value;
        document.getElementById("geekbench-single-valor").setAttribute("DataValor", performance.Geekbench6Single.dataValor);
    }
    if (document.getElementById("geekbench-multi-valor") && performance.Geekbench6Multi) {
        document.getElementById("geekbench-multi-valor").innerHTML = performance.Geekbench6Multi.value;
        document.getElementById("geekbench-multi-valor").setAttribute("DataValor", performance.Geekbench6Multi.dataValor);
    }
    if (document.getElementById("open-cl-score")) document.getElementById("open-cl-score").innerHTML = performance.OpenCLScore;
    if (document.getElementById("vulkan-score")) document.getElementById("vulkan-score").innerHTML = performance.VulkanScore;
    if (document.getElementById("geekbench-computing-gpu")) document.getElementById("geekbench-computing-gpu").innerHTML = performance.GeekbenchComputingGPU;
    if (document.getElementById("antutu-valor") && performance.AnTuTu10) {
        document.getElementById("antutu-valor").innerHTML = performance.AnTuTu10.value;
        document.getElementById("antutu-valor").setAttribute("DataValor", performance.AnTuTu10.dataValor);
    }
    if (document.getElementById("cpu")) document.getElementById("cpu").innerHTML = performance.CPU;
    if (document.getElementById("gpu")) document.getElementById("gpu").innerHTML = performance.GPU;
    if (document.getElementById("memory")) document.getElementById("memory").innerHTML = performance.Memory;
    if (document.getElementById("ux")) document.getElementById("ux").innerHTML = performance.UX;
    if (document.getElementById("total-score")) document.getElementById("total-score").innerHTML = performance.TotalScore;
    if (document.getElementById("wild-life-performance") && performance.WildLifePerformance) {
        document.getElementById("wild-life-performance").innerHTML = performance.WildLifePerformance.value;
        document.getElementById("wild-life-performance").setAttribute("DataValor", performance.WildLifePerformance.dataValor);
    }
    if (document.getElementById("graphics-score")) document.getElementById("graphics-score").innerHTML = performance.GraphicsScore;
    if (document.getElementById("graphics-test")) document.getElementById("graphics-test").innerHTML = performance.GraphicsTest;
    if (document.getElementById("stability")) document.getElementById("stability").innerHTML = performance.Stability;
    if (document.getElementById("max-surface-temperature")) document.getElementById("max-surface-temperature").innerHTML = performance.MaxSurfaceTemperature;
    if (document.getElementById("pcmark-valor") && performance.PCMark) {
        document.getElementById("pcmark-valor").innerHTML = performance.PCMark.value;
        document.getElementById("pcmark-valor").setAttribute("DataValor", performance.PCMark.dataValor);
    }
    if (document.getElementById("web-score")) document.getElementById("web-score").innerHTML = performance.WebScore;
    if (document.getElementById("video-editing")) document.getElementById("video-editing").innerHTML = performance.VideoEditing;
    if (document.getElementById("photo-editing")) document.getElementById("photo-editing").innerHTML = performance.PhotoEditing;
    if (document.getElementById("data-manipulation")) document.getElementById("data-manipulation").innerHTML = performance.DataManipulation;
    if (document.getElementById("writing-score")) document.getElementById("writing-score").innerHTML = performance.WritingScore;

    if (document.getElementById("matrix")) document.getElementById("matrix").innerHTML = maincamera.Matrix;
    if (document.getElementById("image-resolution")) document.getElementById("image-resolution").innerHTML = maincamera.ImageResolution;
    if (document.getElementById("zoom")) document.getElementById("zoom").innerHTML = maincamera.Zoom;
    if (document.getElementById("maximum-zoom")) document.getElementById("maximum-zoom").innerHTML = maincamera.MaximumZoom;
    if (document.getElementById("flash")) document.getElementById("flash").innerHTML = maincamera.Flash;
    if (document.getElementById("stabilization")) document.getElementById("stabilization").innerHTML = maincamera.Stabilization;
    if (document.getElementById("8k-video-recording")) document.getElementById("8k-video-recording").innerHTML = maincamera.Video8K;
    if (document.getElementById("4k-video-recording")) document.getElementById("4k-video-recording").innerHTML = maincamera.Video4K;
    if (document.getElementById("1080p-video-recording")) document.getElementById("1080p-video-recording").innerHTML = maincamera.Video1080p;
    if (document.getElementById("slow-motion")) document.getElementById("slow-motion").innerHTML = maincamera.SlowMotion;
    if (document.getElementById("angle-widest-lens")) document.getElementById("angle-widest-lens").innerHTML = maincamera.AngleWidestLens;
    if (document.getElementById("lenses")) document.getElementById("lenses").innerHTML = maincamera.Lenses;
    if (document.getElementById("camera-features")) document.getElementById("camera-features").innerHTML = maincamera.CameraFeatures;
    if (document.getElementById("image-resolution2")) document.getElementById("image-resolution2").innerHTML = maincamera.ImageResolution2;
    if (document.getElementById("aperture")) document.getElementById("aperture").innerHTML = maincamera.Aperture;
    if (document.getElementById("focal-length")) document.getElementById("focal-length").innerHTML = maincamera.FocalLength;
    if (document.getElementById("sensor")) document.getElementById("sensor").innerHTML = maincamera.Sensor;
    if (document.getElementById("sensor-size")) document.getElementById("sensor-size").innerHTML = maincamera.SensorSize;
    if (document.getElementById("pixel-size")) document.getElementById("pixel-size").innerHTML = maincamera.PixelSize;
    if (document.getElementById("autofocus")) document.getElementById("autofocus").innerHTML = maincamera.Autofocus;
    if (document.getElementById("stabilization2")) document.getElementById("stabilization2").innerHTML = maincamera.Stabilization2;
    if (document.getElementById("image-resolution3")) document.getElementById("image-resolution3").innerHTML = maincamera.ImageResolution3;
    if (document.getElementById("aperture2")) document.getElementById("aperture2").innerHTML = maincamera.Aperture2;
    if (document.getElementById("focal-length2")) document.getElementById("focal-length2").innerHTML = maincamera.FocalLength2;
    if (document.getElementById("sensor2")) document.getElementById("sensor2").innerHTML = maincamera.Sensor2;
    if (document.getElementById("sensor-size2")) document.getElementById("sensor-size2").innerHTML = maincamera.SensorSize2;
    if (document.getElementById("pixel-size2")) document.getElementById("pixel-size2").innerHTML = maincamera.PixelSize2;
    if (document.getElementById("stabilization3")) document.getElementById("stabilization3").innerHTML = maincamera.Stabilization3;
    if (document.getElementById("image-resolution4")) document.getElementById("image-resolution4").innerHTML = maincamera.ImageResolution4;
    if (document.getElementById("aperture3")) document.getElementById("aperture3").innerHTML = maincamera.Aperture3;
    if (document.getElementById("focal-length3")) document.getElementById("focal-length3").innerHTML = maincamera.FocalLength3;
    if (document.getElementById("sensor3")) document.getElementById("sensor3").innerHTML = maincamera.Sensor3;
    if (document.getElementById("sensor-size3")) document.getElementById("sensor-size3").innerHTML = maincamera.SensorSize3;
    if (document.getElementById("pixel-size3")) document.getElementById("pixel-size3").innerHTML = maincamera.PixelSize3;
    if (document.getElementById("stabilization4")) document.getElementById("stabilization4").innerHTML = maincamera.Stabilization4;
    if (document.getElementById("image-resolution5")) document.getElementById("image-resolution5").innerHTML = maincamera.ImageResolution5;
    if (document.getElementById("aperture4")) document.getElementById("aperture4").innerHTML = maincamera.Aperture4;
    if (document.getElementById("focal-length4")) document.getElementById("focal-length4").innerHTML = maincamera.FocalLength4;
    if (document.getElementById("sensor4")) document.getElementById("sensor4").innerHTML = maincamera.Sensor4;
    if (document.getElementById("sensor-size4")) document.getElementById("sensor-size4").innerHTML = maincamera.SensorSize4;
    if (document.getElementById("pixel-size4")) document.getElementById("pixel-size4").innerHTML = maincamera.PixelSize4;
    if (document.getElementById("stabilization5")) document.getElementById("stabilization5").innerHTML = maincamera.Stabilization5;
    if (document.getElementById("dxomark-foto-valor") && maincamera.PhotoQuality) {
        document.getElementById("dxomark-foto-valor").textContent = maincamera.PhotoQuality.value;
        document.getElementById("dxomark-foto-valor").setAttribute("DataValor", maincamera.PhotoQuality.dataValor);
    }
    if (document.getElementById("dxomark-video-valor") && maincamera.VideoQuality) {
        document.getElementById("dxomark-video-valor").textContent = maincamera.VideoQuality.value;
        document.getElementById("dxomark-video-valor").setAttribute("DataValor", maincamera.VideoQuality.dataValor);
    }
    if (document.getElementById("bokeh")) document.getElementById("bokeh").innerHTML = maincamera.Bokeh;
    if (document.getElementById("preview")) document.getElementById("preview").innerHTML = maincamera.Preview;
    if (document.getElementById("zoom2")) document.getElementById("zoom2").innerHTML = maincamera.Zoom2;
    if (document.getElementById("dxomark-score-valor") && maincamera.MainCameraScore) {
        document.getElementById("dxomark-score-valor").textContent = maincamera.MainCameraScore.value;
        document.getElementById("dxomark-score-valor").setAttribute("DataValor", maincamera.MainCameraScore.dataValor);
    }

    if (document.getElementById("megapixels")) document.getElementById("megapixels").innerHTML = selfiecamera.Megapixels;
    if (document.getElementById("image-resolution6")) document.getElementById("image-resolution6").innerHTML = selfiecamera.ImageResolution6;
    if (document.getElementById("aperture5")) document.getElementById("aperture5").innerHTML = selfiecamera.Aperture5;
    if (document.getElementById("focal-length5")) document.getElementById("focal-length5").innerHTML = selfiecamera.FocalLength5;
    if (document.getElementById("sensor5")) document.getElementById("sensor5").innerHTML = selfiecamera.Sensor5;
    if (document.getElementById("sensor-size5")) document.getElementById("sensor-size5").innerHTML = selfiecamera.SensorSize5;
    if (document.getElementById("pixel-size5")) document.getElementById("pixel-size5").innerHTML = selfiecamera.PixelSize5;
    if (document.getElementById("autofocus2")) document.getElementById("autofocus2").innerHTML = selfiecamera.Autofocus2;
    if (document.getElementById("Stabilization6")) document.getElementById("Stabilization6").innerHTML = selfiecamera.Stabilization6;
    if (document.getElementById("video-resolution")) document.getElementById("video-resolution").innerHTML = selfiecamera.VideoResolution;
    if (document.getElementById("depth-sensor-tof-3d")) document.getElementById("depth-sensor-tof-3d").innerHTML = selfiecamera.DepthSensorTOF3D;
    if (document.getElementById("dxomark-foto-selfie-valor") && selfiecamera.SelfiePhotoQuality) {
        document.getElementById("dxomark-foto-selfie-valor").innerHTML = selfiecamera.SelfiePhotoQuality.value;
        document.getElementById("dxomark-foto-selfie-valor").setAttribute("DataValor", selfiecamera.SelfiePhotoQuality.dataValor);
    }
    if (document.getElementById("dxomark-video-selfie-valor") && selfiecamera.SelfieVideoQuality) {
        document.getElementById("dxomark-video-selfie-valor").innerHTML = selfiecamera.SelfieVideoQuality.value;
        document.getElementById("dxomark-video-selfie-valor").setAttribute("DataValor", selfiecamera.SelfieVideoQuality.dataValor);
    }
    if (document.getElementById("dxomark-score-selfie-valor") && selfiecamera.SelfieCameraScore) {
        document.getElementById("dxomark-score-selfie-valor").innerHTML = selfiecamera.SelfieCameraScore.value;
        document.getElementById("dxomark-score-selfie-valor").setAttribute("DataValor", selfiecamera.SelfieCameraScore.dataValor);
    }

    if (document.getElementById("ram-size")) document.getElementById("ram-size").innerHTML = memory.RAMSize;
    if (document.getElementById("memory-type")) document.getElementById("memory-type").innerHTML = memory.MemoryType;
    if (document.getElementById("memory-clock")) document.getElementById("memory-clock").innerHTML = memory.MemoryClock;
    if (document.getElementById("channels")) document.getElementById("channels").innerHTML = memory.Channels;
    if (document.getElementById("storage-size")) document.getElementById("storage-size").innerHTML = memory.StorageSize;
    if (document.getElementById("storage-type")) document.getElementById("storage-type").innerHTML = memory.StorageType;
    if (document.getElementById("memory-card")) document.getElementById("memory-card").innerHTML = memory.MemoryCard;

    if (document.getElementById("battery-type")) document.getElementById("battery-type").innerHTML = battery.BatteryType;
    if (document.getElementById("capacity")) document.getElementById("capacity").innerHTML = battery.Capacity;
    if (document.getElementById("max-charge-power")) document.getElementById("max-charge-power").innerHTML = battery.MaxChargePower;
    if (document.getElementById("wireless-charging")) document.getElementById("wireless-charging").innerHTML = battery.WirelessCharging;
    if (document.getElementById("reverse-charging")) document.getElementById("reverse-charging").innerHTML = battery.ReverseCharging;
    if (document.getElementById("fast-charging")) document.getElementById("fast-charging").innerHTML = battery.FastCharging;
    if (document.getElementById("full-charging-time")) document.getElementById("full-charging-time").innerHTML = battery.FullChargingTime;
    if (document.getElementById("web-browsing")) document.getElementById("web-browsing").innerHTML = battery.WebBrowsing;
    if (document.getElementById("watching-video")) document.getElementById("watching-video").innerHTML = battery.WatchingVideo;
    if (document.getElementById("gaming")) document.getElementById("gaming").innerHTML = battery.Gaming;
    if (document.getElementById("standby")) document.getElementById("standby").innerHTML = battery.Standby;
    if (document.getElementById("bateria-duracion-valor") && battery.GeneralBatteryLife) {
        document.getElementById("bateria-duracion-valor").innerHTML = battery.GeneralBatteryLife.value;
        document.getElementById("bateria-duracion-valor").setAttribute("DataValor", battery.GeneralBatteryLife.dataValor);
    }

    if (document.getElementById("wifi-standard")) document.getElementById("wifi-standard").innerHTML = connectivity.WiFiStandard;
    if (document.getElementById("wifi-features")) document.getElementById("wifi-features").innerHTML = connectivity.WiFiFeatures;
    if (document.getElementById("bluetooth-version")) document.getElementById("bluetooth-version").innerHTML = connectivity.BluetoothVersion;
    if (document.getElementById("bluetooth-features")) document.getElementById("bluetooth-features").innerHTML = connectivity.BluetoothFeatures;
    if (document.getElementById("usb-type")) document.getElementById("usb-type").innerHTML = connectivity.USBType;
    if (document.getElementById("usb-version")) document.getElementById("usb-version").innerHTML = connectivity.USBVersion;
    if (document.getElementById("usb-features")) document.getElementById("usb-features").innerHTML = connectivity.USBFeatures;
    if (document.getElementById("displayport")) document.getElementById("displayport").innerHTML = connectivity.DispalyPort;
    if (document.getElementById("gps")) document.getElementById("gps").innerHTML = connectivity.GPS;
    if (document.getElementById("nfc")) document.getElementById("nfc").innerHTML = connectivity.NFC;
    if (document.getElementById("infrared-port")) document.getElementById("infrared-port").innerHTML = connectivity.InfraredPort;
    if (document.getElementById("type-sim-card")) document.getElementById("type-sim-card").innerHTML = connectivity.TypeSIMCard;
    if (document.getElementById("number-of-sim")) document.getElementById("number-of-sim").innerHTML = connectivity.NumberSIM;
    if (document.getElementById("hybrid-slot")) document.getElementById("hybrid-slot").innerHTML = connectivity.HybridSlot;
    if (document.getElementById("esim-support")) document.getElementById("esim-support").innerHTML = connectivity.eSimSupport;
    if (document.getElementById("support-5g")) document.getElementById("support-5g").innerHTML = connectivity.Support5G;

    if (document.getElementById("speakers")) document.getElementById("speakers").innerHTML = sound.Speakers;
    if (document.getElementById("dolby-atmos")) document.getElementById("dolby-atmos").innerHTML = sound.DolbyAtmos;
    if (document.getElementById("headphones-audio-jack")) document.getElementById("headphones-audio-jack").innerHTML = sound.HeadphoneAudioJack;
    if (document.getElementById("volumen-maximo-valor") && sound.MaxLoudness) {
        document.getElementById("volumen-maximo-valor").innerHTML = sound.MaxLoudness.value;
        document.getElementById("volumen-maximo-valor").setAttribute("DataValor", sound.MaxLoudness.dataValor);
    }

    if (document.getElementById("category")) document.getElementById("category").innerHTML = others.Category;
    if (document.getElementById("release-date")) document.getElementById("release-date").innerHTML = others.ReleaseDate;
    if (document.getElementById("sar-head")) document.getElementById("sar-head").innerHTML = others.SARHead;
    if (document.getElementById("sar-body")) document.getElementById("sar-body").innerHTML = others.SARBody;
    if (document.getElementById("launch-price")) document.getElementById("launch-price").innerHTML = others.LaunchPrice;
    if (document.getElementById("release-date")) document.getElementById("sensors").innerHTML = others.Sensors;
});

window.smartphoneSpecs = {
    "apple-iphone-16-pro-max": {
        design: {
            Height: "163 mm (6.42 inches)",
            Width: "77.6 mm (3.06 inches)",
            Thickness: "8.25 mm (0.32 inches)",
            Weight: "227 g (8.01 oz)",
            Waterproof: "IP68",
            AdvancedCooling: "Passive cooling with graphite",
            RearMaterial: "Glass",
            FrameMaterial: "Metal",
            Colors: "Black, White, Gold, Silver",
            FingerprintScanner: "No",
            ScreenBodyRatio: {value: "92.3%", dataValor: "92.3"}
        },
        
        display: {
            Type: "OLED",
            Size: "6.9 inches",
            Resolution: "1320 x 2868 pixels",
            AspectRatio: "19.5:9",
            PPI: "460 ppi",
            RefreshRate: "120 Hz",
            AdaptiveRefreshRate: "Yes (1-120 Hz)",
            TouchSamplingRate: "-",
            HDRSupport: "Yes, Dolby Vision",
            MaxBrightness: "2000 nits",
            MaxBrightnessHDR: "1600 nits",
            ScreenProtection: "Ceramic Shield",
            ScreenBodyRatio2: "92.3%",
            DisplayFeatures: "- DCI-P3<br>- Always-On Display",
            RGBColorSpace: "99.6%",
            PWM: "240 Hz",
            ResponseTime: "1 ms",
            Contrast: "∞ Infinity",
            PeakBrightnessTestAuto: {value: "1802 nits", dataValor: "1802"}
        },

        performance: {
            Chipset: "Apple A18 Pro",
            MaxClock: "4040 MHz",
            CPUCores: "6 (2 + 4)",
            Architecture: "- 4 cores at 2.42 GHz: Sawtooth<br>- 2 cores at 4.05 GHz: Everest",
            Cache: "-",
            Manufacturing: "TSMC",
            LithographyProcess: "3 nm",
            NeuralProcessor: "Neural Engine",
            Graphics: "Apple A18 Pro GPU",
            GPUShadingUnits: "768",
            GPUClock: "1490 MHz",
            FLOPS: "~2289 GFLOPS",
            Geekbench6Single: { value: "3435", dataValor: "3435" },
            Geekbench6Multi: { value: "8505", dataValor: "8505" },
            OpenCLScore: "-",
            VulkanScore: "-",
            GeekbenchComputingGPU: "32710",
            AnTuTu10: { value: "1813449", dataValor: "1813449" },
            CPU: "465726",
            GPU: "721738",
            Memory: "250875",
            UX: "375110",
            TotalScore: "1813449",
            WildLifePerformance: { value: "-", dataValor: "-" },
            GraphicsScore: "-",
            GraphicsTest: "-",
            Stability: "-",
            MaxSurfaceTemperature: "-",
            PCMark: { value: "-", dataValor: "-" },
            WebScore: "-",
            VideoEditing: "-",
            PhotoEditing: "-",
            DataManipulation: "-",
            WritingScore: "-"
        },

        maincamera: {
            Matrix: "48 MP",
            ImageResolution: "8064 x 6048",
            Zoom: "Optical, 5x",
            MaximumZoom: "Digital, 25x",
            Flash: "Dual LED",
            Stabilization: "Optical",
            Video8K: "No",
            Video4K: "Up to 120 FPS",
            Video1080p: "Up to 120 FPS",
            SlowMotion: "240 FPS (1080p)",
            AngleWidestLens: "120°",
            Lenses: "1) Standard: 48 MP<br> 2) Telephoto: 12 MP<br> 3) Ultrawide: 48 MP",
            CameraFeatures: "- Bokeh Mode<br>- Pro Mode<br>- RAW Support",
            ImageResolution2: "8064 x 6048",
            Aperture: "f/1.8",
            FocalLength: "24 mm",
            Sensor: "Sony IMX803",
            SensorSize: "1/1.28\"",
            PixelSize: "1.22 µm",
            Autofocus: "Phase autofocus (Dual Pixel)",
            Stabilization2: "Optical",
            ImageResolution3: "12 MP",
            Aperture2: "f/2.8",
            FocalLength2: "120 mm",
            Sensor2: "Sony IMX913",
            SensorSize2: "1/3.06\"",
            PixelSize2: "1.12 µm",
            Stabilization3: "Optical",
            ImageResolution4: "48 MP",
            Aperture3: "f/2.2",
            FocalLength3: "13 mm",
            Sensor3: "Sony IMX972",
            SensorSize3: "1/2.55\"",
            PixelSize3: "0.7 µm",
            Stabilization4: "Digital",
            ImageResolution5: "-",
            Aperture4: "-",
            FocalLength4: "-",
            Sensor4: "-",
            SensorSize4: "-",
            PixelSize4: "-",
            Stabilization5: "-",
            PhotoQuality: { value: "158", dataValor: "158" },
            VideoQuality: { value: "166", dataValor: "166" },
            Bokeh: "160",
            Preview: "-",
            Zoom2: "130",
            MainCameraScore: { value: "161", dataValor: "161" }
        },

        selfiecamera:{
            Megapixels: "12 MP",
            ImageResolution6: "4032 x 3024",
            Aperture5: "f/1.9",
            FocalLength5: "23 mm",
            Sensor5: "Sony IMX714",
            SensorSize5: "1/3.6\"",
            PixelSize5: "1.12 µm",
            Autofocus2: "Phase autofocus",
            Stabilization6: "Optical",
            VideoResolution: "2160p (4K) at 60 FPS",
            DepthSensorTOF3D: "Yes",
            SelfiePhotoQuality: { value: "149", dataValor: "149" },
            SelfieVideoQuality: { value: "155", dataValor: "155" },
            SelfieCameraScore: { value: "151", dataValor: "151" }
        },

        memory: {
            RAMSize: "8 GB",
            MemoryType: "LPDDR5X",
            MemoryClock: "-",
            Channels: "4",
            StorageSize: "256, 512, 1024 GB",
            StorageType: "NVMe",
            MemoryCard: "No"
        },

        battery: {
            BatteryType: "Li-Ion",
            Capacity: "4685 mAh",
            MaxChargePower: "30W",
            WirelessCharging: "Yes (15W)",
            ReverseCharging: "Yes",
            FastCharging: "Yes (46% in 30 min)",
            FullChargingTime: "1:57 hr",
            WebBrowsing: "14:34 hr",
            WatchingVideo: "22:01 hr",
            Gaming: "07:12 hr",
            Standby: "163 hr",
            GeneralBatteryLife: { value: "35:01 hr", dataValor: "35.1" }
        },

        connectivity: {
            WiFiStandard: "Wi-Fi 7 (802.11 a/b/g/n/ac/ax/be)",
            WiFiFeatures: "- Dual Band<br> - Wi-Fi MIMO<br> - Wi-Fi Direct<br> - Wi-Fi Hotspot<br> - Wi-Fi Display",
            BluetoothVersion: "5.3",
            BluetoothFeatures: "LE",
            USBType: "USB Type-C",
            USBVersion: "3.2",
            USBFeatures: "- Charging<br> - USB Storage Mode<br> - OTG",
            DispalyPort: "Yes",
            GPS: "GPS, GLONASS, Beidou, Galileo, QZSS, NAVIC",
            NFC: "Yes",
            InfraredPort: "No",
            TypeSIMCard: "eSIM",
            NumberSIM: "-",
            HybridSlot: "No",
            eSimSupport: "Yes",
            Support5G: "Yes"
        },

        sound: {
            Speakers: "Stereo",
            DolbyAtmos: "Yes",
            HeadphoneAudioJack: "No",
            MaxLoudness: { value: "92.6 dB", dataValor: "92.6" }
        },

        others: {
            Category: "Flagship",
            ReleaseDate: "September 2024",
            SARHead: "1.22 W/kg",
            SARBody: "1.45 W/kg",
            LaunchPrice: "$1,199",
            Sensors: "- Barometer<br> - Promimity sensor<br> - Gyroscope<br> - Accelerometer<br> - Ambient light sensor<br> - Compass<br> - Face recognition sensor"
        }
    },
    // ...más modelos...
};
