<script>
	import { observeSection } from './actions/observeSection';
	import { reveal } from './animations/reveal';
</script>

<section
	use:observeSection
	use:reveal
	class="border-t border-border-subtle py-section-gap"
	id="education"
>
	<h2 class="mb-gutter font-headline-lg text-headline-lg">Education</h2>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
	<!-- Education Card 2 -->
		<div
			class="border border-border-subtle bg-surface-container-lowest p-gutter transition-all duration-300 hover:border-primary"
		>
			<div class="mb-6 flex items-start justify-between">
				<div class="flex-1">
					<h3 class="mb-1 font-headline-md text-headline-md">MSc in Data Science and Big Data Analytics <strong class="text-xs text-amber-400">Gold Medal</strong> </h3>
					<p class="font-label-md text-primary">Maharashtra Institute of Technology, Pune, India</p>
					<p class="mt-1 text-label-sm tracking-wider text-on-surface-variant uppercase">
						2022 — 2024
					</p>
				</div>
				<div
					class="flex h-10 w-20 items-center justify-center "
				>
					<!-- <span class="material-symbols-outlined text-on-surface-variant">school</span> -->
					 <img src="icons/mitwpu.jpg" alt="">
				</div>
			</div>
			<div class="space-y-4">
				<div>
					<p class="mb-1 font-label-sm text-primary uppercase">Research Project</p>
					<p class="border-l-2 border-primary py-1 pl-4 font-body-md italic">
						Diabetic Retinopathy Detection and Stage Classification
					</p>
					<p class="border-l-2 border-blue-950 py-1 pl-4 font-body-md italic">
						CNN Based Fundus Image Analysis
					</p>
				</div>
				<div>
					<p class="mb-2 font-label-sm text-primary uppercase">Areas</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Convolutional Neural Networks</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Support Vector Machines</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Image Annotation</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Medical Image Analysis</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Computer Vision</span
						>
					</div>
				</div>
			</div>
		</div>
		<!-- Education Card 1 -->
		<div
			class="border border-border-subtle bg-surface-container-lowest p-gutter transition-all duration-300 hover:border-primary"
		>
			<div class="mb-6 flex items-start justify-between">
				<div class="flex-1">
					<h3 class="mb-1 font-headline-md text-headline-md">BSc in Computer Science <strong class="text-xs text-amber-400">Gold Medal</strong> </h3>
					<p class="font-label-md text-primary">Pune University</p>
					<!-- <p class="font-label-md text-ncl-blue">MIT-ADT University</p> -->
					<p class="mt-1 text-label-sm tracking-wider text-on-surface-variant uppercase">
						2019 — 2022
					</p>
				</div>
				<div
					class="flex h-10 w-10 items-center justify-center  "
				>
					<!-- <span class="material-symbols-outlined text-on-surface-variant">school</span> -->
					 <img src="icons/puneuni.jpeg" alt="">
				</div>
			</div>
			<div class="space-y-4">
				<div>
					<p class="mb-1 font-label-sm text-primary uppercase"> Project</p>
					<p class="border-l-2 border-primary py-1 pl-4 font-body-md italic">
						AIM Airways, end to end pipeline development with ticket booking and payment integration.

					</p>
					<p class="border-l-2 border-blue-950 py-1 pl-4 font-body-md text-sm italic">
						
					</p>
				</div>
				<div>
					<p class="mb-2 font-label-sm text-primary uppercase">Areas</p>
					<div class="flex flex-wrap gap-2">
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Full Stack Development</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Backend Development</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Payment Integration</span
						>
						<span
							class="border border-border-subtle bg-surface-container-high px-2 py-1 text-label-sm"
							>Software Engineering</span
						>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</section>
