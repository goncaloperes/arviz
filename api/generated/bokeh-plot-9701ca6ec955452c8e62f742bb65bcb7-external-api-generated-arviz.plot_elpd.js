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
    
      
      
    
      var element = document.getElementById("65caf257-1d4c-4942-9275-5ab895550272");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '65caf257-1d4c-4942-9275-5ab895550272' but no matching script tag was found.")
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
                    
                  var docs_json = '{"d8d4a080-8efe-4265-9275-75f193e5d547":{"roots":{"references":[{"attributes":{"formatter":{"id":"64842"},"ticker":{"id":"64808"}},"id":"64807","type":"LinearAxis"},{"attributes":{},"id":"64816","type":"PanTool"},{"attributes":{},"id":"64801","type":"DataRange1d"},{"attributes":{},"id":"64799","type":"DataRange1d"},{"attributes":{},"id":"64812","type":"BasicTicker"},{"attributes":{},"id":"64844","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"64835"},"glyph":{"id":"64834"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"64837"}},"id":"64836","type":"GlyphRenderer"},{"attributes":{},"id":"64821","type":"SaveTool"},{"attributes":{},"id":"64808","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"64823","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"64822","type":"HoverTool"},{"attributes":{"text":"centered model - non centered model"},"id":"64838","type":"Title"},{"attributes":{},"id":"64820","type":"UndoTool"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"64844"},"ticker":{"id":"64812"}},"id":"64811","type":"LinearAxis"},{"attributes":{"overlay":{"id":"64823"}},"id":"64817","type":"BoxZoomTool"},{"attributes":{},"id":"64845","type":"Selection"},{"attributes":{},"id":"64846","type":"UnionRenderers"},{"attributes":{},"id":"64805","type":"LinearScale"},{"attributes":{"children":[[{"id":"64798"},0,0]]},"id":"64850","type":"GridBox"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"64845"},"selection_policy":{"id":"64846"}},"id":"64835","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"64807"},"ticker":null},"id":"64810","type":"Grid"},{"attributes":{"children":[{"id":"64852"},{"id":"64850"}]},"id":"64853","type":"Column"},{"attributes":{"source":{"id":"64835"}},"id":"64837","type":"CDSView"},{"attributes":{},"id":"64815","type":"ResetTool"},{"attributes":{},"id":"64818","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"64815"},{"id":"64816"},{"id":"64817"},{"id":"64818"},{"id":"64819"},{"id":"64820"},{"id":"64821"},{"id":"64822"}]},"id":"64825","type":"Toolbar"},{"attributes":{"overlay":{"id":"64824"}},"id":"64819","type":"LassoSelectTool"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"64824","type":"PolyAnnotation"},{"attributes":{"line_color":{"value":"#2a2eec"},"size":{"field":"sizes","units":"screen"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"64834","type":"Cross"},{"attributes":{"toolbar":{"id":"64851"},"toolbar_location":"above"},"id":"64852","type":"ToolbarBox"},{"attributes":{"below":[{"id":"64807"}],"center":[{"id":"64810"},{"id":"64814"}],"left":[{"id":"64811"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"64836"}],"title":{"id":"64838"},"toolbar":{"id":"64825"},"toolbar_location":null,"x_range":{"id":"64799"},"x_scale":{"id":"64803"},"y_range":{"id":"64801"},"y_scale":{"id":"64805"}},"id":"64798","subtype":"Figure","type":"Plot"},{"attributes":{"toolbars":[{"id":"64825"}],"tools":[{"id":"64815"},{"id":"64816"},{"id":"64817"},{"id":"64818"},{"id":"64819"},{"id":"64820"},{"id":"64821"},{"id":"64822"}]},"id":"64851","type":"ProxyToolbar"},{"attributes":{},"id":"64803","type":"LinearScale"},{"attributes":{},"id":"64842","type":"BasicTickFormatter"},{"attributes":{"axis":{"id":"64811"},"dimension":1,"ticker":null},"id":"64814","type":"Grid"}],"root_ids":["64853"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"d8d4a080-8efe-4265-9275-75f193e5d547","root_ids":["64853"],"roots":{"64853":"65caf257-1d4c-4942-9275-5ab895550272"}}];
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