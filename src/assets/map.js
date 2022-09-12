import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import {OverviewMap, ScaleLine, defaults as defaultControls} from 'ol/control';

const scaleControl = new ScaleLine({
  units: 'metric',
  bar: true,
  steps: 4,
  text: true,
  // minWidth: 140,
});

const overviewMapControl = new OverviewMap({
  layers: [
    new TileLayer({
      source: source,
    }),
  ],
});


const map = new Map({
  target: 'map',
  controls: defaultControls().extend([
    overviewMapControl,
    scaleControl
  ]),
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 8
  })
});
