const tourType = document.body.dataset.tour || "village";

const villageTour = {
    default: {
        firstScene: "spot_1",
        autoLoad: true,
        sceneFadeDuration: 1000,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120
    },

 

    scenes: {
        spot_1: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/7.jpg" },
        spot_2: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/12.jpg" },
        spot_3: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/8.jpg" },
        spot_4: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/11.jpg" },

        spot_11: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/13.jpg" },
        spot_13: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/14.jpg" },
        spot_15: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/15.jpg" },
        spot_16: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/17.jpg" },
        spot_17: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/16.jpg" },
        spot_18: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/45.jpg" },

        spot_20: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/19.jpg" },
        spot_21: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/21.jpg" },
        spot_22: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/22.jpg" },
        spot_23: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/24.jpg" },
        spot_24: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/20.jpg" },

        spot_25: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/38.jpg" },
        spot_26: { title: "えこりん村", type: "equirectangular", panorama: "image/outside/25.jpg" },
        
    }
}; 

const mapArrowOffsets = {
    spot_1: 180,
    spot_2: -90,
    spot_3: 90,
    spot_4: 220,

    spot_11: -90,
    spot_12: 0,
    spot_13: 15,
    spot_14: 0,
    spot_15: 0,
    spot_16: 0,
    spot_17: 200,
    spot_18: -150,

    spot_19: 0,
    spot_20: 200,
    spot_21: -110,
    spot_22: -70,
    spot_23: 160,
    spot_24: 120,
    spot_25: 0,
    spot_26: 110,
    spot_27: 0,
    spot_28: 0,
    spot_29: 0,
    spot_30: 0
};

const tomatoTour = {
    default: {
        firstScene: "tomato_entrance",
        autoLoad: true,
        sceneFadeDuration: 1000,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        showControls: true
    },

    scenes: {
        tomato_entrance: {
            title: "トマトの森",
            type: "equirectangular",
            panorama: "image/tomato/21.jpg"
        }
    }
};

const welcomeTour = {
    default: {
        firstScene: "welcome_1",
        autoLoad: true,
        sceneFadeDuration: 1000,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        showControls: true
    },

    scenes: {
        welcome_1: { title: "ウェルカムセンター ", type: "equirectangular", panorama: "image/welcomeCenter/1.jpg" },
        welcome_2: { title: "ウェルカムセンター ", type: "equirectangular", panorama: "image/welcomeCenter/2.jpg" },
        welcome_3: { title: "ウェルカムセンター ", type: "equirectangular", panorama: "image/welcomeCenter/3.jpg" },
        welcome_4: { title: "ウェルカムセンター ", type: "equirectangular", panorama: "image/welcomeCenter/4.jpg" }
    }
};

const coconutTour = {
    default: {
        firstScene: "coconut_1",
        autoLoad: true,
        sceneFadeDuration: 1000,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        showControls: true
    },

    scenes: {
        coconut_1: {
            title: "ココワッカホール",
            type: "equirectangular",
            panorama: "image/coconutHole/23.jpg"
        }
    }
};

const rakudaTour = {
    default: {
        firstScene: "rakuda_1",
        autoLoad: true,
        sceneFadeDuration: 1000,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        showControls: true
    },

    scenes: {
        rakuda_1: { title: "レストランラクダ軒 ", type: "equirectangular", panorama: "image/RakudaKen/7.jpg" },
        rakuda_2: { title: "レストランラクダ軒 ", type: "equirectangular", panorama: "image/RakudaKen/8.jpg" }
    }
};

const mapLocations = {
    spot_1: { top: "83%", left: "68%" },
    spot_2: { top: "82%", left: "3%" },
    spot_3: { top: "90%", left: "15%" },
    spot_4: { top: "82%", left: "17%" },

    spot_11: { top: "65%", left: "17%" },
    spot_13: { top: "57%", left: "17%" },
    spot_15: { top: "43%", left: "17%" },
    spot_16: { top: "30%", left: "20%" },
    spot_17: { top: "33%", left: "16%" },
    spot_18: { top: "15%", left: "27%" },

    spot_20: { top: "58%", left: "45%" },
    spot_21: { top: "60%", left: "80%" },
    spot_22: { top: "57%", left: "88%" },
    spot_23: { top: "53%", left: "80%" },
    spot_24: { top: "64%", left: "60%" },

    spot_25: { top: "50%", left: "90%" },
    spot_26: { top: "98%", left: "90%" },
};

const tours = {
    village: villageTour,
    tomato: tomatoTour,
    welcome: welcomeTour,
    coconut: coconutTour,
    rakuda: rakudaTour
};

const tourConfig = tours[tourType] || villageTour;
const viewer = pannellum.viewer("panorama", tourConfig);
const panorama = document.getElementById("panorama");

function changeScene(id) {
    viewer.loadScene(id);
}

function toggleMenu() {
    document.getElementById("menu-container")?.classList.toggle("open");
}

document.addEventListener("click", function (e) {
    const menu = document.getElementById("menu-container");

    if (menu && !menu.contains(e.target)) {
        menu.classList.remove("open");
    }
});

function updateCurrentPosition() {
    const dot = document.getElementById("current-pos");
    const pos = mapLocations[viewer.getScene()];

    if (dot && pos) {
        dot.style.top = pos.top;
        dot.style.left = pos.left;
    }
}

viewer.on("load", updateCurrentPosition);

function moveSceneInOrder(order) {
    const current = viewer.getScene();
    const currentIndex = order.indexOf(current);

    if (currentIndex === -1) return;

    const nextIndex = currentIndex === order.length - 1 ? 0 : currentIndex + 1;
    viewer.loadScene(order[nextIndex]);
}

