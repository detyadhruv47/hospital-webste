import re

# Read current index.html (which has About Us, Specialists, Certifications, and the Scroll Animation)
with open("index.html", "r", encoding="utf-8") as f:
    index_html = f.read()

# Read code.html (which has Premium Medical Services, the updated Header, and the updated Footer)
with open(r"stitch_modern_premium_healthcare\code.html", "r", encoding="utf-8") as f:
    code_html = f.read()

# 1. Extract the Header from code.html
header_match = re.search(r'(<header.*?</header>)', code_html, re.DOTALL)
new_header = header_match.group(1) if header_match else ""

# 2. Extract the Footer from code.html
footer_match = re.search(r'(<footer.*?</footer>)', code_html, re.DOTALL)
new_footer = footer_match.group(1) if footer_match else ""

# 3. Extract the Premium Medical Services Section from code.html
services_match = re.search(r'<main[^>]*>(.*?)</main>', code_html, re.DOTALL)
services_content = services_match.group(1) if services_match else ""

# 4. Extract the Scroll Animation Section from index.html
scroll_match = re.search(r'(<section class="scroll-container">.*?</section>)', index_html, re.DOTALL)
scroll_section = scroll_match.group(1) if scroll_match else ""

# 5. Extract the About Us Sections from index.html (Everything inside <main> after the scroll animation)
about_match = re.search(r'<section class="scroll-container">.*?</section>(.*?)</main>', index_html, re.DOTALL)
about_content = about_match.group(1) if about_match else ""

# 6. Extract Loader from index.html
loader_match = re.search(r'(<div id="loader".*?</div>)', index_html, re.DOTALL)
loader = loader_match.group(1) if loader_match else ""

# 7. Extract the <head> from code.html, but add the style.css link and the loader css
head_match = re.search(r'(<head>.*?</head>)', code_html, re.DOTALL)
new_head = head_match.group(1) if head_match else ""
new_head = new_head.replace('</head>', '  <link rel="stylesheet" href="style.css">\n</head>')

# Assemble the final HTML
final_html = f"""<!DOCTYPE html>
<html class="light" lang="en">
{new_head}
<body class="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col font-body-md">
  
  {loader}

  {new_header}

  <main class="flex-grow w-full">
    {scroll_section}

    <div class="relative z-10 bg-background pt-[120px] pb-section-gap px-gutter max-w-container-max mx-auto w-full flex flex-col gap-[120px]">
      <section>
        {services_content}
      </section>

      <section>
        <div class="text-center mb-16">
          <h2 class="font-headline-lg text-headline-lg text-primary mb-4">About Lumina Health</h2>
          <p class="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">Providing world-class, patient-centric healthcare through continuous innovation.</p>
        </div>
        {about_content.replace('<section class="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto relative z-10 bg-background">', '<div>').replace('<section class="py-section-gap bg-surface-container-low px-margin-mobile md:px-gutter relative z-10">', '<div class="py-section-gap bg-surface-container-low rounded-[32px] px-8">').replace('<section class="py-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto border-t border-outline-variant relative z-10 bg-background">', '<div class="border-t border-outline-variant pt-12">').replace('</section>', '</div>')}
      </section>
    </div>
  </main>

  {new_footer}

  <script src="app.js"></script>
</body>
</html>"""

# Fix some nesting issues introduced by simple replace (optional, but ensures clean DOM)
final_html = final_html.replace('<div>\n      <div class="grid', '<div class="grid')

with open("index.html", "w", encoding="utf-8") as f:
    f.write(final_html)

print("Successfully merged HTML!")
