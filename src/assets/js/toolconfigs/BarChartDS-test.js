var VIZABI_MODEL = {
  "state": {
    "time": {
      "startOrigin": "2000",
      "endOrigin": "2050",
      "value": "2017",
      "step": 1,
      "delayThresholdX2": 0,
      "delayThresholdX4": 0,
      "immediatePlay": true,
      "delay": 1000,
      "dim": "year"
    },
    "entities": {
      "dim": "geo",
      "show": {
        "geo": {
          "$in": ["asia","africa","europe","americas"]
        }
      }
    },
    "entities_geodomain": {
      "dim": "geo",
      "show": {
        "geo": {
          "$in": ["world"]
        }
      },
      "skipFilter": true
    },
    "entities_colorlegend": {
      "dim": "geo"
    },
    "entities_age": {
      "dim": "basomrade",
      "show": {},
      "grouping": 1
    },
    "entities_side": {
      "dim": "gender",
      "skipFilter": true
    },
    "marker": {
      "space": ["entities", "time", "entities_side", "entities_age", "entities_geodomain"],
      "label_stack": {
        "use": "property",
        "spaceRef": "entities",
        "which": "name"
      },
      "label_side": {
        "use": "property",
        "spaceRef": "entities_side",
        "which": "name"
      },
      "axis_y": {
        "use": "property",
        "which": "name",
        "spaceRef": "entities_age",
        "domainMax": 100,
        "domainMin": 0,
        "_important": false
      },
      "axis_x": {
        "use": "indicator",
        "which": "population"
      },
      "color": {
        "use": "property",
        "which": "world_4region",
        "scaleType": "ordinal",
        "spaceRef": "entities",
        "allow": {
          "scales": ["ordinal"]
        },
        "syncModels": ["marker_colorlegend"]
      },
      "side": {
        "use": "property",
        "which": "gender",
        "spaceRef": "entities_side",
        "allow": {
          "scales": ["ordinal"]
        }
      }
    },
    "entities_allpossible": {
      "dim": "world_4region"
    },
    "marker_allpossible": {
      "space": ["entities_allpossible"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "entities_allpossibleside": {
      "dim": "gender"
    },
    "marker_allpossibleside": {
      "space": ["entities_allpossibleside"],
      "label": {
        "use": "property",
        "which": "name"
      }
    },
    "marker_colorlegend": {
      "space": ["entities_colorlegend"],
      "label": {
        "use": "property",
        "which": "name"
      },
      "hook_rank": {
        "use": "property",
        "which": "rank"
      },
      "hook_geoshape": {
        "use": "property",
        "which": "shape_lores_svg"
      }
    },
    "entities_tags": { },
    "marker_tags": {
      "space": ["entities_tags"],
      "label": {},
      "hook_parent": {}
    }
  },
  "ui": {
    "splash": true
  },
  "data": {
    reader: 'waffle',
    path: 'https://waffle-server-dev.gapminderdev.org/api/ddf',
    //dataset: 'open-numbers/ddf--sodertorn--stockholm_lan_basomrade#multidimensional'
    dataset: 'angieskazka/ddf--sodertorn--stockholm_lan_basomrade'
  }
}
