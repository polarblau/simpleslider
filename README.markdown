# Usage

Basic options
	$('.simpleslider').simpleslider();

Check out the [demo here](http://www.polarblau.com/code/jquery/simpleslider).
	
Settings and defaults
	$('.simpleslider').simpleslider({
			"controls"           : $('.controls'),
			"content"            : '.content',
			"transitionDuration" : 500
	});
	
	
HTML structure
	<div class="simpleslider">
		<div class="mask">
			<ul class="content">
				<li>Foo</li>
				<li>Bar</li>
				<li>Baz</li>
			</ul>
		</div>
		<ul class="controls">
			<li><a href="#">1</a></li>
			<li><a href="#">2</a></li>
			<li><a href="#">3</a></li>
		</ul>
	</div>