// For use in a Google Sheet. Pull in data using Google Analytics Add-On, or Supermetrics

// Extracts program name from the pageTitle in A2.
// Sample page titles:
  // Masterpiece | Watch Online | KPBS San Diego Video
  // Watch Full Episodes Online of A Growing Passion on PBS

=REGEXREPLACE(A2,"(\| .*$)|(Watch Full Episodes Online of )|( on PBS)","")
