require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/layers/FeatureLayer",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/widgets/Search",
    "esri/widgets/LayerList",
  ], function (esriConfig, Map, MapView, FeatureLayer, BasemapToggle, BasemapGallery, Search, LayerList) {

      esriConfig.apiKey = "AAPK91461c661d8c4f6b8ddda647991e0415orfhlJs9OxM_-CHqgyQiFms2TwGHm59nkS3k8og36P0IAK1bimMK54KR5d4BeWif";

      //mapa base 
      const map = new Map({
          basemap: "satellite" // Basemap layer
      });

      //vista de mapa 
      const view = new MapView({
          map: map,
          center: [-118.805, 34.027],
          zoom: 13, // scale: 72223.819286
          container: "viewDiv",
          
      });

       var layerList = new LayerList({
          view: view
      });

      // Adds widget below other elements in the top left corner of the view
      view.ui.add(layerList, {
        position: "bottom-left"
      });

       var searchWidget = new Search({
        view: view
      });

      // Add the search widget to the top right corner of the view
      view.ui.add(searchWidget, {
        position: "top-right"
      });

      const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
      });

      view.ui.add(basemapToggle,"bottom-right");

      const basemapGallery = new BasemapGallery({
        view: view,
        source: {
          query: {
            title: '"World Basemaps for Developers" AND owner:esri'
          }
        }
      });

      view.ui.add(basemapGallery, "top-right"); // Add to the vie
 
      

       // Define a pop-up for Trailheads
      const popupTrailheads = {
        "title": "Trailhead",
        "content": "<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft"
      }

      // Define popup for Parks and Open Spaces
      const popupOpenspaces = {
        "title": "{PARK_NAME}",
        "content": [{
          "type": "fields",
          "fieldInfos": [
            {
              "fieldName": "AGNCY_NAME",
              "label": "Agency",
              "isEditable": true,
              "tooltip": "",
              "visible": true,
              "format": null,
              "stringFieldOption": "text-box"
            },
            {
              "fieldName": "TYPE",
              "label": "Type",
              "isEditable": true,
              "tooltip": "",
              "visible": true,
              "format": null,
              "stringFieldOption": "text-box"
            },
            {
              "fieldName": "ACCESS_TYP",
              "label": "Access",
              "isEditable": true,
              "tooltip": "",
              "visible": true,
              "format": null,
              "stringFieldOption": "text-box"
            },

            {
              "fieldName": "GIS_ACRES",
              "label": "Acres",
              "isEditable": true,
              "tooltip": "",
              "visible": true,
              "format": {
                "places": 2,
                "digitSeparator": true
              },

              "stringFieldOption": "text-box"
            }
          ]
        }]
      }

      
      //capas de datos 
      
      //Trailheads feature layer (points)
      const trailheadsLayer = new FeatureLayer({
          url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
          outFields: ["TRL_NAME","CITY_JUR","X_STREET","PARKING","ELEV_FT"],
          popupTemplate: popupTrailheads
      });

      map.add(trailheadsLayer);

      //Trails feature layer (lines)
      const trailsLayer = new FeatureLayer({
          url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0"
      });

      map.add(trailsLayer, 0);

      // Parks and open spaces (polygons)
      const parksLayer = new FeatureLayer({
          url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space_Styled/FeatureServer/0",
          outFields: ["TYPE","PARK_NAME", "AGNCY_NAME","ACCESS_TYP","GIS_ACRES","TRLS_MI","TOTAL_GOOD","TOTAL_FAIR", "TOTAL_POOR"],
          popupTemplate: popupOpenspaces
      });

      map.add(parksLayer, 0); 

});
