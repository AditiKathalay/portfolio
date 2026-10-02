<script>
    import { reveal } from "./animations/reveal";
    import { observeSection } from '$lib/actions/observeSection';
    import {base} from '$app/paths';
</script>

<section use:observeSection use:reveal class="py-section-gap grid md:grid-cols-12 gap-gutter items-center font-sans" id="hero">
    <div use:reveal class="md:col-span-5 order-2 md:order-1">
    <!-- <div use:reveal class="md:col-span-6 order-2 md:order-1"> -->
        <div use:reveal class="aspect-3/4 overflow-hidden border border-border-subtle">
            <img alt="Aditi Kathalay" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="Aditi_2.JPG"/>
        </div>
    </div>
    <!-- <div use:reveal class="md:col-span-7 order-1 md:order-2"> -->
    <div use:reveal class="md:col-span-6 order-1 md:order-2">
        <h1 class="font-display-xl text-display-xl md:text-[56px] mb-4">Aditi Kathalay</h1>
        <h2 class="font-headline-lg text-headline-lg text-primary mb-8">AI Engineer &amp; GenAI Developer</h2>
        <p class="font-body-lg text-body-lg mb-12 text-on-surface-variant leading-relaxed">
                What if the things we spend hours doing could be done in seconds? That’s the kind of problem I like solving. 

                <!-- <br/><br/>  -->

                <!-- I’m an AI Engineer with 2+ years of experience building practical AI solutions with LLMs, Agentic AI, FastAPI, and emerging AI technologies. -->
                
                <br/>
                
                What I enjoy most is seeing something I built go from an idea to a real product that genuinely makes someone’s work easier.
                
                <br/><br/> 
                <b>Build something useful. See it create value. Repeat.</b> </p>

        <div use:reveal class="flex flex-wrap gap-4">
            <a class="bg-primary text-on-primary px-8 py-3 font-label-md text-label-md hover:bg-[#004a80] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]" href="#projects">
                        View Projects
                    </a>
            
            <a target = "_blank" href="{base}/cv" class="border-2 border-text-main px-8 py-3 font-label-md text-label-md hover:bg-surface-container-high transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
                        Download CV
                    </a>
        </div>
        <div use:reveal class="mt-8 flex gap-6 items-center">
            <a target="_blank" class="flex items-center gap-2 hover:text-primary transition-all duration-200 hover:-translate-y-0.5 font-label-md" href="https://github.com/AditiKathalay/">
                <span class="material-symbols-outlined">code</span> GitHub
            </a>
            <a target="_blank" class="flex items-center gap-2 hover:text-primary transition-all duration-200 hover:-translate-y-0.5 font-label-md" href="https://www.linkedin.com/in/aditi-kathalay/">
                <span class="material-symbols-outlined">work</span> LinkedIn
            </a>
        </div>
    </div>
</section>