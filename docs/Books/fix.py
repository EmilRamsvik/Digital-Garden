import re


def replace_spaces_in_parentheses(file_path):
    # Read the content of the file
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Replace spaces within parentheses
    pattern = re.compile(r"\([^)]*\)")

    def replace_spaces(match):
        return match.group(0).replace(" ", "%20")

    updated_content = pattern.sub(replace_spaces, content)

    # Write the updated content back to the file or a new file
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(updated_content)


# Path to your Markdown file
markdown_file_path = "Booklist 2023.md"
replace_spaces_in_parentheses(markdown_file_path)
