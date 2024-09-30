// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


// import maplibreGl from 'maplibre-gl';
// import { useGsiTerrainSource } from 'maplibre-gl-gsi-terrain';

// const gsiTerrainSource = useGsiTerrainSource(maplibreGl.addProtocol); // 地理院標高タイル
// const gsiTerrainSource = useGsiTerrainSource(maplibreGl.addProtocol, {
//     tileUrl: 'https://tiles.gsj.jp/tiles/elev/mixed/{z}/{y}/{x}.png',
//     maxzoom: 17,
//     attribution: '<a href="https://gbank.gsj.jp/seamless/elev/">産総研シームレス標高タイル</a>'
// });


const map = new maplibregl.Map({
    container: 'map', // container id
    center: [139.767125, 35.681236], // starting position [lng, lat]
    zoom: 10, // starting zoom
    maplibreLogo: true,

    // style: {
    //     version: 8,
    //     sources: {
    //         terrain: gsiTerrainSource,
    //     },
    //     terrain: {
    //         source: 'terrain',
    //         exaggeration: 1.2,
    //     },
    // },
    style: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json',
});

map.addControl(new maplibregl.NavigationControl(), 'bottom-right');
map.addControl(new maplibregl.ScaleControl());
