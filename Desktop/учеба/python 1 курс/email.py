#[\w\.-]+ matches one or more word character, dot or dash.
#The regex above says that the string should contain a word (with dots and dashes allowed), followed by the @ sign, then another similar word, then a dot and another word.
import re
pettern=r"([\w\.-]+)@([\w\.-]+)([\w\.-]+)"
str = "Please contact info@sololearn.com for assistance"

match = re.search(pattern, str)
if match:
   print(match.group())
