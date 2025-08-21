<script lang="ts">
	import { onMount } from 'svelte';

	let currentTime = '';
	let typedText = '';
	const fullText = "Hello, My Name is Scott Rostron and I'm a Software Developer";
	let typeIndex = 0;

	onMount(() => {
		// Update time every second
		const timeInterval = setInterval(() => {
			currentTime = new Date().toLocaleTimeString();
		}, 1000);

		// Typing animation
		const typeInterval = setInterval(() => {
			if (typeIndex < fullText.length) {
				typedText = fullText.slice(0, typeIndex + 1);
				typeIndex++;
			} else {
				clearInterval(typeInterval);
			}
		}, 100);

		return () => {
			clearInterval(timeInterval);
			clearInterval(typeInterval);
		};
	});
</script>

<div class="min-h-screen bg-base text-text">
	<!-- NVIM-style status bar -->
	<header class="nvim-statusline flex justify-between items-center">
		<div class="flex items-center space-x-4">
			<span class="text-green">●</span>
			<span>portfolio.nvim</span>
			<span class="text-overlay1">|</span>
			<span class="text-blue">NORMAL</span>
		</div>
		<div class="flex items-center space-x-4">
			<span class="text-peach">{currentTime}</span>
			<span class="text-overlay1">|</span>
			<span class="text-lavender">100%</span>
		</div>
	</header>

	<!-- Main content -->
	<main class="container mx-auto px-4 py-8">
		<!-- Hero Section -->
		<section class="nvim-window mb-8 animate-fade-in">
			<div class="mb-4">
				<span class="text-overlay1 text-sm">1</span>
				<span class="ml-4 syntax-comment">// Welcome to my portfolio</span>
			</div>
			<div class="mb-4">
				<span class="text-overlay1 text-sm">2</span>
				<span class="ml-4">
					<span class="syntax-keyword">const</span>
					<span class="syntax-variable ml-2">software developer</span>
					<span class="text-text ml-2">=</span>
					<span class="text-text ml-2">{'{'}</span>
				</span>
			</div>
			<div class="mb-4 ml-8">
				<span class="text-overlay1 text-sm">3</span>
				<span class="ml-4">
					<span class="syntax-variable">name</span>
					<span class="text-text">:</span>
					<span class="syntax-string ml-2">'Scott Rostron'</span>
					<span class="text-text">,</span>
				</span>
			</div>
			<div class="mb-4 ml-8">
				<span class="text-overlay1 text-sm">4</span>
				<span class="ml-4">
					<span class="syntax-variable">role</span>
					<span class="text-text">:</span>
					<span class="syntax-string ml-2">'Software Developer'</span>
					<span class="text-text">,</span>
				</span>
			</div>
			<div class="mb-4 ml-8">
				<span class="text-overlay1 text-sm">5</span>
				<span class="ml-4">
					<span class="syntax-variable">skills</span>
					<span class="text-text">:</span>
					<span class="text-text ml-2">[</span>
					<span class="syntax-string">'Golang'</span>
					<span class="text-text">,</span>
					<span class="syntax-string ml-2">'TypeScript'</span>
					<span class="text-text">,</span>
					<span class="syntax-string ml-2">'Svelte'</span>
					<span class="text-text">],</span>
				</span>
			</div>
			<div class="mb-4">
				<span class="text-overlay1 text-sm">6</span>
				<span class="ml-4 text-text">};</span>
			</div>
			<div class="mb-4">
				<span class="text-overlay1 text-sm">7</span>
				<span class="ml-4"></span>
			</div>
			<div class="mb-4">
				<span class="text-overlay1 text-sm">8</span>
				<span class="ml-4">
					<span class="syntax-function">console</span>
					<span class="text-text">.</span>
					<span class="syntax-function">log</span>
					<span class="text-text">(</span>
					<span class="syntax-string">`{typedText}`</span>
					<span class="nvim-cursor">█</span>
					<span class="text-text">);</span>
				</span>
			</div>
		</section>

		<!-- Navigation Menu -->
		<section class="nvim-window mb-8 animate-slide-up">
			<div class="mb-4">
				<span class="text-overlay1 text-sm">9</span>
				<span class="ml-4 syntax-comment">// Navigation</span>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-4 gap-4 ml-8">
				<a href="#about" class="nvim-highlight p-4 rounded hover:bg-surface2 transition-colors">
					<span class="syntax-keyword">:about</span>
					<span class="text-subtext1 block text-sm mt-1">Learn more about me</span>
				</a>
				<a href="#projects" class="nvim-highlight p-4 rounded hover:bg-surface2 transition-colors">
					<span class="syntax-keyword">:projects</span>
					<span class="text-subtext1 block text-sm mt-1">View my work</span>
				</a>
				<a href="#skills" class="nvim-highlight p-4 rounded hover:bg-surface2 transition-colors">
					<span class="syntax-keyword">:skills</span>
					<span class="text-subtext1 block text-sm mt-1">Technical expertise</span>
				</a>
				<a href="#contact" class="nvim-highlight p-4 rounded hover:bg-surface2 transition-colors">
					<span class="syntax-keyword">:contact</span>
					<span class="text-subtext1 block text-sm mt-1">Get in touch</span>
				</a>
			</div>
		</section>

		<!-- About Section -->
		<section id="about" class="nvim-window mb-8">
			<div class="mb-4">
				<span class="text-overlay1 text-sm">10</span>
				<span class="ml-4 syntax-comment">// About me</span>
			</div>
			<div class="ml-8 space-y-4">
				<p class="text-subtext1">
					I'm a passionate developer who loves solving real world problems with elegant solutions.
					With a strong background in backend development, I enjoy building
					applications that make a difference.
				</p>
				<p class="text-subtext1">
					When I'm not coding, you can find me reading books on contemporary metaphysics,
					practicing latte art, or customizing my nvim configuration.
				</p>
			</div>
		</section>

		<!-- Projects Section -->
		<section id="projects" class="nvim-window mb-8">
			<div class="mb-4">
				<span class="text-overlay1 text-sm">11</span>
				<span class="ml-4 syntax-comment">// Featured projects</span>
			</div>
			<div class="ml-8 grid grid-cols-1 md:grid-cols-2 gap-6">
				<div class="nvim-highlight p-6 rounded">
					<h3 class="syntax-function text-lg mb-2">GoStudy</h3>
					<p class="text-subtext1 mb-4">A Golang SQLite Note Taking App using Charm Bubble Tea.</p>
					<div class="flex flex-wrap gap-2">
						<span class="syntax-string text-xs px-2 py-1 bg-surface2 rounded">Golang</span>
						<span class="syntax-string text-xs px-2 py-1 bg-surface2 rounded">SQLite</span>
						<span class="syntax-string text-xs px-2 py-1 bg-surface2 rounded">Charm Bubble Tea</span>
					</div>
				</div>
				<div class="nvim-highlight p-6 rounded">
					<h3 class="syntax-function text-lg mb-2">Modular Blogging Platform</h3>
					<p class="text-subtext1 mb-4">Created as a College Capstone Project to provide a user-friendly experience for students to submit similarly formatted articles to instructors. After submission, instructors can comment, like, and give notes on student's articles.</p>
					<div class="flex flex-wrap gap-2">
						<span class="syntax-string text-xs px-2 py-1 bg-surface2 rounded">Next.js</span>
						<span class="syntax-string text-xs px-2 py-1 bg-surface2 rounded">Firebase</span>
						<span class="syntax-string text-xs px-2 py-1 bg-surface2 rounded">Figma</span>
					</div>
				</div>
			</div>
		</section>

		<!-- Skills Section -->
		<section id="skills" class="nvim-window mb-8">
			<div class="mb-4">
				<span class="text-overlay1 text-sm">12</span>
				<span class="ml-4 syntax-comment">// Technical skills</span>
			</div>
			<div class="ml-8 grid grid-cols-1 md:grid-cols-3 gap-6">
				<div>
					<h3 class="syntax-keyword text-lg mb-3">Frontend</h3>
					<ul class="space-y-2 text-subtext1">
						<li>• JavaScript/TypeScript</li>
						<li>• React/Svelte</li>
						<li>• Material UI</li>
						<li>• TailwindCSS</li>
					</ul>
				</div>
				<div>
					<h3 class="syntax-keyword text-lg mb-3">Backend</h3>
					<ul class="space-y-2 text-subtext1">
						<li>• Golang</li>
						<li>• Node.js</li>
						<li>• RESTful APIs</li>
						<li>• PostgreSQL/SQLite</li>
					</ul>
				</div>
				<div>
					<h3 class="syntax-keyword text-lg mb-3">Tools</h3>
					<ul class="space-y-2 text-subtext1">
						<li>• Git/GitHub</li>
						<li>• Docker</li>
						<li>• AWS/Firebase</li>
						<li>• Neovim</li>
					</ul>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="nvim-window mb-8">
			<div class="mb-4">
				<span class="text-overlay1 text-sm">13</span>
				<span class="ml-4 syntax-comment">// Get in touch</span>
			</div>
			<div class="ml-8">
				<p class="text-subtext1 mb-6">
					Interested in working together? Feel free to reach out!
				</p>
				<div class="flex flex-wrap gap-4">
					<a href="mailto:apodicticscott@protonmail.com" class="nvim-highlight px-4 py-2 rounded hover:bg-surface2 transition-colors">
						<span class="syntax-function">email</span>
						<span class="text-text">()</span>
					</a>
					<a href="https://github.com/apodicticscott" class="nvim-highlight px-4 py-2 rounded hover:bg-surface2 transition-colors">
						<span class="syntax-function">github</span>
						<span class="text-text">()</span>
					</a>
					<a href="https://www.linkedin.com/in/rostron/" class="nvim-highlight px-4 py-2 rounded hover:bg-surface2 transition-colors">
						<span class="syntax-function">linkedin</span>
						<span class="text-text">()</span>
					</a>
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<footer class="nvim-statusline mt-8">
		<div class="container mx-auto px-4 flex justify-between items-center">
			<span class="text-overlay1">© 2025 Scott Rostron</span>
		</div>
	</footer>
</div>
