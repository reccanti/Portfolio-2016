(function animateCallout() {
	var spans = document.querySelectorAll(".Callout_span");
	var tl = new TimelineLite();
	var staggerDur = .47;
	tl.staggerFromTo(spans, staggerDur, { opacity: 0.3 }, { opacity: 1.0 }, staggerDur * 2);
})();