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
    
      
      
    
      var element = document.getElementById("003aa9b4-f2e0-4851-9d50-e61e12d22b21");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '003aa9b4-f2e0-4851-9d50-e61e12d22b21' but no matching script tag was found.")
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
                    
                  var docs_json = '{"e2208aec-493c-43d4-a84c-000a067082bd":{"roots":{"references":[{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68481","type":"Line"},{"attributes":{},"id":"68518","type":"Selection"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68475","type":"Circle"},{"attributes":{"children":[[{"id":"68338"},0,0]]},"id":"68555","type":"GridBox"},{"attributes":{},"id":"68512","type":"Selection"},{"attributes":{"data_source":{"id":"68489"},"glyph":{"id":"68490"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68491"},"selection_glyph":null,"view":{"id":"68493"}},"id":"68492","type":"GlyphRenderer"},{"attributes":{},"id":"68511","type":"UnionRenderers"},{"attributes":{},"id":"68523","type":"UnionRenderers"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68375","type":"Line"},{"attributes":{},"id":"68528","type":"Selection"},{"attributes":{},"id":"68513","type":"UnionRenderers"},{"attributes":{"data":{"x":[1.9790083397469873,5.455951625836456],"y":[2.55,2.55]},"selected":{"id":"68548"},"selection_policy":{"id":"68549"}},"id":"68484","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68474"}},"id":"68478","type":"CDSView"},{"attributes":{},"id":"68543","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68374"},"glyph":{"id":"68375"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68376"},"selection_glyph":null,"view":{"id":"68378"}},"id":"68377","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68490","type":"Circle"},{"attributes":{},"id":"68531","type":"UnionRenderers"},{"attributes":{"children":[{"id":"68557"},{"id":"68555"}]},"id":"68558","type":"Column"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68480","type":"Line"},{"attributes":{},"id":"68538","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.181352887007439},"y":{"value":2.25}},"id":"68476","type":"Circle"},{"attributes":{"formatter":{"id":"68503"},"major_label_overrides":{"0.44999999999999996":"Non Centered: mu","2.0999999999999996":"Centered: mu"},"ticker":{"id":"68498"}},"id":"68351","type":"LinearAxis"},{"attributes":{},"id":"68524","type":"Selection"},{"attributes":{"source":{"id":"68464"}},"id":"68468","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68381","type":"Line"},{"attributes":{},"id":"68507","type":"UnionRenderers"},{"attributes":{},"id":"68520","type":"Selection"},{"attributes":{},"id":"68535","type":"UnionRenderers"},{"attributes":{"source":{"id":"68374"}},"id":"68378","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68380","type":"Line"},{"attributes":{},"id":"68522","type":"Selection"},{"attributes":{"source":{"id":"68379"}},"id":"68383","type":"CDSView"},{"attributes":{},"id":"68536","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68471","type":"Line"},{"attributes":{},"id":"68534","type":"Selection"},{"attributes":{"data_source":{"id":"68454"},"glyph":{"id":"68455"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68456"},"selection_glyph":null,"view":{"id":"68458"}},"id":"68457","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68484"}},"id":"68488","type":"CDSView"},{"attributes":{"overlay":{"id":"68363"}},"id":"68357","type":"BoxZoomTool"},{"attributes":{},"id":"68527","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68474"},"glyph":{"id":"68475"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68476"},"selection_glyph":null,"view":{"id":"68478"}},"id":"68477","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"68351"},"dimension":1,"grid_line_color":null,"ticker":null},"id":"68354","type":"Grid"},{"attributes":{},"id":"68540","type":"Selection"},{"attributes":{"data_source":{"id":"68379"},"glyph":{"id":"68380"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68381"},"selection_glyph":null,"view":{"id":"68383"}},"id":"68382","type":"GlyphRenderer"},{"attributes":{"data":{"x":[1.9127415870254314,7.0411499662839026],"y":[2.25,2.25]},"selected":{"id":"68542"},"selection_policy":{"id":"68543"}},"id":"68469","type":"ColumnDataSource"},{"attributes":{},"id":"68360","type":"UndoTool"},{"attributes":{},"id":"68550","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68376","type":"Line"},{"attributes":{},"id":"68509","type":"UnionRenderers"},{"attributes":{},"id":"68533","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68469"},"glyph":{"id":"68470"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68471"},"selection_glyph":null,"view":{"id":"68473"}},"id":"68472","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"68347"},"ticker":null},"id":"68350","type":"Grid"},{"attributes":{"data_source":{"id":"68484"},"glyph":{"id":"68485"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68486"},"selection_glyph":null,"view":{"id":"68488"}},"id":"68487","type":"GlyphRenderer"},{"attributes":{},"id":"68532","type":"Selection"},{"attributes":{"data":{},"selected":{"id":"68550"},"selection_policy":{"id":"68551"}},"id":"68489","type":"ColumnDataSource"},{"attributes":{},"id":"68517","type":"UnionRenderers"},{"attributes":{},"id":"68356","type":"PanTool"},{"attributes":{"data":{},"selected":{"id":"68544"},"selection_policy":{"id":"68545"}},"id":"68474","type":"ColumnDataSource"},{"attributes":{},"id":"68526","type":"Selection"},{"attributes":{},"id":"68539","type":"UnionRenderers"},{"attributes":{},"id":"68541","type":"UnionRenderers"},{"attributes":{"toolbars":[{"id":"68365"}],"tools":[{"id":"68355"},{"id":"68356"},{"id":"68357"},{"id":"68358"},{"id":"68359"},{"id":"68360"},{"id":"68361"},{"id":"68362"}]},"id":"68556","type":"ProxyToolbar"},{"attributes":{},"id":"68355","type":"ResetTool"},{"attributes":{},"id":"68504","type":"Selection"},{"attributes":{},"id":"68508","type":"Selection"},{"attributes":{},"id":"68530","type":"Selection"},{"attributes":{},"id":"68516","type":"Selection"},{"attributes":{"source":{"id":"68469"}},"id":"68473","type":"CDSView"},{"attributes":{},"id":"68525","type":"UnionRenderers"},{"attributes":{},"id":"68537","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.4162688471038556},"y":{"value":2.55}},"id":"68491","type":"Circle"},{"attributes":{},"id":"68542","type":"Selection"},{"attributes":{},"id":"68358","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"68347"}],"center":[{"id":"68350"},{"id":"68354"}],"left":[{"id":"68351"}],"outline_line_color":null,"output_backend":"webgl","plot_height":435,"plot_width":360,"renderers":[{"id":"68377"},{"id":"68382"},{"id":"68387"},{"id":"68392"},{"id":"68397"},{"id":"68402"},{"id":"68407"},{"id":"68412"},{"id":"68417"},{"id":"68422"},{"id":"68427"},{"id":"68432"},{"id":"68437"},{"id":"68442"},{"id":"68447"},{"id":"68452"},{"id":"68457"},{"id":"68462"},{"id":"68467"},{"id":"68472"},{"id":"68477"},{"id":"68482"},{"id":"68487"},{"id":"68492"}],"title":{"id":"68494"},"toolbar":{"id":"68365"},"toolbar_location":null,"x_range":{"id":"68496"},"x_scale":{"id":"68343"},"y_range":{"id":"68497"},"y_scale":{"id":"68345"}},"id":"68338","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"68479"}},"id":"68483","type":"CDSView"},{"attributes":{"callback":null},"id":"68362","type":"HoverTool"},{"attributes":{"overlay":{"id":"68364"}},"id":"68359","type":"LassoSelectTool"},{"attributes":{},"id":"68361","type":"SaveTool"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68485","type":"Line"},{"attributes":{},"id":"68503","type":"BasicTickFormatter"},{"attributes":{},"id":"68519","type":"UnionRenderers"},{"attributes":{},"id":"68521","type":"UnionRenderers"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68470","type":"Line"},{"attributes":{},"id":"68514","type":"Selection"},{"attributes":{},"id":"68510","type":"Selection"},{"attributes":{"data":{"x":[2.454317217804662,6.859709821773684],"y":[0,0]},"selected":{"id":"68506"},"selection_policy":{"id":"68507"}},"id":"68379","type":"ColumnDataSource"},{"attributes":{},"id":"68515","type":"UnionRenderers"},{"attributes":{"text":"94.0% HDI"},"id":"68494","type":"Title"},{"attributes":{"source":{"id":"68489"}},"id":"68493","type":"CDSView"},{"attributes":{},"id":"68348","type":"BasicTicker"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68486","type":"Line"},{"attributes":{},"id":"68529","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68466","type":"Line"},{"attributes":{"data":{"x":[-2.13476994033137,10.008689721107494],"y":[0.3,0.3]},"selected":{"id":"68510"},"selection_policy":{"id":"68511"}},"id":"68389","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68460","type":"Circle"},{"attributes":{"data_source":{"id":"68439"},"glyph":{"id":"68440"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68441"},"selection_glyph":null,"view":{"id":"68443"}},"id":"68442","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68431","type":"Circle"},{"attributes":{"data_source":{"id":"68384"},"glyph":{"id":"68385"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68386"},"selection_glyph":null,"view":{"id":"68388"}},"id":"68387","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68421","type":"Line"},{"attributes":{},"id":"68544","type":"Selection"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68410","type":"Line"},{"attributes":{},"id":"68549","type":"UnionRenderers"},{"attributes":{"data":{},"selected":{"id":"68520"},"selection_policy":{"id":"68521"}},"id":"68414","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68400","type":"Circle"},{"attributes":{"data":{},"selected":{"id":"68538"},"selection_policy":{"id":"68539"}},"id":"68459","type":"ColumnDataSource"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68390","type":"Line"},{"attributes":{"data":{"x":[-2.2641273152868076,10.475301593619335],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68522"},"selection_policy":{"id":"68523"}},"id":"68419","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68389"},"glyph":{"id":"68390"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68391"},"selection_glyph":null,"view":{"id":"68393"}},"id":"68392","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68399"},"glyph":{"id":"68400"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68401"},"selection_glyph":null,"view":{"id":"68403"}},"id":"68402","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68415","type":"Circle"},{"attributes":{"data":{"x":[2.1521098502407368,6.9643589964055215],"y":[0.6,0.6]},"selected":{"id":"68518"},"selection_policy":{"id":"68519"}},"id":"68409","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68429"}},"id":"68433","type":"CDSView"},{"attributes":{"source":{"id":"68444"}},"id":"68448","type":"CDSView"},{"attributes":{"data_source":{"id":"68429"},"glyph":{"id":"68430"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68431"},"selection_glyph":null,"view":{"id":"68433"}},"id":"68432","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68394"}},"id":"68398","type":"CDSView"},{"attributes":{"data":{},"selected":{"id":"68514"},"selection_policy":{"id":"68515"}},"id":"68399","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68411","type":"Line"},{"attributes":{"data_source":{"id":"68449"},"glyph":{"id":"68450"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68451"},"selection_glyph":null,"view":{"id":"68453"}},"id":"68452","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68456","type":"Line"},{"attributes":{"source":{"id":"68434"}},"id":"68438","type":"CDSView"},{"attributes":{"data_source":{"id":"68414"},"glyph":{"id":"68415"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68416"},"selection_glyph":null,"view":{"id":"68418"}},"id":"68417","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"lightgrey","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"xs_units":"screen","ys_units":"screen"},"id":"68364","type":"PolyAnnotation"},{"attributes":{"data":{"x":[-2.358040118461496,10.910290467635015],"y":[1.95,1.95]},"selected":{"id":"68534"},"selection_policy":{"id":"68535"}},"id":"68449","type":"ColumnDataSource"},{"attributes":{"data":{"x":[2.393576367885318,6.880909766712211],"y":[1.95,1.95]},"selected":{"id":"68536"},"selection_policy":{"id":"68537"}},"id":"68454","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68426","type":"Line"},{"attributes":{"source":{"id":"68454"}},"id":"68458","type":"CDSView"},{"attributes":{"source":{"id":"68424"}},"id":"68428","type":"CDSView"},{"attributes":{"data_source":{"id":"68394"},"glyph":{"id":"68395"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68396"},"selection_glyph":null,"view":{"id":"68398"}},"id":"68397","type":"GlyphRenderer"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68436","type":"Line"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.74129666559688},"y":{"value":1.95}},"id":"68461","type":"Circle"},{"attributes":{},"id":"68547","type":"UnionRenderers"},{"attributes":{"bounds":"auto","end":3.4499999999999997,"min_interval":2,"start":-0.8999999999999999},"id":"68497","type":"DataRange1d"},{"attributes":{"bounds":"auto","min_interval":1},"id":"68496","type":"DataRange1d"},{"attributes":{},"id":"68345","type":"LinearScale"},{"attributes":{"data_source":{"id":"68479"},"glyph":{"id":"68480"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68481"},"selection_glyph":null,"view":{"id":"68483"}},"id":"68482","type":"GlyphRenderer"},{"attributes":{"data":{"x":[2.2808674873161356,6.6262125124574265],"y":[0.3,0.3]},"selected":{"id":"68512"},"selection_policy":{"id":"68513"}},"id":"68394","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"68434"},"glyph":{"id":"68435"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68436"},"selection_glyph":null,"view":{"id":"68438"}},"id":"68437","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.59253463805363},"y":{"value":0.6}},"id":"68416","type":"Circle"},{"attributes":{},"id":"68546","type":"Selection"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.3706630373472235},"y":{"value":0.8999999999999999}},"id":"68430","type":"Circle"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68405","type":"Line"},{"attributes":{"data_source":{"id":"68444"},"glyph":{"id":"68445"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68446"},"selection_glyph":null,"view":{"id":"68448"}},"id":"68447","type":"GlyphRenderer"},{"attributes":{"source":{"id":"68449"}},"id":"68453","type":"CDSView"},{"attributes":{},"id":"68343","type":"LinearScale"},{"attributes":{"source":{"id":"68414"}},"id":"68418","type":"CDSView"},{"attributes":{"data":{"x":[-2.061896746944455,11.515205993744095],"y":[2.25,2.25]},"selected":{"id":"68540"},"selection_policy":{"id":"68541"}},"id":"68464","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68384"}},"id":"68388","type":"CDSView"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68440","type":"Line"},{"attributes":{"data":{"x":[-1.9958943490877263,9.311550558002505],"y":[1.65,1.65]},"selected":{"id":"68528"},"selection_policy":{"id":"68529"}},"id":"68434","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#fa7c17"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68385","type":"Circle"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68451","type":"Line"},{"attributes":{},"id":"68551","type":"UnionRenderers"},{"attributes":{},"id":"68505","type":"UnionRenderers"},{"attributes":{},"id":"68506","type":"Selection"},{"attributes":{"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68455","type":"Line"},{"attributes":{"data":{"x":[-1.4753067334040253,11.208804111875878],"y":[0.6,0.6]},"selected":{"id":"68516"},"selection_policy":{"id":"68517"}},"id":"68404","type":"ColumnDataSource"},{"attributes":{"toolbar":{"id":"68556"},"toolbar_location":"above"},"id":"68557","type":"ToolbarBox"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68395","type":"Line"},{"attributes":{"data_source":{"id":"68459"},"glyph":{"id":"68460"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68461"},"selection_glyph":null,"view":{"id":"68463"}},"id":"68462","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-1.0798320889339172,10.200853218312133],"y":[0,0]},"selected":{"id":"68504"},"selection_policy":{"id":"68505"}},"id":"68374","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68399"}},"id":"68403","type":"CDSView"},{"attributes":{"data_source":{"id":"68464"},"glyph":{"id":"68465"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68466"},"selection_glyph":null,"view":{"id":"68468"}},"id":"68467","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.663971371122512},"y":{"value":0}},"id":"68386","type":"Circle"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68450","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68532"},"selection_policy":{"id":"68533"}},"id":"68444","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68459"}},"id":"68463","type":"CDSView"},{"attributes":{},"id":"68502","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68446","type":"Circle"},{"attributes":{"formatter":{"id":"68502"},"ticker":{"id":"68348"}},"id":"68347","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":4.409527442378456},"y":{"value":0.3}},"id":"68401","type":"Circle"},{"attributes":{"data":{"x":[2.2921199846409115,6.479187946875487],"y":[0.8999999999999999,0.8999999999999999]},"selected":{"id":"68524"},"selection_policy":{"id":"68525"}},"id":"68424","type":"ColumnDataSource"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68435","type":"Line"},{"attributes":{"data":{},"selected":{"id":"68508"},"selection_policy":{"id":"68509"}},"id":"68384","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68404"}},"id":"68408","type":"CDSView"},{"attributes":{"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68425","type":"Line"},{"attributes":{},"id":"68545","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"68419"},"glyph":{"id":"68420"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68421"},"selection_glyph":null,"view":{"id":"68423"}},"id":"68422","type":"GlyphRenderer"},{"attributes":{"data":{"x":[-0.7842313478998125,9.985046696913068],"y":[2.55,2.55]},"selected":{"id":"68546"},"selection_policy":{"id":"68547"}},"id":"68479","type":"ColumnDataSource"},{"attributes":{"source":{"id":"68439"}},"id":"68443","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68391","type":"Line"},{"attributes":{"source":{"id":"68419"}},"id":"68423","type":"CDSView"},{"attributes":{"source":{"id":"68389"}},"id":"68393","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68406","type":"Line"},{"attributes":{"data_source":{"id":"68404"},"glyph":{"id":"68405"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68406"},"selection_glyph":null,"view":{"id":"68408"}},"id":"68407","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"68424"},"glyph":{"id":"68425"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68426"},"selection_glyph":null,"view":{"id":"68428"}},"id":"68427","type":"GlyphRenderer"},{"attributes":{"line_color":"#fa7c17","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68420","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#2a2eec","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68441","type":"Line"},{"attributes":{"line_color":"#2a2eec","line_width":1.5,"x":{"field":"x"},"y":{"field":"y"}},"id":"68465","type":"Line"},{"attributes":{"source":{"id":"68409"}},"id":"68413","type":"CDSView"},{"attributes":{"data":{"x":[0.9649316231388204,5.949680273009057],"y":[1.65,1.65]},"selected":{"id":"68530"},"selection_policy":{"id":"68531"}},"id":"68439","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"68355"},{"id":"68356"},{"id":"68357"},{"id":"68358"},{"id":"68359"},{"id":"68360"},{"id":"68361"},{"id":"68362"}]},"id":"68365","type":"Toolbar"},{"attributes":{"data_source":{"id":"68409"},"glyph":{"id":"68410"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"68411"},"selection_glyph":null,"view":{"id":"68413"}},"id":"68412","type":"GlyphRenderer"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":4.5},"x":{"value":3.374380781729923},"y":{"value":1.65}},"id":"68445","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"68363","type":"BoxAnnotation"},{"attributes":{"data":{},"selected":{"id":"68526"},"selection_policy":{"id":"68527"}},"id":"68429","type":"ColumnDataSource"},{"attributes":{},"id":"68548","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#fa7c17","line_width":3.0,"x":{"field":"x"},"y":{"field":"y"}},"id":"68396","type":"Line"},{"attributes":{"ticks":[0.44999999999999996,2.0999999999999996]},"id":"68498","type":"FixedTicker"}],"root_ids":["68558"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"e2208aec-493c-43d4-a84c-000a067082bd","root_ids":["68558"],"roots":{"68558":"003aa9b4-f2e0-4851-9d50-e61e12d22b21"}}];
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