$(document).ready(() => {
	const beatmaps = [
		{ id: 644112, ssfile: "cold_skin.png" },
		{ id: 691819, ssfile: "strawberry_karte.png" },
		{ id: 771991, ssfile: "ghosts_play_to_the_audience.png" },
		{ id: 973362, ssfile: "patt_memories.png" },
		{ id: 1002909, ssfile: "kamususanowo.png" },
		{ id: 1130076, ssfile: "osu_community_choice_2019.png" },
		{ id: 1100775, ssfile: "manten.png" },
		{ id: 1250926, ssfile: "bagsakan.png" },
		{ id: 927425, ssfile: "xi_songs_compilation.png" },
		{ id: 1151309, ssfile: "be_alright.png" },
	];

	for (let i = 0; i < beatmaps.length; i++) {
		console.log(`./res/image/screenshots/${beatmaps[i].ssfile}`);
		$("ul#preview").append(
			`<li><a id="screenshots" href="https://osu.ppy.sh/beatmapsets/${beatmaps[i].id}">
			<img src="/res/image/screenshots/${beatmaps[i].ssfile}" alt="${beatmaps[i].ssfile}" class="image" width="800"/>
			</a></li>`,
		);
	}
});

(() => {})();
