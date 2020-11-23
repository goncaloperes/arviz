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
    
      
      
    
      var element = document.getElementById("50893686-ab20-4d67-8568-9b6be9a7b88b");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '50893686-ab20-4d67-8568-9b6be9a7b88b' but no matching script tag was found.")
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
                    
                  var docs_json = '{"b597d86d-0ab3-42df-9c73-89951f908091":{"roots":{"references":[{"attributes":{"data_source":{"id":"90600"},"glyph":{"id":"90601"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90602"},"selection_glyph":null,"view":{"id":"90604"}},"id":"90603","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90635","type":"VBar"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90662"},"selection_policy":{"id":"90663"}},"id":"90606","type":"ColumnDataSource"},{"attributes":{},"id":"90548","type":"PanTool"},{"attributes":{"line_dash":[6],"location":1.4166666666666665},"id":"90611","type":"Span"},{"attributes":{"line_dash":[6],"location":2.4166666666666665},"id":"90617","type":"Span"},{"attributes":{"source":{"id":"90612"}},"id":"90616","type":"CDSView"},{"attributes":{"data_source":{"id":"90612"},"glyph":{"id":"90613"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90614"},"selection_glyph":null,"view":{"id":"90616"}},"id":"90615","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90647","type":"VBar"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90590","type":"PolyAnnotation"},{"attributes":{},"id":"90537","type":"LinearScale"},{"attributes":{},"id":"90674","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"90556","type":"PolyAnnotation"},{"attributes":{},"id":"90664","type":"Selection"},{"attributes":{},"id":"90552","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90602","type":"VBar"},{"attributes":{},"id":"90665","type":"UnionRenderers"},{"attributes":{"line_dash":[6],"location":2.480769230769231},"id":"90645","type":"Span"},{"attributes":{},"id":"90540","type":"BasicTicker"},{"attributes":{},"id":"90660","type":"Selection"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90555","type":"BoxAnnotation"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90658"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90540"}},"id":"90539","type":"LinearAxis"},{"attributes":{},"id":"90676","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90677"},"selection_policy":{"id":"90678"}},"id":"90634","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"90539"},"ticker":null},"id":"90542","type":"Grid"},{"attributes":{"text":"mu"},"id":"90654","type":"Title"},{"attributes":{},"id":"90678","type":"UnionRenderers"},{"attributes":{},"id":"90550","type":"WheelZoomTool"},{"attributes":{"source":{"id":"90606"}},"id":"90610","type":"CDSView"},{"attributes":{"line_dash":[6],"location":3.480769230769231},"id":"90651","type":"Span"},{"attributes":{},"id":"90658","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"90640"}},"id":"90644","type":"CDSView"},{"attributes":{"data_source":{"id":"90634"},"glyph":{"id":"90635"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90636"},"selection_glyph":null,"view":{"id":"90638"}},"id":"90637","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90619","type":"VBar"},{"attributes":{"text":"tau"},"id":"90626","type":"Title"},{"attributes":{"source":{"id":"90634"}},"id":"90638","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90666"},"selection_policy":{"id":"90667"}},"id":"90618","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90620","type":"VBar"},{"attributes":{"data_source":{"id":"90640"},"glyph":{"id":"90641"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90642"},"selection_glyph":null,"view":{"id":"90644"}},"id":"90643","type":"GlyphRenderer"},{"attributes":{},"id":"90682","type":"UnionRenderers"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90613","type":"VBar"},{"attributes":{},"id":"90553","type":"SaveTool"},{"attributes":{"line_dash":[6],"location":3.4166666666666665},"id":"90623","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90641","type":"VBar"},{"attributes":{},"id":"90667","type":"UnionRenderers"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90601","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90642","type":"VBar"},{"attributes":{},"id":"90679","type":"Selection"},{"attributes":{"source":{"id":"90618"}},"id":"90622","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90547"},{"id":"90548"},{"id":"90549"},{"id":"90550"},{"id":"90551"},{"id":"90552"},{"id":"90553"},{"id":"90554"}]},"id":"90557","type":"Toolbar"},{"attributes":{},"id":"90673","type":"BasicTickFormatter"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90679"},"selection_policy":{"id":"90680"}},"id":"90640","type":"ColumnDataSource"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90660"},"selection_policy":{"id":"90661"}},"id":"90600","type":"ColumnDataSource"},{"attributes":{"axis":{"id":"90543"},"dimension":1,"ticker":null},"id":"90546","type":"Grid"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90629","type":"VBar"},{"attributes":{"ticks":[0,1,2,3]},"id":"90652","type":"FixedTicker"},{"attributes":{},"id":"90661","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"90554","type":"HoverTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90636","type":"VBar"},{"attributes":{"source":{"id":"90646"}},"id":"90650","type":"CDSView"},{"attributes":{"source":{"id":"90628"}},"id":"90632","type":"CDSView"},{"attributes":{"data_source":{"id":"90628"},"glyph":{"id":"90629"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90630"},"selection_glyph":null,"view":{"id":"90632"}},"id":"90631","type":"GlyphRenderer"},{"attributes":{"line_dash":[6],"location":1.4807692307692308},"id":"90639","type":"Span"},{"attributes":{},"id":"90662","type":"Selection"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90614","type":"VBar"},{"attributes":{},"id":"90533","type":"DataRange1d"},{"attributes":{"data_source":{"id":"90618"},"glyph":{"id":"90619"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90620"},"selection_glyph":null,"view":{"id":"90622"}},"id":"90621","type":"GlyphRenderer"},{"attributes":{"below":[{"id":"90573"}],"center":[{"id":"90576"},{"id":"90580"},{"id":"90633"},{"id":"90639"},{"id":"90645"},{"id":"90651"}],"left":[{"id":"90577"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90631"},{"id":"90637"},{"id":"90643"},{"id":"90649"}],"title":{"id":"90654"},"toolbar":{"id":"90591"},"toolbar_location":null,"x_range":{"id":"90531"},"x_scale":{"id":"90569"},"y_range":{"id":"90533"},"y_scale":{"id":"90571"}},"id":"90566","subtype":"Figure","type":"Plot"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90675"},"selection_policy":{"id":"90676"}},"id":"90628","type":"ColumnDataSource"},{"attributes":{},"id":"90547","type":"ResetTool"},{"attributes":{},"id":"90535","type":"LinearScale"},{"attributes":{},"id":"90681","type":"Selection"},{"attributes":{"toolbar":{"id":"90687"},"toolbar_location":"above"},"id":"90688","type":"ToolbarBox"},{"attributes":{},"id":"90666","type":"Selection"},{"attributes":{"callback":null},"id":"90588","type":"HoverTool"},{"attributes":{},"id":"90569","type":"LinearScale"},{"attributes":{"line_dash":[6],"location":0.48076923076923067},"id":"90633","type":"Span"},{"attributes":{"children":[{"id":"90688"},{"id":"90686"}]},"id":"90689","type":"Column"},{"attributes":{},"id":"90677","type":"Selection"},{"attributes":{"source":{"id":"90600"}},"id":"90604","type":"CDSView"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90681"},"selection_policy":{"id":"90682"}},"id":"90646","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90630","type":"VBar"},{"attributes":{"toolbars":[{"id":"90557"},{"id":"90591"}],"tools":[{"id":"90547"},{"id":"90548"},{"id":"90549"},{"id":"90550"},{"id":"90551"},{"id":"90552"},{"id":"90553"},{"id":"90554"},{"id":"90581"},{"id":"90582"},{"id":"90583"},{"id":"90584"},{"id":"90585"},{"id":"90586"},{"id":"90587"},{"id":"90588"}]},"id":"90687","type":"ProxyToolbar"},{"attributes":{"axis":{"id":"90573"},"ticker":null},"id":"90576","type":"Grid"},{"attributes":{"data_source":{"id":"90646"},"glyph":{"id":"90647"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90648"},"selection_glyph":null,"view":{"id":"90650"}},"id":"90649","type":"GlyphRenderer"},{"attributes":{"ticks":[0,1,2,3]},"id":"90624","type":"FixedTicker"},{"attributes":{"data_source":{"id":"90606"},"glyph":{"id":"90607"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"90608"},"selection_glyph":null,"view":{"id":"90610"}},"id":"90609","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"90581"},{"id":"90582"},{"id":"90583"},{"id":"90584"},{"id":"90585"},{"id":"90586"},{"id":"90587"},{"id":"90588"}]},"id":"90591","type":"Toolbar"},{"attributes":{},"id":"90675","type":"Selection"},{"attributes":{"axis_label":"Rank (all chains)","formatter":{"id":"90673"},"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"ticker":{"id":"90574"}},"id":"90573","type":"LinearAxis"},{"attributes":{},"id":"90574","type":"BasicTicker"},{"attributes":{"overlay":{"id":"90590"}},"id":"90585","type":"LassoSelectTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90674"},"ticker":{"id":"90652"}},"id":"90577","type":"LinearAxis"},{"attributes":{"overlay":{"id":"90555"}},"id":"90549","type":"BoxZoomTool"},{"attributes":{},"id":"90586","type":"UndoTool"},{"attributes":{},"id":"90659","type":"BasicTickFormatter"},{"attributes":{"line_dash":[6],"location":0.41666666666666663},"id":"90605","type":"Span"},{"attributes":{},"id":"90587","type":"SaveTool"},{"attributes":{"axis_label":"Chain","formatter":{"id":"90659"},"ticker":{"id":"90624"}},"id":"90543","type":"LinearAxis"},{"attributes":{"children":[[{"id":"90530"},0,0],[{"id":"90566"},0,1]]},"id":"90686","type":"GridBox"},{"attributes":{},"id":"90584","type":"WheelZoomTool"},{"attributes":{},"id":"90680","type":"UnionRenderers"},{"attributes":{},"id":"90582","type":"PanTool"},{"attributes":{},"id":"90663","type":"UnionRenderers"},{"attributes":{},"id":"90581","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"90589","type":"BoxAnnotation"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90607","type":"VBar"},{"attributes":{"overlay":{"id":"90589"}},"id":"90583","type":"BoxZoomTool"},{"attributes":{},"id":"90571","type":"LinearScale"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"90664"},"selection_policy":{"id":"90665"}},"id":"90612","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"90539"}],"center":[{"id":"90542"},{"id":"90546"},{"id":"90605"},{"id":"90611"},{"id":"90617"},{"id":"90623"}],"left":[{"id":"90543"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"90603"},{"id":"90609"},{"id":"90615"},{"id":"90621"}],"title":{"id":"90626"},"toolbar":{"id":"90557"},"toolbar_location":null,"x_range":{"id":"90531"},"x_scale":{"id":"90535"},"y_range":{"id":"90533"},"y_scale":{"id":"90537"}},"id":"90530","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"90556"}},"id":"90551","type":"LassoSelectTool"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90608","type":"VBar"},{"attributes":{"axis":{"id":"90577"},"dimension":1,"ticker":null},"id":"90580","type":"Grid"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"90648","type":"VBar"},{"attributes":{},"id":"90531","type":"DataRange1d"}],"root_ids":["90689"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"b597d86d-0ab3-42df-9c73-89951f908091","root_ids":["90689"],"roots":{"90689":"50893686-ab20-4d67-8568-9b6be9a7b88b"}}];
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