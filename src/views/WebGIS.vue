<template>
    <main class="webgis">
        <div id="map" class="map"></div>
        <div id="mouse-position"></div>
    </main>
</template>

<script>
import 'ol/ol.css' // map style
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import MousePosition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';
import {Attribution, OverviewMap, ScaleLine, defaults as defaultControls} from 'ol/control';


export default {
    mounted() {
        const source = new OSM();

        const attribution = new Attribution({
            collapsible: false,
        });

        const scaleControl = new ScaleLine({
            units: 'metric',
            bar: true,
            steps: 4,
            text: true,
            minWidth: 140,
        });

        const overviewMapControl = new OverviewMap({
            layers: [
                new TileLayer({
                source: source,
                }),
            ],
        });

        const mousePositionControl = new MousePosition({
            coordinateFormat: createStringXY(4),
            projection: 'EPSG:4326',
            // comment the following two lines to have the mouse position
            // be placed within the map.
            className: 'custom-mouse-position',
            target: document.getElementById('mouse-position'),
        });

        const map = new Map({
            target: "map",
            controls: defaultControls({attribution: false}).extend([
                attribution,
                mousePositionControl,
                overviewMapControl,
                scaleControl
            ]),
            layers: [
                new TileLayer({
                    source: source
                })
            ],
            view: new View({
                center: [8, 46],
                zoom: 4
            })
        });

        function checkSize() {
            const small = map.getSize()[0] < 600;
            attribution.setCollapsible(small);
            attribution.setCollapsed(small);
        }
        window.addEventListener('resize', checkSize);
        checkSize();
    },
}

</script>

<style lang="scss">

.ol-overviewmap.ol-unselectable.ol-control{
    bottom: 3rem!important;
}

#mouse-position{
    position: absolute;
    padding: 2px;
    right: 0.5rem;
    bottom: 2.25rem;
    z-index: 99;
    color: black;
    font-weight: bold;
    background-color: white;
    opacity: 0.6;
    border-radius: 4px;
}
</style>