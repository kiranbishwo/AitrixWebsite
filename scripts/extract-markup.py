from pathlib import Path
import codecs

s = Path("src/App.tsx").read_text(encoding="utf-8")
key_start = 'const pageMarkup = "'
key_end = '"\n\nfunction App()'
i = s.index(key_start) + len(key_start)
j = s.index(key_end)
raw = s[i:j]
markup = codecs.decode(raw.encode("utf-8"), "unicode_escape")
Path("src/markup.html").write_text(markup, encoding="utf-8")
print("wrote", len(markup), "chars")
