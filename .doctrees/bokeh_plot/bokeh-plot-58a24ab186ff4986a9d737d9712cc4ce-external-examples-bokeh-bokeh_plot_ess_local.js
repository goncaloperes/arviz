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
    
      
      
    
      var element = document.getElementById("4f024dbb-fed5-4c4d-8d72-a6d5c843ba4b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4f024dbb-fed5-4c4d-8d72-a6d5c843ba4b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"403d7718-9833-4325-89eb-28c8e716f2ae":{"roots":{"references":[{"attributes":{"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"68181","type":"Span"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"68176","type":"Dash"},{"attributes":{"data_source":{"id":"68177"},"glyph":{"id":"68176"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"68179"}},"id":"68178","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68172","type":"Circle"},{"attributes":{"axis":{"id":"68144"},"ticker":null},"id":"68147","type":"Grid"},{"attributes":{"axis_label":"ESS for small intervals","formatter":{"id":"68188"},"ticker":{"id":"68149"}},"id":"68148","type":"LinearAxis"},{"attributes":{"toolbar":{"id":"68197"},"toolbar_location":"above"},"id":"68198","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"68171"},"glyph":{"id":"68172"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68173"},"selection_glyph":null,"view":{"id":"68175"}},"id":"68174","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68152"},{"id":"68153"},{"id":"68154"},{"id":"68155"},{"id":"68156"},{"id":"68157"},{"id":"68158"},{"id":"68159"}]},"id":"68162","type":"Toolbar"},{"attributes":{"source":{"id":"68171"}},"id":"68175","type":"CDSView"},{"attributes":{},"id":"68191","type":"Selection"},{"attributes":{},"id":"68152","type":"ResetTool"},{"attributes":{"axis":{"id":"68148"},"dimension":1,"ticker":null},"id":"68151","type":"Grid"},{"attributes":{},"id":"68192","type":"UnionRenderers"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"68191"},"selection_policy":{"id":"68192"}},"id":"68177","type":"ColumnDataSource"},{"attributes":{},"id":"68153","type":"PanTool"},{"attributes":{},"id":"68142","type":"LinearScale"},{"attributes":{},"id":"68158","type":"SaveTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"68180","type":"Span"},{"attributes":{"children":[{"id":"68198"},{"id":"68196"}]},"id":"68199","type":"Column"},{"attributes":{},"id":"68157","type":"UndoTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"68186"},"ticker":{"id":"68145"}},"id":"68144","type":"LinearAxis"},{"attributes":{"children":[[{"id":"68135"},0,0]]},"id":"68196","type":"GridBox"},{"attributes":{"source":{"id":"68177"}},"id":"68179","type":"CDSView"},{"attributes":{},"id":"68149","type":"BasicTicker"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"68189"},"selection_policy":{"id":"68190"}},"id":"68171","type":"ColumnDataSource"},{"attributes":{},"id":"68186","type":"BasicTickFormatter"},{"attributes":{},"id":"68145","type":"BasicTicker"},{"attributes":{},"id":"68140","type":"LinearScale"},{"attributes":{},"id":"68138","type":"DataRange1d"},{"attributes":{"overlay":{"id":"68160"}},"id":"68154","type":"BoxZoomTool"},{"attributes":{},"id":"68136","type":"DataRange1d"},{"attributes":{},"id":"68190","type":"UnionRenderers"},{"attributes":{"below":[{"id":"68144"}],"center":[{"id":"68147"},{"id":"68151"}],"left":[{"id":"68148"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"68174"},{"id":"68178"},{"id":"68180"},{"id":"68181"}],"title":{"id":"68182"},"toolbar":{"id":"68162"},"toolbar_location":null,"x_range":{"id":"68136"},"x_scale":{"id":"68140"},"y_range":{"id":"68138"},"y_scale":{"id":"68142"}},"id":"68135","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"68173","type":"Circle"},{"attributes":{},"id":"68189","type":"Selection"},{"attributes":{},"id":"68188","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"68162"}],"tools":[{"id":"68152"},{"id":"68153"},{"id":"68154"},{"id":"68155"},{"id":"68156"},{"id":"68157"},{"id":"68158"},{"id":"68159"}]},"id":"68197","type":"ProxyToolbar"},{"attributes":{"overlay":{"id":"68161"}},"id":"68156","type":"LassoSelectTool"},{"attributes":{},"id":"68155","type":"WheelZoomTool"},{"attributes":{"text":"mu"},"id":"68182","type":"Title"},{"attributes":{"callback":null},"id":"68159","type":"HoverTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68160","type":"BoxAnnotation"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68161","type":"PolyAnnotation"}],"root_ids":["68199"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"403d7718-9833-4325-89eb-28c8e716f2ae","root_ids":["68199"],"roots":{"68199":"4f024dbb-fed5-4c4d-8d72-a6d5c843ba4b"}}];
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