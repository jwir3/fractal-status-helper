'use strict';

function statusTable(fractal, type) {
  let ret = "<table>";
  ret += "<tr><th>Label</th><th>Description</th></tr>";
  let allStatuses = fractal.get(`${type}.statuses`);

  for (let handle in allStatuses) {
    let st = allStatuses[handle];
    let statusTag = '<div class="Status Status--tag">';
    statusTag += `<label class="Status-label" style="background-color: ${st.color}; border-color: ${st.color};">${st.label}</label>`;
    statusTag += "</div>";
    ret += "<tr>";
    ret += `<td>${statusTag}</td><td>${st.description}</td>`;
    ret += "</tr>";
  }

  ret += "</table>";
  return ret;
}

module.exports = function(fractal) {
  function FractalStatusHelper() {
  }

  FractalStatusHelper.prototype = {
    documentStatusTable: function() {
      return statusTable(fractal, 'docs');
    },

    componentStatusTable: function() {
      return statusTable(fractal, 'components');
    }
  };

  return new FractalStatusHelper();
};
