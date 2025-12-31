this.$dom = {};
this.$dom.animatedText = document.createElement('div');
this.text = "I’m ending 2025 with you and 2026 is also beginning with you and that alone makes this moment special for me I wish this coming year brings you happiness peace and everything your heart desires truly everything you deserve it all I can’t really put into words how much you mean to me how much your happiness matters to me how much even your smallest little things matter I don’t know what the future holds whether we end up together in this life or in another or if there’s even something like rebirth but I know this for sure some part of you will always live in my heart there is no place in this world no people no friends that give me the peace I feel when I’m with you the sukoon I get exists only with you you make me a better man with you everything feels better lighter and more meaningful you are the most positive and beautiful influence in my life I feel this page would fall short if I started writing everything I feel for you happy new year I wish you happiness for this year and for all the years to come and with all my heart I wish you my happiness too. I love you and I’ll always be there for you, through thick and thin...You will always find your Gyan standing with you and his arms to hold you";  // MESSAGE AREA , THIS CAN BE CHANGED FROM YOUR MESSAGE :)
this.$dom.container = document.getElementById('container');
this.$dom.container.appendChild(this.$dom.animatedText);
animateText();
function animateText(){
	var arrayOfLetters = this.text.split("");
	var animatedSpan = [];
	arrayOfLetters.forEach(function(item){
		var span = document.createElement('span');
		span.innerHTML = item;
		animatedSpan.push(span);
		span.style.opacity = 0;
		span.style.color = 'white';
		this.$dom.animatedText.appendChild(span);
	});
	TweenMax.staggerTo(animatedSpan, .2,{
		opacity : 1,
		delay : 2
	},0.05);
}
