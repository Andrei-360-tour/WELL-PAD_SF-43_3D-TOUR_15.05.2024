var APP_DATA = {
  "scenes": [
    {
      "id": "0-sf-43_overview-1",
      "name": "SF-43_Overview 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.12307848901172846,
        "pitch": 0.2477307241526603,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 0.08994572734674655,
          "pitch": 0.251917633536495,
          "rotation": 0,
          "target": "1-sf-43_overview-2"
        },
        {
          "yaw": -0.1203469960852015,
          "pitch": 0.31556733007788296,
          "rotation": 0,
          "target": "2-sf-43_wellhead"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sf-43_overview-2",
      "name": "SF-43_Overview 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.4585938220711192,
        "pitch": 0.316030316325584,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.805948096039039,
          "pitch": -0.12131502359465784,
          "rotation": 0,
          "target": "0-sf-43_overview-1"
        },
        {
          "yaw": -0.5020272136136938,
          "pitch": 0.4814537952067255,
          "rotation": 0,
          "target": "2-sf-43_wellhead"
        },
        {
          "yaw": -2.6817713046076967,
          "pitch": 0.13332118590141384,
          "rotation": 0,
          "target": "14-sf-43_security-building"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sf-43_wellhead",
      "name": "SF-43_WellHead",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.014277980601665519,
        "pitch": 0.3807417722742237,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 1.0012048477257416,
          "pitch": -0.38570139132108494,
          "rotation": 0,
          "target": "1-sf-43_overview-2"
        },
        {
          "yaw": -1.238340093401348,
          "pitch": 0.11524453788241829,
          "rotation": 0,
          "target": "3-sf-43_wellhead--cellar"
        },
        {
          "yaw": 1.9797128287520165,
          "pitch": 0.031055996553547516,
          "rotation": 0,
          "target": "14-sf-43_security-building"
        },
        {
          "yaw": 1.2307940449274408,
          "pitch": -0.0015075791695320362,
          "rotation": 0,
          "target": "15-sf-43_well-pad-5"
        },
        {
          "yaw": -0.3315805423218414,
          "pitch": 0.026853247437633954,
          "rotation": 0,
          "target": "4-sf-43_v-ditch"
        },
        {
          "yaw": 2.070250882845535,
          "pitch": -0.24214030234117168,
          "rotation": 0,
          "target": "0-sf-43_overview-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-sf-43_wellhead--cellar",
      "name": "SF-43_WellHead & Cellar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.5565114521508363,
        "pitch": 0.2716805686781427,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 1.6428842119678864,
          "pitch": 0.06482492157274677,
          "rotation": 0,
          "target": "4-sf-43_v-ditch"
        },
        {
          "yaw": 2.8109465224719337,
          "pitch": 0.1408301930930662,
          "rotation": 0,
          "target": "2-sf-43_wellhead"
        },
        {
          "yaw": -0.9058874035977933,
          "pitch": 0.20237180604959804,
          "rotation": 0,
          "target": "13-sf-43_concrete-pad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-sf-43_v-ditch",
      "name": "SF-43_V-Ditch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.446790851879987,
        "pitch": 0.1435449055837612,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.7556691021992883,
          "pitch": 0.15515849692770445,
          "rotation": 0,
          "target": "3-sf-43_wellhead--cellar"
        },
        {
          "yaw": -0.15975144009009767,
          "pitch": 0.05661139929967085,
          "rotation": 0,
          "target": "5-sf-43_waste-pit"
        },
        {
          "yaw": 2.9626851512399295,
          "pitch": 0.1660145379079907,
          "rotation": 0,
          "target": "2-sf-43_wellhead"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sf-43_waste-pit",
      "name": "SF-43_Waste Pit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.42318768139651475,
        "pitch": 0.11576202063206509,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.0387604647747004,
          "pitch": 0.17478844387674997,
          "rotation": 0,
          "target": "6-sf-43_well-pad"
        },
        {
          "yaw": 2.7268128894347905,
          "pitch": 0.08542099725988805,
          "rotation": 0,
          "target": "4-sf-43_v-ditch"
        },
        {
          "yaw": -0.1090118438903609,
          "pitch": 0.08938819140150045,
          "rotation": 0,
          "target": "7-sf-43_waste-pit-1"
        },
        {
          "yaw": 1.849383889404093,
          "pitch": 0.041017894670806854,
          "rotation": 0,
          "target": "15-sf-43_well-pad-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-sf-43_well-pad",
      "name": "SF-43_Well Pad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.520410546745964,
        "pitch": -0.07469659556908503,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 2.6151065335990786,
          "pitch": 0.25219851036286656,
          "rotation": 0,
          "target": "5-sf-43_waste-pit"
        },
        {
          "yaw": -1.913552997688436,
          "pitch": 0.1270612203789625,
          "rotation": 0,
          "target": "8-sf-43_well-pad-1"
        },
        {
          "yaw": -2.721104506310329,
          "pitch": 0.0497231931901112,
          "rotation": 0,
          "target": "13-sf-43_concrete-pad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sf-43_waste-pit-1",
      "name": "SF-43_Waste Pit 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.1740069639939623,
        "pitch": 0.2037411563124678,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -3.0384072848133243,
          "pitch": 0.05255903511521964,
          "rotation": 0,
          "target": "6-sf-43_well-pad"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-sf-43_well-pad-1",
      "name": "SF-43_Well Pad 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.8640843722292466,
        "pitch": -0.03009812536435419,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.5802623743499016,
          "pitch": 0.13295416268861615,
          "rotation": 0,
          "target": "6-sf-43_well-pad"
        },
        {
          "yaw": 0.5756405647264771,
          "pitch": 0.07450962469986067,
          "rotation": 0,
          "target": "9-sf-43_well-pad-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sf-43_well-pad-2",
      "name": "SF-43_Well Pad 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -1.9973910782387776,
        "pitch": 0.15941626283729882,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 3.0465520686552114,
          "pitch": 0.07366389134066509,
          "rotation": 0,
          "target": "8-sf-43_well-pad-1"
        },
        {
          "yaw": -1.549192173208434,
          "pitch": 0.06846133302603619,
          "rotation": 0,
          "target": "10-sf-43_well-pad-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sf-43_well-pad-3",
      "name": "SF-43_Well Pad 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.8688555440535808,
        "pitch": -0.21299817906969842,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.4487257843976042,
          "pitch": 0.12543297002760134,
          "rotation": 0,
          "target": "9-sf-43_well-pad-2"
        },
        {
          "yaw": -0.004094056516020572,
          "pitch": -0.040351155150496254,
          "rotation": 0,
          "target": "11-sf-43_over-head-line"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-sf-43_over-head-line",
      "name": "SF-43_Over Head Line",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.8809385001182228,
        "pitch": -0.25699168580322507,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.63506390002202,
          "pitch": 0.13659821453378918,
          "rotation": 0,
          "target": "10-sf-43_well-pad-3"
        },
        {
          "yaw": -1.2313462277359122,
          "pitch": 0.08998542653646524,
          "rotation": 0,
          "target": "12-sf-43_well-pad-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-sf-43_well-pad-4",
      "name": "SF-43_Well Pad 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -0.46365218785737383,
        "pitch": -0.13428394393320886,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": -2.9649575328887323,
          "pitch": 0.16950989137593275,
          "rotation": 0,
          "target": "11-sf-43_over-head-line"
        },
        {
          "yaw": -0.49401835578940734,
          "pitch": 0.0070106982518467476,
          "rotation": 0,
          "target": "13-sf-43_concrete-pad"
        },
        {
          "yaw": 0.3538052093062696,
          "pitch": 0.004897073217815517,
          "rotation": 0,
          "target": "14-sf-43_security-building"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-sf-43_concrete-pad",
      "name": "SF-43_Concrete Pad",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.28577813544504593,
        "pitch": 0.30676935467502275,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 0.6538434094571688,
          "pitch": 0.06289755533098251,
          "rotation": 0,
          "target": "3-sf-43_wellhead--cellar"
        },
        {
          "yaw": 2.51385762752108,
          "pitch": 0.2826981390172172,
          "rotation": 0,
          "target": "12-sf-43_well-pad-4"
        },
        {
          "yaw": -0.24011318067704046,
          "pitch": 0.04883223220181421,
          "rotation": 0,
          "target": "5-sf-43_waste-pit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-sf-43_security-building",
      "name": "SF-43_Security Building",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 0.4799683871380971,
        "pitch": -0.1711583119352511,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 3.1320871424479737,
          "pitch": 0.09948444321773664,
          "rotation": 0,
          "target": "12-sf-43_well-pad-4"
        },
        {
          "yaw": -2.324938960301358,
          "pitch": -0.17146290358101623,
          "rotation": 0,
          "target": "1-sf-43_overview-2"
        },
        {
          "yaw": -0.9065743674235875,
          "pitch": 0.00779161150171781,
          "rotation": 0,
          "target": "15-sf-43_well-pad-5"
        },
        {
          "yaw": -2.4838308835502367,
          "pitch": 0.11439850004966168,
          "rotation": 0,
          "target": "2-sf-43_wellhead"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-sf-43_well-pad-5",
      "name": "SF-43_Well Pad 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.8415582986647028,
        "pitch": 0.024261965331451307,
        "fov": 1.4032930175016776
      },
      "linkHotspots": [
        {
          "yaw": 2.6077206524098413,
          "pitch": 0.15638968228613237,
          "rotation": 0,
          "target": "14-sf-43_security-building"
        },
        {
          "yaw": -2.5915239665448215,
          "pitch": 0.1389621824385543,
          "rotation": 0,
          "target": "2-sf-43_wellhead"
        },
        {
          "yaw": -1.676608977415082,
          "pitch": 0.11349311530336159,
          "rotation": 0,
          "target": "5-sf-43_waste-pit"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "WELL PAD SF-43",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
