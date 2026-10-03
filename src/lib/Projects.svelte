<script>
	import { observeSection } from "./actions/observeSection";
	import { reveal } from "./animations/reveal";

</script>
<section use:observeSection use:reveal class="py-section-gap border-t border-border-subtle" id="projects">
<h2 class="font-headline-lg text-headline-lg mb-gutter ">Featured Technical Projects</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">

<!-- Project 1 -->
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="h-48 overflow-hidden">
  <img
    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
    data-alt="Young woman applying moisturizer as part of her skincare routine"
    src="https://img.magnific.com/premium-photo/minimalistic-arrangement-skincare-products-tools-marble-countertop-modern-bathroom_93675-267494.jpg?semt=ais_hybrid&w=740&q=80"
  />
</div>
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors group-hover:text-primary">Agentic AI Skincare Assistant</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Problem</p>
<p>Choosing suitable skincare products requires understanding individual skin concerns and needs.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Approach</p>
<p>Built an Agentic AI system that analyzes user skin concerns and uses LLMs with tool calling to recommend suitable skincare products.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Outcome</p>
<p>Developed a personalized skincare assistant that provides product recommendations based on individual skin needs.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Pyhon</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Agentic AI</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">LangGraph</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">RAG</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">FAST APIs</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Frontend (HTML, CSS, JavaScript)</span>
<!-- <span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors"></span> -->
</div>
</div>
</div>
</article>

<!-- Project 2 -->
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="h-48 overflow-hidden">
  <img
    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
    data-alt="Young woman applying moisturizer as part of her skincare routine"
    src="https://www.westbrowardeyecare.com/wp-content/uploads/2025/11/Generated-Image-November-11-2025-8_16PM-1024x585.jpg"
  />
</div>
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors roup-hover:text-primary">Diabetic Retinopathy Detection and Stage Classification</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Problem</p>
<p>Manual diabetic retinopathy screening is time consuming and requires expert assessment.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Approach</p>
<p>Processed retinal images using Python with Bayesian blur and image preprocessing techniques, followed by CNN and SVM based classification.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Outcome</p>
<p>Built an application that analyzes uploaded retinal images and provides an early assessment of diabetic retinopathy.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Python</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Deep Learning Algorithms</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Computer Vision</span>
</div>
</div>
</div>
</article>
<!-- Project 3 -->
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="h-48 overflow-hidden">
  <img
    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
    data-alt="Young woman applying moisturizer as part of her skincare routine"
    src="https://lh3.googleusercontent.com/aida-public/AB6AXuARUsCTKMMUiX4KdbFjmfOpBpn5HwymxG46eVKBvoAs80O_zR1s8lLuflhYoEjiqJsaNsBRRWmoOglx7IFiZ7BV6ZcYxDnf4dUZ4YvYZ2TQyWKngt1VcJ_HFY1199TkkuCV7lwBNLLi903kEvi3NfRax2Wffg4juWH1T8s6j5jKKbYMrnz7EPKii-ZHhqPNN9Egrf5zVNV9n0GxwWufXhsyhdxb2q8OiW-VNBGGtkm086a6k2BueUF1mYwfQv9943oQV_hKRhDlsAC8"
  />
</div>
<!-- <div class="h-48 overflow-hidden">
<img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="A clean, minimalist composition of code snippets and biological data tables on a high-resolution display. The interface looks like a professional bioinformatics workflow engine, with structured data flows and logs. The aesthetic is inspired by GOV.UK GDS design principles, focusing on high legibility and information architecture in a modern light-mode environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARUsCTKMMUiX4KdbFjmfOpBpn5HwymxG46eVKBvoAs80O_zR1s8lLuflhYoEjiqJsaNsBRRWmoOglx7IFiZ7BV6ZcYxDnf4dUZ4YvYZ2TQyWKngt1VcJ_HFY1199TkkuCV7lwBNLLi903kEvi3NfRax2Wffg4juWH1T8s6j5jKKbYMrnz7EPKii-ZHhqPNN9Egrf5zVNV9n0GxwWufXhsyhdxb2q8OiW-VNBGGtkm086a6k2BueUF1mYwfQv9943oQV_hKRhDlsAC8"/>
</div> -->
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors group-hover:text-primary">Weapon Classification Using AI</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Approach</p>
<p>Processed image data using Python and applied YOLO for weapon detection with Random Forest for classification.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Outcome</p>
<p>Built a system that detects and classifies weapons in images for automated screening.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Pyhon</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Machine Learning Algorithms</span>
<!-- <span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors"></span> -->
</div>
</div>
</div>
</article>
<!-- Project 3
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors group-hover:text-primary">NASA Weather data analysis</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Problem</p>
<p>Need for an interactive, web-based tool to visualize complex structural variants and multi-omic data layers for non-computational researchers.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Technologies</p>
<p>React.js based implementation of JBrowse 2 components, AWS S3 for indexed data storage, and custom track renderers.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">PowerBIS</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Data Analysis</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Genomics</span> 
</div>
</div>
</div>
</article>-->
<!-- Project 4 -->
<article class="bg-surface-container-lowest border border-border-subtle group hover:border-primary transition-all duration-300 flex flex-col  hover:-translate-y-1">
<div class="h-48 overflow-hidden">
  <img
    class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
    data-alt="Young woman applying moisturizer as part of her skincare routine"
    src="https://c8.alamy.com/comp/R4KGFP/air-ticket-flight-booking-concept-R4KGFP.jpg"
  />
</div>
<div class="p-gutter flex-1">
<h3 class="font-headline-md text-headline-md mb-4 transition-colors group-hover:text-primary">AIM Airways</h3>
<div class="space-y-4 font-body-md">
<div>
<p class="text-primary font-label-sm uppercase mb-1">Approach</p>
<p>Developed the complete application with booking, ticket management, and payment functionality.</p>
</div>
<div>
<p class="text-primary font-label-sm uppercase mb-1">Outcome</p>
<p>Built a functional airline booking platform enabling users to search, book, and pay for tickets online.</p>
</div>
<div class="flex flex-wrap gap-2 pt-2">
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">Java</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">JSP</span>
<span class="text-label-sm px-2 py-1 bg-surface-container-high border border-border-subtle group-hover:border-primary/50 transition-colors">HTML, CSS, JavaScript</span>
</div>
</div>
</div>
</article>
</div>
</section>