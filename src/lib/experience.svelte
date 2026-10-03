<script>
	import { observeSection } from './actions/observeSection';
	import { reveal } from './animations/reveal';
</script>

<!-- <script lang="ts">
    import type { Company } from "$lib/types/institutes";
    import {onMount} from "svelte";
    import {gsap} from 'gsap';

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    const {company, extra} = $props<{company: Company, extra: any}>();
    
    onMount(() => {
        const tl = gsap.timeline();

        tl.fromTo("#marker", {top: 300, opacity: 0}, {top: 0, opacity: 1, backgroundColor: "rgba(104, 31, 62, 1)", duration: 1, ease: "power1"}).fromTo("#ruler", {opacity: 0}, {opacity: 1, stagger: 0.5});
        
        gsap.fromTo("#unique", {backgroundColor: "#004430"}, {
            opacity: 1,
            // scale: 1.2,
            backgroundColor: "#009368",
            duration: 0.8,
            ease: "power1.inOut",
            repeat: -1,
            yoyo: true
        })

    });



</script> -->
<section
	use:observeSection
	use:reveal
	class="border-t border-border-subtle py-section-gap"
	id="experience"
>
	<h2 class="mb-gutter font-headline-lg text-headline-lg">Experience</h2>
	<div class="relative ml-4">
		<div class="timeline-line absolute top-0 bottom-0 -left-0.5"></div>
		<div class="space-y-12">
			<!-- Entry 1 -->
			<div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase">June 2024 — Present</span>
				<h3 class="mt-1 font-headline-md text-headline-md">Manager, AI Engineer</h3>
				<p class="font-label-md text-on-surface-variant">L&T Financial Services <span class="text-gray-500">| Mumbai/Pune</span>  </p>
				<p class="mt-4 max-w-2xl font-body-md">
					• Owned the end to end development of <span class="font-bold">L&T Finance’s flagship Agentic AI underwriting projects, Helios</span>, from architecture and coding to infrastructure, deployment, monitoring, business integration, and subsequent enhancements. Helios includes SME Triangulation, PL Bureau Analyzer, HL FSA, and Helios CAM, built using Gemini, GPT, LangGraph, and tool calling.
				</p>
				<p class="mt-0.5 max-w-2xl font-body-md">
					• Currently working on <span class="font-bold">Helios CAM</span>, a one stop Agentic AI solution bringing together bureau, dedupe, and multi GST analysis for SME lending.
				</p>
				<p class="mt-0.5 max-w-2xl font-body-md">
					• Developed <span class="font-bold">ML to MLAP Cross Sell</span>, using property data, geolocation, and property images to identify cross sell and top up opportunities.
				</p>
				<p class="mt-0.5 max-w-2xl font-body-md">
					• Built a <span class="font-bold">Lifestyle Index Rating</span> model to assess housing quality, delivering the complete AI solution across frontend, backend, and APIs; showcased at **RAISE 2024**.
				</p>
			</div>
			<!-- Entry 2 -->
			<div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase">January 2024  — May 2024</span>
				<h3 class="mt-1 font-headline-md text-headline-md">Data Science Intern</h3>
				<p class="font-label-md text-on-surface-variant">L&T Financial Services <span class="text-gray-500">| Mumbai</span>  </p>
				<p class="mt-0.5 max-w-2xl font-body-md">
					• Developed a <span class="font-bold">Treasury Forecasting</span> model using Prophet to improve product level financial forecasting for treasury planning for Two Wheeler, Farm Loans and SME Loans.
				</p>
                <p class="mt-0.5 max-w-2xl font-body-md">
					• Created visual/animated/textual content for the assigned CPD course
				</p>
			</div>
			<!-- Entry 3 -->
			<div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase"> June 2023  —  July 2023</span>
				<h3 class="mt-1 font-headline-md text-headline-md"><strong>DATA SCIENCE AND BUSINESS ANALYTICS INTERN</strong></h3>
				<p class="font-label-md text-on-surface-variant">The Sparks Foundation<span class="text-gray-500"> |  Singapore (remote)</span></p>
				<p class="mt-4 max-w-2xl font-body-md">
					• Applied linear regression to predict the percentage of a student based on the number of hours they study
				</p>
                <p class="mt-0.5 max-w-2xl font-body-md">
					• Used PowerBI tools on a "Global Terrorism Dataset" to identify the hot zones of terrorism.
				</p>
                
                
			</div>
            <div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase">May 2023</span>
				<h3 class="mt-1 font-headline-md text-headline-md"><strong>DATA SCIENCE INTERN</strong></h3>
				<p class="font-label-md text-on-surface-variant">British Airways<span class="text-gray-500"> | IND (remote)</span></p>
				<p class="mt-4 max-w-2xl font-body-md">
					• Fully web-scraped customer review data and performed sentiment analysis
				</p>
				<p class="mt-0.5 max-w-2xl font-body-md">
					• By employing Logistic Regression and feature importance techniques, I successfully developed a robust model that predicts customer behaviour with an impressive accuracy of 85.2%
				</p>	
			</div>
            <!-- <div class="relative pl-10">
				<div class="absolute top-2 left-[-8px] h-4 w-4 bg-primary"></div>
				<span class="font-label-sm text-label-sm text-primary uppercase"> Jun '22  —  Aug '22</span>
				<h3 class="mt-1 font-headline-md text-headline-md"><strong>Bioinformatics Intern</strong></h3>
				<p class="font-label-md text-on-surface-variant"> IIT Bombay <span class="text-gray-500"> | IND</span></p>
				<p class="mt-4 max-w-2xl font-body-md">
                    In silico analysis of anti-inflammatory effects of phenolics on jaggery; Performed systemic literature review;
				</p>
                <p class="mt-0.5 max-w-2xl font-body-md">Designed and executed molecular docking and dynamics simulations.</p>
			</div> -->
		</div>
	</div>
</section>
