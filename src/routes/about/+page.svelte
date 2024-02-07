<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>Scott Rostron — About</title>
</svelte:head>

<div class="container h-full mx-auto flex justify-center items-center">
  <div class="flex flex-col w-1/2">
		<h1 class="h1 pb-4">About</h1>
		<p class ="p">
      I am currently a senior at the University of South Carolina Aiken majoring in Computer Science. My main goal is to become a full-time Software Engineer! 
      I enjoy developing mostly in the back-end side of software development. I am proficient in Javascript, Golang, and Java. 
      Outside of coding, I really like drinking a nice caramel latte and read philosophy books.
    </p>
    <h2 class="h2 pt-4">Skills</h2>
    <div class="flex-row">
		{#each Object.entries(skills) as [section, technologies]}
					<h4 class="h4 py-2">
						{section}:
					</h4>
						{#each technologies as technology}
								{technology}
						{/each}
		{/each}
    </div>
  </div>
</div>
