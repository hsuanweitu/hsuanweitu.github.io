function show_text(element_id) {
    if (document.getElementById(element_id).style.display == "none")
      document.getElementById(element_id).style.display = "block";
    else {
      document.getElementById(element_id).style.display = "none"
    }
}
