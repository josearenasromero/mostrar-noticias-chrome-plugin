// content.js
$(window).on("load", () => {
	setInterval(() => {

		console.log("Escondiendo publicidad...");

		// jQuery("#signwall-app").hide();
		// jQuery("html").removeClass("overflow-hidden");
		// jQuery("html").css("overflow-y", "auto");
		// jQuery("#contenedor").removeClass("story-content__nota-premium");
		// jQuery("#contenedor").removeClass("paywall");
		// jQuery("#contenedor").show();

		jQuery("#articulos-premium").hide();
		jQuery("#contenedor").removeAttr("style").css({
			"display": "block",
			"user-select": "none",
		});
		jQuery(".tp-modal").hide();
		jQuery(".tp-backdrop").hide();
		jQuery("body").removeClass("tp-modal-open");

	}, 1000);
});