function normalizeAngle(angle) {
    return ((angle % 360) + 360) % 360;
}

function getYawDiff(a, b) {
    const diff = Math.abs(normalizeAngle(a) - normalizeAngle(b));
    return diff > 180 ? 360 - diff : diff;
}

function getMapAngle(fromScene, toScene) {
    const from = mapLocations[fromScene];
    const to = mapLocations[toScene];

    if (!from || !to) return null;

    const fromX = parseFloat(from.left);
    const fromY = parseFloat(from.top);
    const toX = parseFloat(to.left);
    const toY = parseFloat(to.top);

    const dx = toX - fromX;
    const dy = toY - fromY;

    return normalizeAngle(Math.atan2(dx, -dy) * 180 / Math.PI);
}

function isUsableMapLocation(sceneId) {
    const pos = mapLocations[sceneId];

    if (!pos) return false;

    return !(pos.top === "0%" && pos.left === "0%");
}

function moveToNearestSceneByYaw() {
    if (tourType !== "village") return;

    const currentScene = viewer.getScene();
    const currentOffset = mapArrowOffsets[currentScene] || 0;
    const currentYaw = normalizeAngle(viewer.getYaw() + currentOffset);

    let nearestScene = null;
    let nearestDiff = 9999;

    Object.keys(mapLocations).forEach(sceneId => {
        if (sceneId === currentScene) return;
        if (!villageTour.scenes[sceneId]) return;
        if (!isUsableMapLocation(sceneId)) return;

        const angle = getMapAngle(currentScene, sceneId);

        if (angle === null) return;

        const diff = getYawDiff(currentYaw, angle);

        if (diff < nearestDiff) {
            nearestDiff = diff;
            nearestScene = sceneId;
        }
    });

    if (nearestScene) {
        viewer.loadScene(nearestScene);
    }
}

panorama.addEventListener("contextmenu", function (e) {
    const clickedUi = e.target.closest("#menu-container, #map-container, .pnlm-controls-container, .pnlm-hotspot-base");

    if (clickedUi) return;

    if (tourType === "village") {
        e.preventDefault();
        moveToNearestSceneByYaw();
    }

    if (tourType === "welcome") {
        e.preventDefault();
        moveSceneInOrder(["welcome_1", "welcome_2", "welcome_3", "welcome_4"]);
    }

    if (tourType === "rakuda") {
        e.preventDefault();
        moveSceneInOrder(["rakuda_1", "rakuda_2"]);
    }
});

// 自作カーソル
const cursor = document.getElementById("move-cursor");
const panoramaArea = document.getElementById("panorama");

document.addEventListener("mousemove", function (e) {
    if (!cursor) return;

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    const yaw = viewer.getYaw();
    cursor.style.transform = `translate(-50%, -50%) rotate(${yaw - 90}deg)`;
});

if (panoramaArea) {
    panoramaArea.addEventListener("mouseenter", function () {
        if (cursor) {
            cursor.classList.add("active");
            cursor.style.display = "block";
        }
    });

    panoramaArea.addEventListener("mouseleave", function () {
        if (cursor) {
            cursor.classList.remove("active");
            cursor.style.display = "none";
        }
    });
}

document.addEventListener("mousedown", function (e) {
    if (e.target.closest("#map-container")) return;
    if (cursor) cursor.classList.add("dragging");
});

document.addEventListener("mouseup", function () {
    if (cursor) cursor.classList.remove("dragging");
});

// ミニマップ拡大縮小・移動
const mapContainer = document.getElementById("map-container");
const mapZoomLayer = document.getElementById("map-zoom-layer");

let mapScale = 1;
let mapX = 0;
let mapY = 0;

let isMapDragging = false;
let mapStartX = 0;
let mapStartY = 0;

function updateMapTransform() {
    if (!mapZoomLayer) return;

    mapZoomLayer.style.transform =
        `translate(${mapX}px, ${mapY}px) scale(${mapScale})`;
}

if (mapContainer && mapZoomLayer) {
    mapContainer.addEventListener("wheel", function (e) {
        e.preventDefault();

        if (e.deltaY < 0) {
            mapScale += 0.1;
        } else {
            mapScale -= 0.1;
        }

        mapScale = Math.min(Math.max(mapScale, 1), 2.5);

        if (mapScale === 1) {
            mapX = 0;
            mapY = 0;
        }

        updateMapTransform();
    });

    mapContainer.addEventListener("mousedown", function (e) {
        if (e.button !== 1) return;

        e.preventDefault();

        isMapDragging = true;
        mapStartX = e.clientX - mapX;
        mapStartY = e.clientY - mapY;

        mapContainer.classList.add("dragging");
    });

    document.addEventListener("mousemove", function (e) {
        if (!isMapDragging) return;

        mapX = e.clientX - mapStartX;
        mapY = e.clientY - mapStartY;

        updateMapTransform();
    });

    document.addEventListener("mouseup", function () {
        isMapDragging = false;
        mapContainer.classList.remove("dragging");
    });

    mapContainer.addEventListener("auxclick", function (e) {
        if (e.button === 1) {
            e.preventDefault();
        }
    });
}

function updateMapRotation() {
    const dot = document.getElementById("current-pos");

    if (dot) {
        const sceneId = viewer.getScene();
        const offset = mapArrowOffsets[sceneId] || 0;

        dot.style.transform =
            `translate(-50%, -50%) rotate(${viewer.getYaw() + offset}deg)`;
    }

    requestAnimationFrame(updateMapRotation);
}

updateCurrentPosition();
updateMapRotation();