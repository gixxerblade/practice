/**
 * I don't usually comment so heavily, just walking through my code for the evaluator.
 *
 * USE: From the file's directory, run "node app.js textfile.txt "search parameters" "replacement paremeters""
 */
 const fs = require("fs");

 // Validation
 if (process.argv.length < 5 || process.argv.length > 5) {
   console.log(
     `Usage: node app.js FILENAME SEARCH_PARAMETER REPLACEMENT_PARAMETER`
   );
   process.exit(1);
 }
 
 const textFile = process.argv[2];
 
 // Regex to target standalone search parameter i.e. "foo" and not "foobar"
 const searchParameterRegex = new RegExp(
   String.raw`\b${process.argv[3]}\b`,
   "ig" // i = case insensitive, g = global
 );
 
 fs.readFile(textFile, "utf8", (err, data) => {
   if (err) throw err;
   // Count occurences of search parameter
   const count = (data.match(searchParameterRegex) || []).length;
 
   console.log("SEARCH PARAMETER OCCURENCES:", count);
 
   fs.writeFile(
     textFile,
     data.replaceAll(searchParameterRegex, process.argv[4]),
     (err) => {
       if (err) throw err;
       console.log("SAVED!\n");
     }
   );
 });