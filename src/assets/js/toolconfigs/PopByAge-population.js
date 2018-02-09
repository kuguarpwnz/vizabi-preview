var VIZABI_MODEL = {
    "state": {
      "time": {
        "step": 1,
        "delayThresholdX2": 0,
        "delayThresholdX4": 0,
        "immediatePlay": true,
        "delay": 200,
        "dim": "year"
      },
      "entities": {
        "dim": "geo",
        "show": {
          "geo": {
            "$in": ["world"]
          }
        },
        "filter": {
          "geo": {
              "$or": [
              {"un_state": true},
              {"is--global": true},
              {"is--world_4region": true}
            ]
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
        "dim": "world_4region"
      },
      "entities_age": {
        "dim": "age",
        "show": {},
        "filter": {"age": {"age": {"$nin": ["80plus", "100plus"] } } },
        "grouping": 1
      },
      "entities_side": {
        "show": {},
        "dim": "gender",
        //"skipFilter": true
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
          "which": "age",
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
          "palette": {
            "world": "#ffb600"
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
    }
  }
