(function(){
    var script = {
 "layout": "absolute",
 "shadow": false,
 "children": [
  "this.MainViewer"
 ],
 "scrollBarVisible": "rollOver",
 "id": "rootPlayer",
 "desktopMipmappingEnabled": false,
 "start": "this.init()",
 "overflow": "visible",
 "height": "100%",
 "borderRadius": 0,
 "definitions": [{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83A0505C_8C66_7033_41C4_62AE78E8E312",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -165.42,
  "pitch": 0
 }
},
{
 "label": "Living_P2_Level_04",
 "id": "panorama_83A669CC_892C_5CAB_41CE_53007747E107",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_91A00CCD_8954_34A5_41D4_F07DB881C536",
  "this.overlay_91420C72_8954_547F_419B_5FEC5939691D"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -163.51,
   "backwardYaw": 165.34,
   "distance": 1,
   "panorama": "this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_853B73FA_8934_6C6F_41D3_9F840F806533"
  }
 ]
},
{
 "label": "bedroomp1_level03",
 "id": "panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9E3CA90D_892C_5DA5_41E0_CE9AAF4D9DE7",
  "this.overlay_9E34D0EF_892C_EC65_41D9_5F30AE56BF87"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 142.81,
   "backwardYaw": 12.07,
   "distance": 1,
   "panorama": "this.panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 111.28,
   "backwardYaw": -134.67,
   "distance": 1,
   "panorama": "this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22"
  }
 ]
},
{
 "label": "bedroomp1_level04",
 "id": "panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_936371FA_8954_2C6F_41D7_430AB23DE430",
  "this.overlay_931C8588_8955_D4AB_41CA_8E127D3ABA01"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 141.8,
   "backwardYaw": 13.07,
   "distance": 1,
   "panorama": "this.panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 111.28,
   "backwardYaw": -135.04,
   "distance": 1,
   "panorama": "this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "label": "1bhk_toilet_master",
 "id": "panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_93B330D3_8954_2CBD_41CA_FDF54A66AE16"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 13.07,
   "backwardYaw": 141.8,
   "distance": 1,
   "panorama": "this.panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -170.58,
  "pitch": 1.51
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_82AF746F_8934_5465_41DA_BC58754E18CF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -61.3,
  "pitch": -6.03
 }
},
{
 "label": "1bhk_toilet_common",
 "id": "panorama_824A27B3_8935_F4FD_41D5_DBEF47212385",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9CF9A9D0_892C_3CBC_41D3_217EA662E578"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 14.2,
   "backwardYaw": -130.76,
   "distance": 1,
   "panorama": "this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -58.53,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_853B73FA_8934_6C6F_41D3_9F840F806533_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -59.79,
  "pitch": -2.26
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83495017_8C66_703D_41CF_B1BD1C8D863F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -37.19,
  "pitch": 0
 }
},
{
 "label": "Living_p1_Level_02",
 "id": "panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_988DEE6E_8934_3467_41DC_E7DFFBE01939",
  "this.overlay_9ABD1983_8934_DC9D_41CD_066D42CF3295",
  "this.overlay_9B82B64E_8937_D7A7_41D4_FB617ADFC38D"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -128.5,
   "backwardYaw": 14.58,
   "distance": 1,
   "panorama": "this.panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -134.16,
   "backwardYaw": 110.02,
   "distance": 1,
   "panorama": "this.panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 166.85,
   "backwardYaw": -167.03,
   "distance": 1,
   "panorama": "this.panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -124.1,
  "pitch": -10.05
 }
},
{
 "label": "Living_P2_Level_01",
 "id": "panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_84A9899C_8934_7CAB_41D2_1C62AEC4D74D",
  "this.overlay_860137F7_893C_3465_41DB_0E0568046F03"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -163.51,
   "backwardYaw": 164.33,
   "distance": 1,
   "panorama": "this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_839AF4A6_892D_F4E7_41D8_335811BB307D"
  }
 ]
},
{
 "label": "Living_p1_Level_01",
 "id": "panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_87F9D0E1_893C_EC9D_41C3_DD875B4B312B",
  "this.overlay_999B8B1D_893C_3DA5_41D4_43D7822ECABD",
  "this.overlay_86A28606_893C_57A7_41E0_E6EED444EFB1"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 164.33,
   "backwardYaw": -163.51,
   "distance": 1,
   "panorama": "this.panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -128,
   "backwardYaw": 14.83,
   "distance": 1,
   "panorama": "this.panorama_83D44198_892C_6CAB_41C0_E4586FB49398"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -135.67,
   "backwardYaw": 110.15,
   "distance": 1,
   "panorama": "this.panorama_8225A966_892C_3C67_4197_CCD4C48C1681"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83EC0698_8934_34AB_41DA_61932A7BE529_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 169.07,
  "pitch": -2.76
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_836F100D_8C66_702D_41B4_FB0717807C86",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -37.32,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C6CD0AB_8C66_7015_41D1_A34F9D83D43D",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -36.81,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82C1AFCE_8C66_102F_41CB_CD7CCFED6AE4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -165.17,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 157.01,
  "pitch": -2.01
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83299027_8C66_701D_41E0_977006BF6720",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -165.8,
  "pitch": 0
 }
},
{
 "label": "KITCHEN _1bhk",
 "id": "panorama_820AEF02_8934_359F_41DE_C95A8D266613",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9F3AD95E_892C_FDA7_41DD_A979BB0D3214"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -62.05,
  "pitch": -3.01
 }
},
{
 "label": "KITCHEN _1bhk",
 "id": "panorama_853B73FA_8934_6C6F_41D3_9F840F806533",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_902910B1_8954_2CFD_41D2_32A87311185E"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83C6404D_8C66_7012_41D5_5D9E398D3D9A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 52,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -81.65,
  "pitch": 1.76
 }
},
{
 "label": "Living_P2_Level_02",
 "id": "panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_986E8670_8934_747B_41DD_92ACD9042196",
  "this.overlay_9BB4B964_8934_7D9B_41D1_B852111137D4"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -167.03,
   "backwardYaw": 166.85,
   "distance": 1,
   "panorama": "this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83F7904D_8C66_7012_41D2_34DD936AB5F1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -166.43,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -84.16,
  "pitch": 0.25
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8359D01D_8C66_702D_41DB_9B7C53D18E36",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -38.2,
  "pitch": 0
 }
},
{
 "label": "1bhk_toilet_common",
 "id": "panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9BDE6DD8_8935_D4AB_41C0_4D1892557C14"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 14.58,
   "backwardYaw": -128.5,
   "distance": 1,
   "panorama": "this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_830BA02D_8C66_706D_41CF_05547BA7C97B",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 19.25,
  "pitch": 0
 }
},
{
 "label": "1bhk_toilet_master",
 "id": "panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_98983CE4_893D_D49B_41DC_95E1A04F84BF"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 13.7,
   "backwardYaw": 142.68,
   "distance": 1,
   "panorama": "this.panorama_8225A966_892C_3C67_4197_CCD4C48C1681"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82CEDFCE_8C66_102F_41DC_A71F743EAB29",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -69.85,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 0,
  "pitch": -1.51
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82D5EFDE_8C66_102E_41D9_9EA3123683C7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -15.67,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -169.07,
  "pitch": 1.26
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -86.17,
  "pitch": -1
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_829D1FFD_8C66_6FED_41E1_15E0281E425A",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -13.91,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 168.07,
  "pitch": 0.25
 }
},
{
 "label": "1bhk_toilet_common",
 "id": "panorama_83D44198_892C_6CAB_41C0_E4586FB49398",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_86D55BC8_893F_DCAB_41DD_48A40D70CDA5"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 14.83,
   "backwardYaw": -128,
   "distance": 1,
   "panorama": "this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83B0606C_8C66_7013_419D_8F2015588DF8",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -69.98,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C38E0FA_8C66_71F7_419F_5AE8A95B685F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 16.49,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_833B802D_8C66_706D_4184_071F498FD266",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -68.72,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C62909B_8C66_7035_41DF_340B1D5931B2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 50.5,
  "pitch": 0
 }
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_839AF4A6_892D_F4E7_41D8_335811BB307D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83D44198_892C_6CAB_41C0_E4586FB49398",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_83D44198_892C_6CAB_41C0_E4586FB49398_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_8225A966_892C_3C67_4197_CCD4C48C1681",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_8225A966_892C_3C67_4197_CCD4C48C1681_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83EC0698_8934_34AB_41DA_61932A7BE529",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_83EC0698_8934_34AB_41DA_61932A7BE529_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_820AEF02_8934_359F_41DE_C95A8D266613",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_820AEF02_8934_359F_41DE_C95A8D266613_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_824A27B3_8935_F4FD_41D5_DBEF47212385",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83A669CC_892C_5CAB_41CE_53007747E107",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_83A669CC_892C_5CAB_41CE_53007747E107_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_853B73FA_8934_6C6F_41D3_9F840F806533",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_853B73FA_8934_6C6F_41D3_9F840F806533_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_82AF746F_8934_5465_41DA_BC58754E18CF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_82AF746F_8934_5465_41DA_BC58754E18CF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
   "camera": "this.panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_camera",
   "end": "this.trigger('tourEnded')"
  }
 ]
},
{
 "label": "1bhk_toilet_master",
 "id": "panorama_83EC0698_8934_34AB_41DA_61932A7BE529",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9D81B8F7_892B_DC65_41D5_314BA62A6CCD"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 13.57,
   "backwardYaw": 143.19,
   "distance": 1,
   "panorama": "this.panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -51,
  "pitch": 0.25
 }
},
{
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_acceleration"
},
{
 "label": "KITCHEN _1bhk",
 "id": "panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9A0319BF_8934_7CE5_41DE_B77FBC522EC0"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82834FED_8C66_6FED_41C4_EBF87EDE40A1",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -166.93,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8315D03D_8C66_7072_41B2_99D7C46CBDE2",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -13.15,
  "pitch": 0
 }
},
{
 "label": "Living_p1_Level_03",
 "id": "panorama_83A21B13_892C_7DBD_41DB_5065A6944E22",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9D793390_892C_2CBB_41D7_67DCDA739A04",
  "this.overlay_9DDEFA25_892C_3FE5_41B6_A79965BAE01A",
  "this.overlay_9C5B3A99_892F_FCAD_419D_6A54D9D77036"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -130.76,
   "backwardYaw": 14.2,
   "distance": 1,
   "panorama": "this.panorama_824A27B3_8935_F4FD_41D5_DBEF47212385"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -134.67,
   "backwardYaw": 111.28,
   "distance": 1,
   "panorama": "this.panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 166.09,
   "backwardYaw": -160.75,
   "distance": 1,
   "panorama": "this.panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C28C0EA_8C66_7017_41B8_A64BE24904E0",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -68.72,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_820AEF02_8934_359F_41DE_C95A8D266613_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -54.52,
  "pitch": 1.76
 }
},
{
 "label": "bedroomp1_level02",
 "id": "panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9D39E7BF_8934_34E5_41B6_F041EB4ABFBC",
  "this.overlay_9C63F8B8_8934_3CEB_41DC_133393E8BB86"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 110.02,
   "backwardYaw": -134.16,
   "distance": 1,
   "panorama": "this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 143.19,
   "backwardYaw": 13.57,
   "distance": 1,
   "panorama": "this.panorama_83EC0698_8934_34AB_41DA_61932A7BE529"
  }
 ]
},
{
 "label": "KITCHEN _1bhk",
 "id": "panorama_839AF4A6_892D_F4E7_41D8_335811BB307D",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_994BCA36_893C_3FE7_41C2_BE55648002AD"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83D6205C_8C66_7033_41CF_F03754044A20",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -14.66,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82B0CFED_8C66_6FED_41C9_D86BEFD77B27",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 45.33,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8392E08C_8C66_7012_41D4_3D71381BBC67",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 49.24,
  "pitch": 0
 }
},
{
 "label": "1bhk_toilet_master",
 "id": "panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9E97D6F6_892C_5464_4143_ADDAC8C79DB2"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 12.07,
   "backwardYaw": 142.81,
   "distance": 1,
   "panorama": "this.panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83D44198_892C_6CAB_41C0_E4586FB49398_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -123.35,
  "pitch": -13.06
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -170.08,
  "pitch": 6.03
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_837F000D_8C66_702D_41DD_25DA8F0056C7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 51.5,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_8225A966_892C_3C67_4197_CCD4C48C1681_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -87.93,
  "pitch": 0.75
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C4E30CB_8C66_7016_41D9_98F204BEB7D4",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -166.3,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82FADFBE_8C66_106F_41CB_7FD16BCDD365",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 16.49,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 0,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83A669CC_892C_5CAB_41CE_53007747E107_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -169.83,
  "pitch": -0.75
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C5E90DA_8C66_7037_4189_3BADD84FF16E",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -165.42,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_82A1AFDE_8C66_102E_41C1_CD16B743CBF7",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": -167.93,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_9C7C80BB_8C66_7075_41C3_3A9C9B638577",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 44.33,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8292AFFD_8C66_6FED_41DF_867D5576F454",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 44.96,
  "pitch": 0
 }
},
{
 "label": "bedroomp1_level01",
 "id": "panorama_8225A966_892C_3C67_4197_CCD4C48C1681",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_98158526_893C_75E7_41E0_8D4E5432A412",
  "this.overlay_98700076_893C_6C67_41CE_44138AEA9578"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 110.15,
   "backwardYaw": -135.67,
   "distance": 1,
   "panorama": "this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 142.68,
   "backwardYaw": 13.7,
   "distance": 1,
   "panorama": "this.panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC"
  }
 ]
},
{
 "label": "Living_p1_Level_04",
 "id": "panorama_83A20293_892C_6CBD_41C6_8C3797421AFC",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9EBCEF92_8955_D4BF_41BA_50AEBD559FB3",
  "this.overlay_9EB6A602_8954_579F_41E0_3DD0BDE201F1",
  "this.overlay_91E22F44_8954_75A4_41CA_ED1066FF2C7F"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -129.5,
   "backwardYaw": 14.58,
   "distance": 1,
   "panorama": "this.panorama_82AF746F_8934_5465_41DA_BC58754E18CF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -135.04,
   "backwardYaw": 111.28,
   "distance": 1,
   "panorama": "this.panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 165.34,
   "backwardYaw": -163.51,
   "distance": 1,
   "panorama": "this.panorama_83A669CC_892C_5CAB_41CE_53007747E107"
  }
 ]
},
{
 "label": "Living_P2_Level_03",
 "id": "panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2560,
      "rowCount": 5,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "rowCount": 3,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_9D7A49C1_892C_3C9D_41E0_03545D0979DD",
  "this.overlay_9C1619D0_892D_DCBB_41C4_A95BF11BAEDA"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -160.75,
   "backwardYaw": 166.09,
   "distance": 1,
   "panorama": "this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_820AEF02_8934_359F_41DE_C95A8D266613"
  }
 ]
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_83E4403D_8C66_7072_41C9_AC29A61B8652",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 45.84,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "camera_8382207C_8C66_70F2_41C3_8A4EFC43874F",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 12.97,
  "pitch": 0
 }
},
{
 "initialSequence": {
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 13.26,
    "yawDelta": 295
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 13.26,
    "yawDelta": 32.5
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "id": "panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_camera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 140,
  "yaw": 173.59,
  "pitch": -1.51
 }
},
{
 "label": "1bhk_toilet_common",
 "id": "panorama_82AF746F_8934_5465_41DA_BC58754E18CF",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "rowCount": 4,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "rowCount": 2,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "width": 512,
      "rowCount": 1,
      "colCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_90648EA4_8954_349B_41DD_9028E8D077F9"
 ],
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "hfovMin": "135%",
 "thumbnailUrl": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_t.jpg",
 "partial": false,
 "hfovMax": 140,
 "vfov": 180,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 14.58,
   "backwardYaw": -129.5,
   "distance": 1,
   "panorama": "this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC"
  }
 ]
},
{
 "toolTipPaddingRight": 6,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipPaddingTop": 4,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipBorderRadius": 3,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipShadowSpread": 0,
 "progressBorderRadius": 0,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipOpacity": 1,
 "class": "ViewerArea",
 "minWidth": 100,
 "height": "100%",
 "toolTipShadowBlurRadius": 3,
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontWeight": "normal",
 "progressBarOpacity": 1,
 "playbackBarProgressBorderRadius": 0,
 "toolTipPaddingBottom": 4,
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "progressBarBorderRadius": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "shadow": false,
 "playbackBarOpacity": 1,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarRight": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarHeight": 10,
 "progressHeight": 10,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowOpacity": 1,
 "progressBarBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "toolTipShadowHorizontalLength": 0,
 "progressBottom": 0,
 "firstTransitionDuration": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadow": true,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressOpacity": 1,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "paddingRight": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarLeft": 0,
 "progressRight": 0,
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarBackgroundOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBorderColor": "#000000",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingBottom": 0,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "paddingTop": 0,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadOpacity": 1
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.27,
   "hfov": 9.92,
   "pitch": -26.19
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827E289F_8C66_102D_41D8_180A3D0F5657",
   "pitch": -26.19,
   "yaw": 132.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 9.92
  }
 ],
 "id": "overlay_91A00CCD_8954_34A5_41D4_F07DB881C536",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC, this.camera_83D6205C_8C66_7033_41CF_F03754044A20); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.51,
   "hfov": 9.91,
   "pitch": -44.49
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827EF89F_8C66_102D_41B6_F4D14FF36C7A",
   "pitch": -44.49,
   "yaw": -163.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 9.91
  }
 ],
 "id": "overlay_91420C72_8954_547F_419B_5FEC5939691D",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78, this.camera_82A1AFDE_8C66_102E_41C1_CD16B743CBF7); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.81,
   "hfov": 10.51,
   "pitch": 3.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_1_HS_0_0.png",
      "width": 204,
      "class": "ImageResourceLevel",
      "height": 190
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.21,
   "hfov": 10.51,
   "yaw": 142.81
  }
 ],
 "id": "overlay_9E3CA90D_892C_5DA5_41E0_CE9AAF4D9DE7",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22, this.camera_82B0CFED_8C66_6FED_41C9_D86BEFD77B27); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.28,
   "hfov": 9.26,
   "pitch": 2.96
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3_1_HS_1_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.96,
   "hfov": 9.26,
   "yaw": 111.28
  }
 ],
 "id": "overlay_9E34D0EF_892C_EC65_41D9_5F30AE56BF87",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308, this.camera_82834FED_8C66_6FED_41C4_EBF87EDE40A1); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 141.8,
   "hfov": 10.02,
   "pitch": 1.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_1_HS_0_0.png",
      "width": 194,
      "class": "ImageResourceLevel",
      "height": 209
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.71,
   "hfov": 10.02,
   "yaw": 141.8
  }
 ],
 "id": "overlay_936371FA_8954_2C6F_41D7_430AB23DE430",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC, this.camera_8292AFFD_8C66_6FED_41DF_867D5576F454); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 111.28,
   "hfov": 7.77,
   "pitch": -0.3
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9_1_HS_1_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.3,
   "hfov": 7.77,
   "yaw": 111.28
  }
 ],
 "id": "overlay_931C8588_8955_D4AB_41CA_8E127D3ABA01",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9, this.camera_8359D01D_8C66_702D_41DB_9B7C53D18E36); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.07,
   "hfov": 14.84,
   "pitch": 0.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83CB9AD0_8934_5CBB_41B0_42F247A0A308_1_HS_0_0.png",
      "width": 247,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.43,
   "hfov": 14.84,
   "yaw": 13.07
  }
 ],
 "id": "overlay_93B330D3_8954_2CBD_41CA_FDF54A66AE16",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22, this.camera_8392E08C_8C66_7012_41D4_3D71381BBC67); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_1_HS_0_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.2,
   "hfov": 18.1,
   "pitch": 0.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_824A27B3_8935_F4FD_41D5_DBEF47212385_1_HS_0_0.png",
      "width": 301,
      "class": "ImageResourceLevel",
      "height": 238
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.18,
   "hfov": 18.1,
   "yaw": 14.2
  }
 ],
 "id": "overlay_9CF9A9D0_892C_3CBC_41D3_217EA662E578",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F, this.camera_83B0606C_8C66_7013_419D_8F2015588DF8); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.16,
   "hfov": 9.25,
   "pitch": 3.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_1_HS_0_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.72,
   "hfov": 9.25,
   "yaw": -134.16
  }
 ],
 "id": "overlay_988DEE6E_8934_3467_41DC_E7DFFBE01939",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1, this.camera_83A0505C_8C66_7033_41C4_62AE78E8E312); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.5,
   "hfov": 7.42,
   "pitch": -9.99
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827AE89F_8C66_102D_41DD_47AB0546EA5D",
   "pitch": -9.99,
   "yaw": -128.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.42
  }
 ],
 "id": "overlay_9ABD1983_8934_DC9D_41CD_066D42CF3295",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF, this.camera_8382207C_8C66_70F2_41C3_8A4EFC43874F); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.85,
   "hfov": 12.84,
   "pitch": -22.38
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827B689F_8C66_102D_41B7_D6E41888BA57",
   "pitch": -22.38,
   "yaw": 166.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.84
  }
 ],
 "id": "overlay_9B82B64E_8937_D7A7_41D4_FB617ADFC38D",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E, this.camera_82D5EFDE_8C66_102E_41D9_9EA3123683C7); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.51,
   "hfov": 10.48,
   "pitch": -40.98
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8271889F_8C66_102D_41DC_35568095AD47",
   "pitch": -40.98,
   "yaw": -163.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 10.48
  }
 ],
 "id": "overlay_84A9899C_8934_7CAB_41D2_1C62AEC4D74D",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 132.77,
   "hfov": 6.83,
   "pitch": -25.06
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8277089F_8C66_102D_41C8_F7FED99B67D7",
   "pitch": -25.06,
   "yaw": 132.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 6.83
  }
 ],
 "id": "overlay_860137F7_893C_3465_41DB_0E0568046F03",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8225A966_892C_3C67_4197_CCD4C48C1681, this.camera_82CEDFCE_8C66_102F_41DC_A71F743EAB29); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.67,
   "hfov": 7.76,
   "pitch": 1.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_1_HS_0_0.png",
      "width": 151,
      "class": "ImageResourceLevel",
      "height": 151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.71,
   "hfov": 7.76,
   "yaw": -135.67
  }
 ],
 "id": "overlay_87F9D0E1_893C_EC9D_41C3_DD875B4B312B",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83D44198_892C_6CAB_41C0_E4586FB49398, this.camera_82C1AFCE_8C66_102F_41CB_CD7CCFED6AE4); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128,
   "hfov": 7.43,
   "pitch": -9.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8277889F_8C66_102D_41D4_286168301618",
   "pitch": -9.48,
   "yaw": -128,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.43
  }
 ],
 "id": "overlay_999B8B1D_893C_3DA5_41D4_43D7822ECABD",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522, this.camera_82FADFBE_8C66_106F_41CB_7FD16BCDD365); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.33,
   "hfov": 12.89,
   "pitch": -21.88
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8274589F_8C66_102D_41DD_813C8B5098A9",
   "pitch": -21.88,
   "yaw": 164.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.89
  }
 ],
 "id": "overlay_86A28606_893C_57A7_41E0_E6EED444EFB1",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.98,
   "hfov": 8.52,
   "pitch": -34.23
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827E089F_8C66_102D_41D7_9C7EA5F4527B",
   "pitch": -34.23,
   "yaw": 149.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 8.52
  }
 ],
 "id": "overlay_9F3AD95E_892C_FDA7_41DD_A979BB0D3214",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 150.86,
   "hfov": 10.23,
   "pitch": -35.48
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827C289F_8C66_102D_41C8_4ECAD1785C99",
   "pitch": -35.48,
   "yaw": 150.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 10.23
  }
 ],
 "id": "overlay_902910B1_8954_2CFD_41D2_32A87311185E",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4, this.camera_8315D03D_8C66_7072_41B2_99D7C46CBDE2); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.03,
   "hfov": 10.36,
   "pitch": -41.73
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8275D89F_8C66_102D_41D0_1FC3734F4588",
   "pitch": -41.73,
   "yaw": -167.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 10.36
  }
 ],
 "id": "overlay_986E8670_8934_747B_41DD_92ACD9042196",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 131.26,
   "hfov": 6.74,
   "pitch": -26.57
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8275889F_8C66_102D_41C7_CF5213C678C4",
   "pitch": -26.57,
   "yaw": 131.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 6.74
  }
 ],
 "id": "overlay_9BB4B964_8934_7D9B_41D1_B852111137D4",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4, this.camera_837F000D_8C66_702D_41DD_25DA8F0056C7); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.58,
   "hfov": 14.81,
   "pitch": -3.71
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_828B3FCD_8934_54A5_41CC_F2FB2A1EE6B1_1_HS_0_0.png",
      "width": 247,
      "class": "ImageResourceLevel",
      "height": 243
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "hfov": 14.81,
   "yaw": 14.58
  }
 ],
 "id": "overlay_9BDE6DD8_8935_D4AB_41C0_4D1892557C14",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_8225A966_892C_3C67_4197_CCD4C48C1681, this.camera_836F100D_8C66_702D_41B4_FB0717807C86); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.7,
   "hfov": 13.57,
   "pitch": -2.21
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC_1_HS_0_0.png",
      "width": 226,
      "class": "ImageResourceLevel",
      "height": 192
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.21,
   "hfov": 13.57,
   "yaw": 13.7
  }
 ],
 "id": "overlay_98983CE4_893D_D49B_41DC_95E1A04F84BF",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E, this.camera_83C6404D_8C66_7012_41D5_5D9E398D3D9A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.83,
   "hfov": 14.8,
   "pitch": -3.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83D44198_892C_6CAB_41C0_E4586FB49398_1_HS_0_0.png",
      "width": 247,
      "class": "ImageResourceLevel",
      "height": 213
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.84,
   "hfov": 14.8,
   "yaw": 14.83
  }
 ],
 "id": "overlay_86D55BC8_893F_DCAB_41DD_48A40D70CDA5",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F, this.camera_9C6CD0AB_8C66_7015_41D1_A34F9D83D43D); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_1_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.57,
   "hfov": 13.33,
   "pitch": 1.56
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83EC0698_8934_34AB_41DA_61932A7BE529_1_HS_0_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.56,
   "hfov": 13.33,
   "yaw": 13.57
  }
 ],
 "id": "overlay_9D81B8F7_892B_DC65_41D5_314BA62A6CCD",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.49,
   "hfov": 12.26,
   "pitch": -36.87
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827B089F_8C66_102D_41DB_655E987A1E7F",
   "pitch": -36.87,
   "yaw": 151.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 12.26
  }
 ],
 "id": "overlay_9A0319BF_8934_7CE5_41DE_B77FBC522EC0",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_824A27B3_8935_F4FD_41D5_DBEF47212385, this.camera_83299027_8C66_701D_41E0_977006BF6720); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -130.76,
   "hfov": 6.8,
   "pitch": -25.56
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8279089F_8C66_102D_41D0_EDAB0F3768F2",
   "pitch": -25.56,
   "yaw": -130.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 6.8
  }
 ],
 "id": "overlay_9D793390_892C_2CBB_41D7_67DCDA739A04",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3, this.camera_833B802D_8C66_706D_4184_071F498FD266); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.67,
   "hfov": 8.27,
   "pitch": -0.18
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_1_HS_1_0.png",
      "width": 160,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.18,
   "hfov": 8.27,
   "yaw": -134.67
  }
 ],
 "id": "overlay_9DDEFA25_892C_3FE5_41B6_A79965BAE01A",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23, this.camera_830BA02D_8C66_706D_41CF_05547BA7C97B); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 166.09,
   "hfov": 12.91,
   "pitch": -21.63
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827E689F_8C66_102D_41C4_43EDB996A48D",
   "pitch": -21.63,
   "yaw": 166.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.91
  }
 ],
 "id": "overlay_9C5B3A99_892F_FCAD_419D_6A54D9D77036",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4, this.camera_83E4403D_8C66_7072_41C9_AC29A61B8652); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.02,
   "hfov": 9.26,
   "pitch": 2.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_1_HS_0_0.png",
      "width": 180,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.84,
   "hfov": 9.26,
   "yaw": 110.02
  }
 ],
 "id": "overlay_9D39E7BF_8934_34E5_41B6_F041EB4ABFBC",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83EC0698_8934_34AB_41DA_61932A7BE529, this.camera_83F7904D_8C66_7012_41D2_34DD936AB5F1); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.19,
   "hfov": 10.27,
   "pitch": 1.96
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83BAA0D6_892C_2CA7_41D3_C9B4727D6E6F_1_HS_1_0.png",
      "width": 199,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.96,
   "hfov": 10.27,
   "yaw": 143.19
  }
 ],
 "id": "overlay_9C63F8B8_8934_3CEB_41DC_133393E8BB86",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Left-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 156.13,
   "hfov": 7.55,
   "pitch": -37.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8274E89F_8C66_102D_41D5_2AC4A230F1E4",
   "pitch": -37.75,
   "yaw": 156.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.55
  }
 ],
 "id": "overlay_994BCA36_893C_3FE7_41C2_BE55648002AD",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83BBA87A_892F_DC6F_41DC_26B0812EA2F3, this.camera_83495017_8C66_703D_41CF_B1BD1C8D863F); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_1_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.07,
   "hfov": 12.83,
   "pitch": 0.31
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83E89E25_8935_F7E5_41CB_FA48F6700B78_1_HS_0_0.png",
      "width": 213,
      "class": "ImageResourceLevel",
      "height": 184
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.31,
   "hfov": 12.83,
   "yaw": 12.07
  }
 ],
 "id": "overlay_9E97D6F6_892C_5464_4143_ADDAC8C79DB2",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83BB9811_892C_7BBD_41CF_3BE24A9603BC, this.camera_9C4E30CB_8C66_7016_41D9_98F204BEB7D4); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 142.68,
   "hfov": 9.74,
   "pitch": 4.72
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_1_HS_0_0.png",
      "width": 190,
      "class": "ImageResourceLevel",
      "height": 180
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.72,
   "hfov": 9.74,
   "yaw": 142.68
  }
 ],
 "id": "overlay_98158526_893C_75E7_41E0_8D4E5432A412",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E, this.camera_9C7C80BB_8C66_7075_41C3_3A9C9B638577); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 110.15,
   "hfov": 10.53,
   "pitch": 0.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_8225A966_892C_3C67_4197_CCD4C48C1681_1_HS_1_0.png",
      "width": 204,
      "class": "ImageResourceLevel",
      "height": 194
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.58,
   "hfov": 10.53,
   "yaw": 110.15
  }
 ],
 "id": "overlay_98700076_893C_6C67_41CE_44138AEA9578",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83BBAFCB_892F_D4AD_41DE_0BC104D909B9, this.camera_9C28C0EA_8C66_7017_41B8_A64BE24904E0); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -135.04,
   "hfov": 8.5,
   "pitch": 3.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_1_HS_0_0.png",
      "width": 165,
      "class": "ImageResourceLevel",
      "height": 175
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.84,
   "hfov": 8.5,
   "yaw": -135.04
  }
 ],
 "id": "overlay_9EBCEF92_8955_D4BF_41BA_50AEBD559FB3",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_82AF746F_8934_5465_41DA_BC58754E18CF, this.camera_9C5E90DA_8C66_7037_4189_3BADD84FF16E); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.5,
   "hfov": 7.34,
   "pitch": -13.25
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827F389F_8C66_102D_41DE_1EB7255B5B30",
   "pitch": -13.25,
   "yaw": -129.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 7.34
  }
 ],
 "id": "overlay_9EB6A602_8954_579F_41E0_3DD0BDE201F1",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A669CC_892C_5CAB_41CE_53007747E107, this.camera_9C38E0FA_8C66_71F7_419F_5AE8A95B685F); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 165.34,
   "hfov": 12.7,
   "pitch": -23.89
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_827FB89F_8C66_102D_41D8_5643F2A42BC3",
   "pitch": -23.89,
   "yaw": 165.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 12.7
  }
 ],
 "id": "overlay_91E22F44_8954_75A4_41CA_ED1066FF2C7F",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Circle 01a"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A21B13_892C_7DBD_41DB_5065A6944E22, this.camera_829D1FFD_8C66_6FED_41E1_15E0281E425A); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.75,
   "hfov": 9.73,
   "pitch": -45.5
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8278F89F_8C66_102D_41DA_EC20BA4572CA",
   "pitch": -45.5,
   "yaw": -160.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 9.73
  }
 ],
 "id": "overlay_9D7A49C1_892C_3C9D_41E0_03545D0979DD",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Arrow 01 Right-Up"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.78,
   "hfov": 6.78,
   "pitch": -25.81
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_8278889F_8C66_102D_41E0_DABC6F075D39",
   "pitch": -25.81,
   "yaw": 133.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 6.78
  }
 ],
 "id": "overlay_9C1619D0_892D_DCBB_41C4_A95BF11BAEDA",
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "data": {
  "label": "Image"
 },
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_83A20293_892C_6CBD_41C6_8C3797421AFC, this.camera_9C62909B_8C66_7035_41DF_340B1D5931B2); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.58,
   "hfov": 13.28,
   "pitch": -5.22
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_82AF746F_8934_5465_41DA_BC58754E18CF_1_HS_0_0.png",
      "width": 222,
      "class": "ImageResourceLevel",
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.22,
   "hfov": 13.28,
   "yaw": 14.58
  }
 ],
 "id": "overlay_90648EA4_8954_349B_41DD_9028E8D077F9",
 "rollOverDisplay": false
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_827E289F_8C66_102D_41D8_180A3D0F5657",
 "colCount": 3
},
{
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_83A669CC_892C_5CAB_41CE_53007747E107_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_827EF89F_8C66_102D_41B6_F4D14FF36C7A",
 "colCount": 4
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_827AE89F_8C66_102D_41DD_47AB0546EA5D",
 "colCount": 3
},
{
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_83A2D38E_892C_6CA7_41CA_9C1FAB65B7A4_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_827B689F_8C66_102D_41B7_D6E41888BA57",
 "colCount": 4
},
{
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_8271889F_8C66_102D_41DC_35568095AD47",
 "colCount": 4
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_83DF73F3_892C_2C7D_41D9_BAB3C7804522_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_8277089F_8C66_102D_41C8_F7FED99B67D7",
 "colCount": 3
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_8277889F_8C66_102D_41D4_286168301618",
 "colCount": 3
},
{
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_82068BEC_892C_5C6B_41DD_4CE4FD02693E_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_8274589F_8C66_102D_41DD_813C8B5098A9",
 "colCount": 4
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_820AEF02_8934_359F_41DE_C95A8D266613_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_827E089F_8C66_102D_41D7_9C7EA5F4527B",
 "colCount": 3
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_853B73FA_8934_6C6F_41D3_9F840F806533_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_827C289F_8C66_102D_41C8_4ECAD1785C99",
 "colCount": 3
},
{
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_8275D89F_8C66_102D_41D0_1FC3734F4588",
 "colCount": 4
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_83A1FB0A_892C_3DAF_41C7_DFEC715199EF_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_8275889F_8C66_102D_41C7_CF5213C678C4",
 "colCount": 3
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_82B9CECA_892B_D4AF_4167_A48C551C8EED_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_827B089F_8C66_102D_41DB_655E987A1E7F",
 "colCount": 3
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_8279089F_8C66_102D_41D0_EDAB0F3768F2",
 "colCount": 3
},
{
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_83A21B13_892C_7DBD_41DB_5065A6944E22_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_827E689F_8C66_102D_41C4_43EDB996A48D",
 "colCount": 4
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_839AF4A6_892D_F4E7_41D8_335811BB307D_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_8274E89F_8C66_102D_41D5_2AC4A230F1E4",
 "colCount": 3
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_827F389F_8C66_102D_41DE_1EB7255B5B30",
 "colCount": 3
},
{
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_83A20293_892C_6CBD_41C6_8C3797421AFC_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_827FB89F_8C66_102D_41D8_5643F2A42BC3",
 "colCount": 4
},
{
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 750
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "rowCount": 5,
 "id": "AnimatedImageResource_8278F89F_8C66_102D_41DA_EC20BA4572CA",
 "colCount": 4
},
{
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_83A622CA_892C_2CAF_41D0_9C747E9B5A23_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "rowCount": 3,
 "id": "AnimatedImageResource_8278889F_8C66_102D_41E0_DABC6F075D39",
 "colCount": 3
}],
 "scrollBarWidth": 10,
 "borderSize": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5,
 "class": "Player",
 "minWidth": 20,
 "gap": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "scripts": {
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } }
 },
 "downloadEnabled": false,
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player485"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
