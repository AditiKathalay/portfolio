<script>
	import { observeSection } from './actions/observeSection';
	import { reveal } from './animations/reveal';
</script>

<section
	use:observeSection
	use:reveal
	class="border-t border-border-subtle py-section-gap"
	id="skills"
>
	<h2 class="mb-gutter font-headline-lg text-headline-lg">Technical Skills</h2>
	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		<!-- Bioinformatics -->
		<div
			class="skill-badge border-violet-500 bg-surface-container-low p-gutter transition-colors duration-300 hover:bg-white hover:shadow-sm"
		>
			<h3 class="mb-4 font-label-md text-label-md text-text-main">AI & Machine Learning</h3>
			<div class="flex flex-wrap gap-2">
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Python</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Transformers</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Agentic AI</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>LangGraph, LangChain</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Machine Learning Algorithms</span
				>

			</div>
		</div>
		<!-- Programming -->
		<div
			class="skill-badge border-[#00703C] bg-surface-container-low p-gutter transition-colors duration-300 hover:bg-white hover:shadow-sm"
		>
			<h3 class="mb-4 font-label-md text-label-md text-text-main">Backend & Development</h3>
			<div class="flex flex-wrap gap-2">
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Python</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Fast APIs, REST APIs</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>HTML/CSS/JavaScript</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Bash/Unix</span
				>
				<!-- <span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">SQL</span> -->
			</div>
		</div>
		<!-- Data Engineering -->
		<div
			class="skill-badge border-[#ba1a1a] bg-surface-container-low p-gutter transition-colors duration-300 hover:bg-white hover:shadow-sm"
		>
			<h3 class="mb-4 font-label-md text-label-md text-text-main">Cloud & Data Engineering</h3>
			<div class="flex flex-wrap gap-2">
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>GCP</span
				>
				<!-- <span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">Snakemake</span> -->
				<!-- <span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">ETL Pipelines</span> -->
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>AWS S3/Batch</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Vertex AI Pipelines</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>GitHub Actions/CI-CD</span
				>
			</div>
		</div>
		<!-- Scientific Computing
		<div
			class="skill-badge border-primary bg-surface-container-low p-gutter transition-colors duration-300 hover:bg-white hover:shadow-sm"
		>
			<h3 class="mb-4 font-label-md text-label-md text-text-main">Scientific Computing</h3>
			<div class="flex flex-wrap gap-2">
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Pandas/NumPy</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Statistical Analysis</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Data Viz in R/Python</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Bioconductor</span
				> 
			</div>
		</div>-->
		<!-- DevOps -->
		<div
			class="skill-badge border-[#555555] bg-surface-container-low p-gutter transition-colors duration-300 hover:bg-white hover:shadow-sm"
		>
			<h3 class="mb-4 font-label-md text-label-md text-text-main">DevOps</h3>
			<div class="flex flex-wrap gap-2">
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Docker</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>GKE, Vertex Pipelines</span
				>
				<span
					class="cursor-default border border-border-subtle bg-white px-2 py-1 text-label-sm transition-transform hover:scale-105"
					>Git / GitHub Actions</span
				>
				<!-- <span class="px-2 py-1 border border-border-subtle bg-white text-label-sm transition-transform hover:scale-105 cursor-default">HPC (SLURM)</span> -->
			</div>
		</div>
	</div>
</section>
