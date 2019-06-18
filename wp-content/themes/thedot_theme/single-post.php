<?php get_header(); //appel du template header.php  ?>

	<section id="primary" class="content-area">
		<main id="article-main" class="article-main">

			<div class="post">
				<h1>Titre de l'article</h1>
				<p class="content">
					Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
				</p>
			</div>

			<div class="video-post"> </div>

			<div class="post">
				<p class="content">
					Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
				</p>
				<h2>Consommation par régions</h2>
			</div>

			<div id="intro" class="slider glide glide--ltr glide--carousel glide--swipeable">

				<div data-glide-el="controls">
					<button class="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev" data-glide-dir="<">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
						<path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
						</svg>
					</button>

					<div class="slider__track glide__track" data-glide-el="track">
						<ul class="slider__slides glide__slides">
							<li class="slider__frame glide__slide"><img src="https://picsum.photos/600/400/?random=1"></li>
							<li class="slider__frame glide__slide"><img src="https://picsum.photos/600/400/?random=2"></li>
							<li class="slider__frame glide__slide"><img src="https://picsum.photos/600/400/?random=3"></li>
							<li class="slider__frame glide__slide"><img src="https://picsum.photos/600/400/?random=4"></li>
							<li class="slider__frame glide__slide"><img src="https://picsum.photos/600/400/?random=5"></li>
							<li class="slider__frame glide__slide"><img src="https://picsum.photos/600/400/?random=6"></li>
						</ul>
					</div>

					<button class="slider__arrow slider__arrow--next glide__arrow glide__arrow--next" data-glide-dir=">">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
						<path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
						</svg>
					</button>
				</div>

				<div class="slider__bullets glide__bullets" data-glide-el="controls[nav]">
					<button class="slider__bullet glide__bullet" data-glide-dir="=0"></button>
					<button class="slider__bullet glide__bullet" data-glide-dir="=1"></button>
					<button class="slider__bullet glide__bullet" data-glide-dir="=2"></button>			
					<button class="slider__bullet glide__bullet" data-glide-dir="=3"></button>				
					<button class="slider__bullet glide__bullet" data-glide-dir="=4"></button>				
					<button class="slider__bullet glide__bullet" data-glide-dir="=5"></button>			
					<button class="slider__bullet glide__bullet" data-glide-dir="=6"></button>
				</div>
			</div>


		</main><!-- #main -->
	</section><!-- #primary -->

<?php get_footer(); //appel du template footer.php ?>