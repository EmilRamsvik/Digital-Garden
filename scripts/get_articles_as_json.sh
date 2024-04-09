#! /bin/bash
find docs -type f -name "*.md" | sed 's/\.md$//' | awk -F/ -v q='"' 'BEGIN {
    print "["
}
function join(array, start, end, sep,    result, i) {
    result = array[start];
    for (i = start + 1; i <= end; i++) {
        result = result sep array[i];
    }
    return result;
}
{
    # Replace spaces with %20 (URL encoding).
    gsub(/ /, "%20", $0);

    # Split the path into parts.
    n = split($0, parts, "/");

    # Determine the title.
    title = parts[n];
    gsub(/%20/, " ", title); # Revert %20 to spaces for title display.

    # Handle the case where the parent folder and file name are the same.
    if (n > 1 && parts[n] == parts[n-1]) {
        path = join(parts, 1, n-1, "/");
    } else {
        path = $0;
    }

    # Print the JSON object line.
    print (NR>1 ? "," : "") "  {\"path\": \"" path "\", \"title\": \"" title "\"}";
}
END {
    print "\n]"
}' > static/article_list.json
