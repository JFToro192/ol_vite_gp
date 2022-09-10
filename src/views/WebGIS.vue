<template>
    <main class="webgis">
        <div id="map" class="map"></div>
    </main>
</template>

<script>
import 'ol/ol.css' // map style
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

export default {
    mounted() {
        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        });
    },
}

</script>
