/* STYLES */
Carlyle.Styles = {
  ruleText: function(rule) {
    if (typeof rule == "string") {
      rule = this[rule];
    }
    if (!rule) { return ""; }

    var parts = [];
    for (var declaration in rule) {
      parts.push(declaration + ": " + rule[declaration] + ";")
    }
    return parts.join(" ");
  },

  container: {
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "-webkit-user-select": "none",
    "-webkit-text-size-adjust": "none"
  },

  page: {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "bottom": "3px",
    "right": "5px",
    "overflow": "hidden",
    "background": "#FFF",
    "cursor": "pointer",
    "-webkit-box-shadow": "2px 0 2px #999"
  },

  overPage: {
    "opacity": "0.01",
    "-webkit-transform-style": "preserve-3d"
  },

  content: {
    "position": "absolute",
    "top": "0",
    "bottom": "0",
    "min-width": "200%",
    "-webkit-text-size-adjust": "none",
    "-webkit-column-gap": "0",
    "-webkit-column-fill": "auto"
  },

  spinner: {
    "width": "48px",
    "height": "48px",
    "position": "relative",
    "display": "block",
    "margin": "auto"
  },

  Controls: {
    // A separate namespace for optional control styles, populated by those
    // optional scripts.
  }
}
