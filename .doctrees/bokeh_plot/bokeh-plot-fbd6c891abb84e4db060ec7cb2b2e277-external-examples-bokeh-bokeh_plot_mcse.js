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
    
      
      
    
      var element = document.getElementById("c2d26046-9346-428f-a1b2-d0c504eeebf7");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c2d26046-9346-428f-a1b2-d0c504eeebf7' but no matching script tag was found.")
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
                    
                  var docs_json = '{"379ed1ba-54c8-45c3-aa30-aa03fedaeca3":{"roots":{"references":[{"attributes":{},"id":"85803","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85745","type":"PolyAnnotation"},{"attributes":{},"id":"85790","type":"Selection"},{"attributes":{},"id":"85706","type":"SaveTool"},{"attributes":{},"id":"85791","type":"UnionRenderers"},{"attributes":{"source":{"id":"85769"}},"id":"85773","type":"CDSView"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"85709","type":"PolyAnnotation"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85787"},"ticker":{"id":"85697"}},"id":"85696","type":"LinearAxis"},{"attributes":{"data_source":{"id":"85755"},"glyph":{"id":"85756"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85757"},"selection_glyph":null,"view":{"id":"85759"}},"id":"85758","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"85707","type":"HoverTool"},{"attributes":{"children":[{"id":"85809"},{"id":"85807"}]},"id":"85810","type":"Column"},{"attributes":{"toolbars":[{"id":"85710"},{"id":"85746"}],"tools":[{"id":"85700"},{"id":"85701"},{"id":"85702"},{"id":"85703"},{"id":"85704"},{"id":"85705"},{"id":"85706"},{"id":"85707"},{"id":"85736"},{"id":"85737"},{"id":"85738"},{"id":"85739"},{"id":"85740"},{"id":"85741"},{"id":"85742"},{"id":"85743"}]},"id":"85808","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"85692"},"ticker":null},"id":"85695","type":"Grid"},{"attributes":{"text":"mu"},"id":"85781","type":"Title"},{"attributes":{"toolbar":{"id":"85808"},"toolbar_location":"above"},"id":"85809","type":"ToolbarBox"},{"attributes":{},"id":"85697","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85756","type":"Circle"},{"attributes":{},"id":"85797","type":"BasicTickFormatter"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85797"},"ticker":{"id":"85729"}},"id":"85728","type":"LinearAxis"},{"attributes":{},"id":"85705","type":"UndoTool"},{"attributes":{"end":1,"start":-0.05},"id":"85722","type":"DataRange1d"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"85799"},"ticker":{"id":"85733"}},"id":"85732","type":"LinearAxis"},{"attributes":{},"id":"85785","type":"BasicTickFormatter"},{"attributes":{},"id":"85724","type":"LinearScale"},{"attributes":{},"id":"85726","type":"LinearScale"},{"attributes":{"callback":null},"id":"85743","type":"HoverTool"},{"attributes":{},"id":"85729","type":"BasicTicker"},{"attributes":{"axis":{"id":"85728"},"ticker":null},"id":"85731","type":"Grid"},{"attributes":{"axis":{"id":"85732"},"dimension":1,"ticker":null},"id":"85735","type":"Grid"},{"attributes":{},"id":"85733","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85757","type":"Circle"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.1782444431478369},"id":"85761","type":"Span"},{"attributes":{"overlay":{"id":"85744"}},"id":"85738","type":"BoxZoomTool"},{"attributes":{},"id":"85737","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85700"},{"id":"85701"},{"id":"85702"},{"id":"85703"},{"id":"85704"},{"id":"85705"},{"id":"85706"},{"id":"85707"}]},"id":"85710","type":"Toolbar"},{"attributes":{},"id":"85736","type":"ResetTool"},{"attributes":{},"id":"85742","type":"SaveTool"},{"attributes":{},"id":"85684","type":"DataRange1d"},{"attributes":{},"id":"85701","type":"PanTool"},{"attributes":{},"id":"85739","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"85745"}},"id":"85740","type":"LassoSelectTool"},{"attributes":{},"id":"85741","type":"UndoTool"},{"attributes":{"below":[{"id":"85692"}],"center":[{"id":"85695"},{"id":"85699"}],"left":[{"id":"85696"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85758"},{"id":"85760"},{"id":"85761"},{"id":"85762"},{"id":"85765"}],"title":{"id":"85767"},"toolbar":{"id":"85710"},"toolbar_location":null,"x_range":{"id":"85684"},"x_scale":{"id":"85688"},"y_range":{"id":"85686"},"y_scale":{"id":"85690"}},"id":"85683","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"85736"},{"id":"85737"},{"id":"85738"},{"id":"85739"},{"id":"85740"},{"id":"85741"},{"id":"85742"},{"id":"85743"}]},"id":"85746","type":"Toolbar"},{"attributes":{},"id":"85700","type":"ResetTool"},{"attributes":{},"id":"85688","type":"LinearScale"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85770","type":"Circle"},{"attributes":{"overlay":{"id":"85708"}},"id":"85702","type":"BoxZoomTool"},{"attributes":{"data_source":{"id":"85764"},"glyph":{"id":"85763"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85766"}},"id":"85765","type":"GlyphRenderer"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD/upazjteTNP/DqXfy8Lcs/HHCIRHVOzT9orzckCyTOP6y8CkfbP8w/iNx/9NF5yz+IfM+LFJ/NPygi8KloJ8w/oK0q3zNVzD/YcLH58jHPP6hWLqhoMNQ/IGaMl5nu0j8AebTCVJLRP+D0hUiIM80/uNpKBpu90z/A00Fq0J3TP2iCFjW8ldY/kLBgWUSo1j8QCPgZgPnXPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85788"},"selection_policy":{"id":"85789"}},"id":"85755","type":"ColumnDataSource"},{"attributes":{"source":{"id":"85764"}},"id":"85766","type":"CDSView"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2515582690238702},"id":"85760","type":"Span"},{"attributes":{},"id":"85703","type":"WheelZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"85785"},"ticker":{"id":"85693"}},"id":"85692","type":"LinearAxis"},{"attributes":{"text":"tau"},"id":"85767","type":"Title"},{"attributes":{"line_alpha":0.5,"line_width":1.5,"location":0.2148430013731262},"id":"85774","type":"Span"},{"attributes":{},"id":"85799","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"85683"},0,0],[{"id":"85719"},0,1]]},"id":"85807","type":"GridBox"},{"attributes":{"overlay":{"id":"85709"}},"id":"85704","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85762","type":"Span"},{"attributes":{},"id":"85720","type":"DataRange1d"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85763","type":"Dash"},{"attributes":{"below":[{"id":"85728"}],"center":[{"id":"85731"},{"id":"85735"}],"left":[{"id":"85732"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"85772"},{"id":"85774"},{"id":"85775"},{"id":"85776"},{"id":"85779"}],"title":{"id":"85781"},"toolbar":{"id":"85746"},"toolbar_location":null,"x_range":{"id":"85720"},"x_scale":{"id":"85724"},"y_range":{"id":"85722"},"y_scale":{"id":"85726"}},"id":"85719","subtype":"Figure","type":"Plot"},{"attributes":{"axis":{"id":"85696"},"dimension":1,"ticker":null},"id":"85699","type":"Grid"},{"attributes":{"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85790"},"selection_policy":{"id":"85791"}},"id":"85764","type":"ColumnDataSource"},{"attributes":{},"id":"85693","type":"BasicTicker"},{"attributes":{"source":{"id":"85755"}},"id":"85759","type":"CDSView"},{"attributes":{},"id":"85787","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"85778"}},"id":"85780","type":"CDSView"},{"attributes":{"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","order":"little","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[43]}},"selected":{"id":"85802"},"selection_policy":{"id":"85803"}},"id":"85778","type":"ColumnDataSource"},{"attributes":{},"id":"85800","type":"Selection"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"85777","type":"Dash"},{"attributes":{"line_alpha":0.5,"line_width":0.75,"location":0.15209716424958658},"id":"85775","type":"Span"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85744","type":"BoxAnnotation"},{"attributes":{},"id":"85801","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"85769"},"glyph":{"id":"85770"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"85771"},"selection_glyph":null,"view":{"id":"85773"}},"id":"85772","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"85778"},"glyph":{"id":"85777"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"85780"}},"id":"85779","type":"GlyphRenderer"},{"attributes":{},"id":"85690","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"bcJe+Pxh3D88Eu5SUq3NPyL+eQAns8s/mzeOVbYJ1z+YvNPsmzTWP87j+UyletE/sIr1s8Bnzz8YN/msnr7PP8gPs0h4ec8/RNGUEkZ90z8g12riYrDUP+AlTxYjYc4/UBTOvdhAzD+AFwpyJ0DOPxDSzcUXbc4/kDNyJsikyj9AY0p3Si3PP8AWdsF70MQ/4I8dAXxLyD+grhW5nZrSPw==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"85800"},"selection_policy":{"id":"85801"}},"id":"85769","type":"ColumnDataSource"},{"attributes":{},"id":"85788","type":"Selection"},{"attributes":{"line_alpha":0.7,"line_width":1.5,"location":0},"id":"85776","type":"Span"},{"attributes":{},"id":"85789","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"85771","type":"Circle"},{"attributes":{"end":1,"start":-0.05},"id":"85686","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"85708","type":"BoxAnnotation"},{"attributes":{},"id":"85802","type":"Selection"}],"root_ids":["85810"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"379ed1ba-54c8-45c3-aa30-aa03fedaeca3","root_ids":["85810"],"roots":{"85810":"c2d26046-9346-428f-a1b2-d0c504eeebf7"}}];
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