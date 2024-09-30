// Copyright (c) 2024 YA-androidapp(https://github.com/yzkn) All rights reserved.


import maplibreGl from 'maplibre-gl';
import { useGsiTerrainSource } from 'maplibre-gl-gsi-terrain';

// const gsiTerrainSource = useGsiTerrainSource(maplibreGl.addProtocol); // 地理院標高タイル
const gsiTerrainSource = useGsiTerrainSource(maplibreGl.addProtocol, {
    tileUrl: 'https://tiles.gsj.jp/tiles/elev/mixed/{z}/{y}/{x}.png',
    maxzoom: 17,
    attribution: '<a href="https://gbank.gsj.jp/seamless/elev/">産総研シームレス標高タイル</a>'
});


const map = new maplibreGl.Map({
    container: 'map',
    center: [139.767125, 35.681236],
    zoom: 10,
    pitch: 70,
    maplibreLogo: true,

    style: {
        version: 8,
        sources: {
            terrain: gsiTerrainSource,

            pale: {
                type: 'raster',
                tiles: ['https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。',
            },
            photo: {
                type: 'raster',
                tiles: ['https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'],
                tileSize: 256,
                attribution: '出典：国土地理院ウェブサイト(https://maps.gsi.go.jp/development/ichiran.html)　この地理院タイルは基本測量成果（名称：電子地形図（タイル））です。',
            },
        },
        terrain: {
            source: 'terrain',
            exaggeration: 1.2,
        },
        layers: [
            {
                id: 'pale',
                type: 'raster',
                source: 'pale',
            },
            {
                id: 'photo',
                type: 'raster',
                source: 'photo',
                layout: {
                    visibility: 'none',
                },
            },
        ],
    },
    // style: 'https://gsi-cyberjapan.github.io/gsivectortile-mapbox-gl-js/std.json',
});

map.addControl(
    new maplibreGl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true
    }),
    'bottom-right'
);
map.addControl(
    new maplibreGl.ScaleControl()
);
map.addControl(
    new maplibreGl.TerrainControl({
        source: 'terrain',
        exaggeration: 1
    })
);