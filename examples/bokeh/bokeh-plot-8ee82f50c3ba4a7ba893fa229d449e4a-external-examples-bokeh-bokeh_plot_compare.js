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
    
      
      
    
      var element = document.getElementById("212c7d91-272a-4609-9245-b5ccb77f2b39");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '212c7d91-272a-4609-9245-b5ccb77f2b39' but no matching script tag was found.")
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
                    
                  var docs_json = '{"89523b87-78ff-452e-b65a-58369a381003":{"roots":{"references":[{"attributes":{"overlay":{"id":"65593"}},"id":"65588","type":"LassoSelectTool"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65616","type":"Circle"},{"attributes":{},"id":"65637","type":"UnionRenderers"},{"attributes":{},"id":"65645","type":"UnionRenderers"},{"attributes":{},"id":"65574","type":"LinearScale"},{"attributes":{},"id":"65577","type":"BasicTicker"},{"attributes":{"text":""},"id":"65631","type":"Title"},{"attributes":{"toolbars":[{"id":"65594"}],"tools":[{"id":"65584"},{"id":"65585"},{"id":"65586"},{"id":"65587"},{"id":"65588"},{"id":"65589"},{"id":"65590"},{"id":"65591"}]},"id":"65650","type":"ProxyToolbar"},{"attributes":{},"id":"65585","type":"PanTool"},{"attributes":{},"id":"65638","type":"Selection"},{"attributes":{},"id":"65590","type":"SaveTool"},{"attributes":{"callback":null},"id":"65591","type":"HoverTool"},{"attributes":{"data_source":{"id":"65615"},"glyph":{"id":"65616"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65617"},"selection_glyph":null,"view":{"id":"65619"}},"id":"65618","type":"GlyphRenderer"},{"attributes":{"data":{"xs":[[-32.052286212415325,-29.322294424364305],[-32.23721121836336,-29.38353713483674]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"65642"},"selection_policy":{"id":"65643"}},"id":"65620","type":"ColumnDataSource"},{"attributes":{"data":{"x":[-30.81037417660005],"y":[-0.75]},"selected":{"id":"65636"},"selection_policy":{"id":"65637"}},"id":"65605","type":"ColumnDataSource"},{"attributes":{"source":{"id":"65625"}},"id":"65629","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"grey"},"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65607","type":"Triangle"},{"attributes":{"toolbar":{"id":"65650"},"toolbar_location":"above"},"id":"65651","type":"ToolbarBox"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"black"},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65627","type":"Circle"},{"attributes":{"axis":{"id":"65580"},"dimension":1,"ticker":null},"id":"65583","type":"Grid"},{"attributes":{},"id":"65644","type":"Selection"},{"attributes":{"data":{"xs":[[-30.896420573800537,-30.724327779399562]],"ys":[[-0.75,-0.75]]},"selected":{"id":"65638"},"selection_policy":{"id":"65639"}},"id":"65610","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65622","type":"MultiLine"},{"attributes":{"source":{"id":"65620"}},"id":"65624","type":"CDSView"},{"attributes":{},"id":"65641","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"65605"},"glyph":{"id":"65606"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65607"},"selection_glyph":null,"view":{"id":"65609"}},"id":"65608","type":"GlyphRenderer"},{"attributes":{},"id":"65635","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"65651"},{"id":"65649"}]},"id":"65652","type":"Column"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65626","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":null},"line_alpha":{"value":0.1},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65617","type":"Circle"},{"attributes":{"source":{"id":"65605"}},"id":"65609","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"65584"},{"id":"65585"},{"id":"65586"},{"id":"65587"},{"id":"65588"},{"id":"65589"},{"id":"65590"},{"id":"65591"}]},"id":"65594","type":"Toolbar"},{"attributes":{"below":[{"id":"65576"}],"center":[{"id":"65579"},{"id":"65583"}],"left":[{"id":"65580"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"65608"},{"id":"65613"},{"id":"65618"},{"id":"65623"},{"id":"65628"},{"id":"65630"}],"title":{"id":"65631"},"toolbar":{"id":"65594"},"toolbar_location":null,"x_range":{"id":"65568"},"x_scale":{"id":"65572"},"y_range":{"id":"65570"},"y_scale":{"id":"65574"}},"id":"65567","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"65568","type":"DataRange1d"},{"attributes":{"overlay":{"id":"65592"}},"id":"65586","type":"BoxZoomTool"},{"attributes":{},"id":"65640","type":"Selection"},{"attributes":{},"id":"65584","type":"ResetTool"},{"attributes":{"data_source":{"id":"65610"},"glyph":{"id":"65611"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65612"},"selection_glyph":null,"view":{"id":"65614"}},"id":"65613","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"65593","type":"PolyAnnotation"},{"attributes":{"data_source":{"id":"65620"},"glyph":{"id":"65621"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65622"},"selection_glyph":null,"view":{"id":"65624"}},"id":"65623","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"65592","type":"BoxAnnotation"},{"attributes":{"data":{"x":[-30.687290318389813,-30.81037417660005],"y":[0.0,-1.0]},"selected":{"id":"65640"},"selection_policy":{"id":"65641"}},"id":"65615","type":"ColumnDataSource"},{"attributes":{},"id":"65642","type":"Selection"},{"attributes":{"axis":{"id":"65576"},"ticker":null},"id":"65579","type":"Grid"},{"attributes":{"children":[[{"id":"65567"},0,0]]},"id":"65649","type":"GridBox"},{"attributes":{},"id":"65587","type":"WheelZoomTool"},{"attributes":{"axis_label":"Log","formatter":{"id":"65634"},"ticker":{"id":"65577"}},"id":"65576","type":"LinearAxis"},{"attributes":{"formatter":{"id":"65635"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"65603"}},"id":"65580","type":"LinearAxis"},{"attributes":{},"id":"65634","type":"BasicTickFormatter"},{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65621","type":"MultiLine"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"65603","type":"FixedTicker"},{"attributes":{},"id":"65589","type":"UndoTool"},{"attributes":{},"id":"65636","type":"Selection"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65612","type":"MultiLine"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"65611","type":"MultiLine"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"65606","type":"Triangle"},{"attributes":{"data_source":{"id":"65625"},"glyph":{"id":"65626"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"65627"},"selection_glyph":null,"view":{"id":"65629"}},"id":"65628","type":"GlyphRenderer"},{"attributes":{"dimension":"height","line_color":"grey","line_dash":[6],"line_width":1.7677669529663689,"location":-30.687290318389813},"id":"65630","type":"Span"},{"attributes":{"source":{"id":"65615"}},"id":"65619","type":"CDSView"},{"attributes":{},"id":"65639","type":"UnionRenderers"},{"attributes":{"end":0.5,"start":-1.5},"id":"65570","type":"DataRange1d"},{"attributes":{"data":{"x":[-29.8454020018613,-29.85632121495365],"y":[0.0,-1.0]},"selected":{"id":"65644"},"selection_policy":{"id":"65645"}},"id":"65625","type":"ColumnDataSource"},{"attributes":{"source":{"id":"65610"}},"id":"65614","type":"CDSView"},{"attributes":{},"id":"65643","type":"UnionRenderers"},{"attributes":{},"id":"65572","type":"LinearScale"}],"root_ids":["65652"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"89523b87-78ff-452e-b65a-58369a381003","root_ids":["65652"],"roots":{"65652":"212c7d91-272a-4609-9245-b5ccb77f2b39"}}];
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