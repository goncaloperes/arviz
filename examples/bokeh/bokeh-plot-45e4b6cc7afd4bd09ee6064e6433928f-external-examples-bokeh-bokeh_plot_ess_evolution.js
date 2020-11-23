(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("c6d52664-db8a-47ce-b804-3c554fb80e7a");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c6d52664-db8a-47ce-b804-3c554fb80e7a' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"5b17ae26-4eb2-464d-ae72-b2923dbf4173":{"roots":{"references":[{"attributes":{},"id":"68007","type":"BasicTicker"},{"attributes":{"data_source":{"id":"68034"},"glyph":{"id":"68035"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68036"},"selection_glyph":null,"view":{"id":"68038"}},"id":"68037","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68035","type":"Line"},{"attributes":{"above":[{"id":"68050"}],"below":[{"id":"68002"}],"center":[{"id":"68005"},{"id":"68009"}],"left":[{"id":"68006"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68032"},{"id":"68037"},{"id":"68042"},{"id":"68047"},{"id":"68049"}],"title":{"id":"68053"},"toolbar":{"id":"68020"},"toolbar_location":null,"x_range":{"id":"67994"},"x_scale":{"id":"67998"},"y_range":{"id":"67996"},"y_scale":{"id":"68000"}},"id":"67993","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"67998","type":"LinearScale"},{"attributes":{},"id":"68065","type":"UnionRenderers"},{"attributes":{"children":[{"id":"68073"},{"id":"68071"}]},"id":"68074","type":"Column"},{"attributes":{"overlay":{"id":"68018"}},"id":"68012","type":"BoxZoomTool"},{"attributes":{},"id":"68003","type":"BasicTicker"},{"attributes":{},"id":"67996","type":"DataRange1d"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68062"},"selection_policy":{"id":"68063"}},"id":"68034","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"68017","type":"HoverTool"},{"attributes":{"source":{"id":"68039"}},"id":"68043","type":"CDSView"},{"attributes":{"children":[[{"id":"67993"},0,0]]},"id":"68071","type":"GridBox"},{"attributes":{},"id":"68063","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68031","type":"Circle"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68019","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"68029"},"glyph":{"id":"68030"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68031"},"selection_glyph":null,"view":{"id":"68033"}},"id":"68032","type":"GlyphRenderer"},{"attributes":{},"id":"68011","type":"PanTool"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68041","type":"Line"},{"attributes":{"axis_label":"ESS","formatter":{"id":"68059"},"ticker":{"id":"68007"}},"id":"68006","type":"LinearAxis"},{"attributes":{},"id":"68057","type":"BasicTickFormatter"},{"attributes":{},"id":"68016","type":"SaveTool"},{"attributes":{"data_source":{"id":"68039"},"glyph":{"id":"68040"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68041"},"selection_glyph":null,"view":{"id":"68043"}},"id":"68042","type":"GlyphRenderer"},{"attributes":{"toolbar":{"id":"68072"},"toolbar_location":"above"},"id":"68073","type":"ToolbarBox"},{"attributes":{},"id":"68000","type":"LinearScale"},{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68049","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68018","type":"BoxAnnotation"},{"attributes":{},"id":"68013","type":"WheelZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68030","type":"Circle"},{"attributes":{"source":{"id":"68034"}},"id":"68038","type":"CDSView"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"68032"},{"id":"68037"}]},"id":"68051","type":"LegendItem"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"68047"},{"id":"68042"}]},"id":"68052","type":"LegendItem"},{"attributes":{},"id":"68061","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68046","type":"Circle"},{"attributes":{},"id":"68059","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"68044"}},"id":"68048","type":"CDSView"},{"attributes":{"axis":{"id":"68006"},"dimension":1,"ticker":null},"id":"68009","type":"Grid"},{"attributes":{},"id":"68060","type":"Selection"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"68040","type":"Line"},{"attributes":{},"id":"68064","type":"Selection"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68066"},"selection_policy":{"id":"68067"}},"id":"68044","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"68020"}],"tools":[{"id":"68010"},{"id":"68011"},{"id":"68012"},{"id":"68013"},{"id":"68014"},{"id":"68015"},{"id":"68016"},{"id":"68017"}]},"id":"68072","type":"ProxyToolbar"},{"attributes":{},"id":"67994","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68045","type":"Circle"},{"attributes":{"axis":{"id":"68002"},"ticker":null},"id":"68005","type":"Grid"},{"attributes":{},"id":"68015","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68060"},"selection_policy":{"id":"68061"}},"id":"68029","type":"ColumnDataSource"},{"attributes":{},"id":"68066","type":"Selection"},{"attributes":{},"id":"68062","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"68036","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68010"},{"id":"68011"},{"id":"68012"},{"id":"68013"},{"id":"68014"},{"id":"68015"},{"id":"68016"},{"id":"68017"}]},"id":"68020","type":"Toolbar"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68064"},"selection_policy":{"id":"68065"}},"id":"68039","type":"ColumnDataSource"},{"attributes":{"text":"b"},"id":"68053","type":"Title"},{"attributes":{"source":{"id":"68029"}},"id":"68033","type":"CDSView"},{"attributes":{},"id":"68067","type":"UnionRenderers"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"68057"},"ticker":{"id":"68003"}},"id":"68002","type":"LinearAxis"},{"attributes":{"data_source":{"id":"68044"},"glyph":{"id":"68045"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68046"},"selection_glyph":null,"view":{"id":"68048"}},"id":"68047","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"68019"}},"id":"68014","type":"LassoSelectTool"},{"attributes":{"click_policy":"hide","items":[{"id":"68051"},{"id":"68052"}],"location":"center_right","orientation":"horizontal"},"id":"68050","type":"Legend"},{"attributes":{},"id":"68010","type":"ResetTool"}],"root_ids":["68074"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"5b17ae26-4eb2-464d-ae72-b2923dbf4173","root_ids":["68074"],"roots":{"68074":"c6d52664-db8a-47ce-b804-3c554fb80e7a"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();