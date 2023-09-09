$(document).ready(function() {

    function setDarkModePreference(isDarkMode) {
        // Remove the existing dark mode link if it exists
        const existingLink = $('link[data-dark-mode]');
        if (existingLink.length > 0) {
          existingLink.remove();
        }
    
        // Dynamically create a new link element for the appropriate CSS file based on the mode preference
        const cssFile = isDarkMode ? 'css/mystyles-dark.css' : 'css/mystyles-light.css';
        const link = $('<link rel="stylesheet" type="text/css" data-dark-mode>');
        link.attr('href', cssFile);
    
        // Add the link to the head of the document
        $('head').append(link);
    
        // Update the Local Storage to remember the user's preference
        localStorage.setItem('dark-mode', isDarkMode ? 'true' : 'false');
      }
    
      function toggleDarkMode() {
        const isCurrentlyDark = localStorage.getItem('dark-mode') === 'true';
    
        // Toggle the mode preference
        setDarkModePreference(!isCurrentlyDark);
      }
    
      // Add event listener to the toggle button
      $('#toggle').on('click', toggleDarkMode);
    
      // Set initial mode based on user preference or default (light mode)
      const isDarkMode =
        localStorage.getItem('dark-mode') === 'true' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    
      // Set the CSS file based on the initial mode preference
      setDarkModePreference(isDarkMode);

      function none()
      {
        $(".is-one-quarter").hide();
      }

      function filterPython()
      {
        none();
        $('.python').show();
      }

      function filterAll()
      {
        none();
        $(".is-one-quarter").show();
      }

      function filterCSharp()
      {
        none();
        $(".csharp").show();
      }

      $('.nav-all').on('click', filterAll);
      $('.nav-python').on('click', filterPython);
      $('.nav-csharp').on('click', filterCSharp);
  });

