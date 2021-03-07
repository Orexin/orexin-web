const regeneratorRuntime = require('regenerator-runtime');
const img = document.getElementsByClassName('technologies-img');
const imgReversed = document.getElementsByClassName('technologies-img-reversed');
const outerElm = document.getElementsByClassName('technologie-presentation-container');
const techDescImg = document.getElementById('technologie-desc-image');
const techDescTitle = document.getElementById('technologie-desc-title');
const techDescText = document.getElementById('technologie-desc-text');
//default speed 0.15
var speed = 0.5;
var logos = new Array(),
	logosReversed = new Array();
const techDescTitleArray = [
	'AWS',
	'docker',
	'figma',
	'firebase',
	'github',
	'graphql',
	'inkscape',
	'jquery',
	'JWT',
	'kubernetes',
	'linux',
	'mongodb',
	'nodejs',
	'svg',
	'vue',
	'webpack',
];
const techDescTextContent = {
	aws:
		'Amazon Web Services nabízí spolehlivé a škálovatelné služby cloud computingu. Pro hostingová řešení je AWS adekvátní volbou pokud pro vaši aplikaci potřebujete velký a bezpečný prostor. Krom hostingových řešení AWS nabízí vše od analytických nástrojů, databází všeho druhu, blockchain až po machine learning',
	docker:
		'Docker je open-source software, který poskytuje jednotné rozhraní pro izolaci aplikací do jednotlivých kontejnerů. Samostatný kontejner pak obsahuje aplikace a jejich soubory, ale narozdíl od virtualizačních systémů používá odlehčené application images.',
	figma:
		'Figma je bezplatný webový editor vektorové grafiky, s velkým obsahem funkcionality, open source pluginů a možností zaplacení dalších užitečných . Velkou zajímavostí figmy je, že je postavena na C++, později kompilována do web assembly a následně importována do webové formy. Toto řešení přináší velkou škálu funkcí a možností týmové spolupráce na jednotném designu',
	firebase:
		'Firebase je platforma vyvinutá společností Google pro vytváření mobilních a webových aplikací. Firebase nabízí řešení pro hosting, cloud computing i machine learning. Toto hostingové řešení je vhodné pro malé i velké aplikace.',
	github:
		'Github nabízí bezplatný web hosting pro jakékoliv projekty a podporuje vývoj softwaru za pomocí verzovacího nástroje git. Projekty se ukládájí do jednotlivých, soukromých i veřejných, repozitářů. Pro uživatele poskytuje možnosti revize kódu, diskuze nad kódem či kooperace v organizaci',
	graphql:
		'GraphQL je verze dotazovacího jazyka pro tvorbu API. Narozdíl od REST architektury je potřeba specifikovat konkrétní data, která chceme ze serverové strany poslat na klientskou. Velkou výhodou graphql je prevence overfatche, protože při server requestu graphql přistupuje je jen k specifickým datům',
	inkscape: 'Inkscape je open-source editor vektorové grafiky. Tento editor lze použít na design loga, ilustraci, grafy, manipulování a úpravu, diagramy, svg a mnoho dalšího.',
	jquery:
		'jQuery je open-source javascriptová knihovna umožňující jednodušší interakci mezi JavaScriptem a HTML. jQuery se stal standardem pro mnoho javasciptových knihoven a jejich použití',
	jwt:
		'JSON Web Token je prostředník v komunikaci mezi dvěma stranami zabezpečující adresy URL. JWT pomáhá s vytvářením dat s volitelným podpisem a šifrováním. Tokeny jsou podepsány buď pomocí soukromého nebo veřejného klíče.',
	kubernetes:
		'Kubernetes je open-source systém pro orchestraci virtualizace a jednotlivých docker kontejnerů. Tento systém automatizuje deployment, škálovatelnost a management kontejnerových aplikací. Jednotlivé kontejnery tedy seskupuje do logických jednotek',
	linux:
		'Open-source počítačový operační systém od developerů pro developery, který disponuje distribucemi jak pro serverové tak i osobní využití s možností naprosté kontroly nad vašim OS. Díky open-source licenci a obrovské podpoře komunity je linux neustále upravován a zvětšuje podporu stále více programům',
	mongodb:
		'MongoDB je multiplatformní noSQL databáze, která narozdíl od tradičních relačních databází využívající tabulky ukládá data do formátu BSON. Dynamické databázové schéma umožňuje vytváření a integraci dat pro aplikace jednodušeji a rychleji.',
	nodejs:
		'Node.js je open-source asynchronní javascript runtime enviroment, který je postaven pro škálovatelné webové aplikace a webové servery. Node.js pomáhá developerům spouštět soubory javascriptu mimo webový prohlížeč, vytváření commmand line tools, a server-side scripting.',
	svg:
		'Scalable vektor graphics je značkovací jazyk, který popisuje dvojrozměrnou vektorovou grafiku pomocí XML. V prostoru web designu je to oblíbená volba pro zlepšení UI webu pomocí složitých i jednoduchých prvků. Pro vytváření SVG používáme figmu a inkscape.',
	vue:
		'Vue.js je progresivní javascriptový UI framework. Vue je populární řešení frontendu webové stránky jelikož rozšiřuje UI pomocí HTML atributů a dělá tak web design jednodušší. Vhodný je například pro jednoduché aplikace vyžadující backend server side podporu.',
	webpack:
		'Webpack je open-source zdrojový modul javascriptu. Transformuje frontendová řešení HTML, CSS, obrázky. Svazuje všechny moduly do jednoho celku, který následně promítne na webovou stránku.',
};
console.log(outerElm[0].getBoundingClientRect().top);
console.log(img[10].getBoundingClientRect().width);
console.log(img[5].getBoundingClientRect().width);
console.log(img.x);

//asign values to js object
for (let i = 0; i < img.length; i++) {
	logos[i] = {
		id: i,
		x: 0,
		y: 0,
		imgLeft: img[i].getBoundingClientRect().left,
		outerElmLeft: outerElm[0].getBoundingClientRect().left,
	};
}
//asign values to js object for reversed movement imgs
for (let i = 0; i < imgReversed.length; i++) {
	logosReversed[i] = {
		id: i,
		x: 0,
		y: 0,
		imgLeft: imgReversed[i].getBoundingClientRect().left,
		outerElmLeft: outerElm[1].getBoundingClientRect().left,
	};
	imgReversed[i].style.transform = 'rotateZ(135deg)';
}
console.log(logos, logosReversed);

//get x and y where id = let i and then add values to it => diagonal movement
document.addEventListener('DOMContentLoaded', function (event) {
	//sleep function
	const sleep = (time) => {
		return new Promise((resolve) => setTimeout(resolve, time));
	};
	const presentationMovement = async () => {
		let indent = screen.width / 10;
		let indentReversed = screen.width / 10;
		while (true) {
			for (let i = 0; i < img.length; i++) {
				//move elems diagonaly up
				img[i].style.transform = `translateX(${logos[i].x + speed}px) translateY(${logos[i].y + speed}px) rotateZ(135deg)`;
				logos[i].x += speed;
				logos[i].y += speed;
				// collision detection and move down
				for (let o = 0; o < outerElm.length; o++) {
					// inkrement indent
					if (img[0].getBoundingClientRect().right - img[0].getBoundingClientRect().height >= outerElm[o].getBoundingClientRect().right) {
						indent += 5;
						console.log('last collision');
					}
					if (img[i].getBoundingClientRect().right - img[i].getBoundingClientRect().height >= outerElm[o].getBoundingClientRect().right) {
						img[i].style.transform = `translateX(-${outerElm[o].getBoundingClientRect().width - indent}px) translateY(-${
							outerElm[o].getBoundingClientRect().width - indent
						}px) rotateZ(135deg)`;

						logos[i].x -= outerElm[o].getBoundingClientRect().width - indent;
						logos[i].y -= outerElm[o].getBoundingClientRect().width - indent;
					}
				}
			}
			for (let i = 0; i < imgReversed.length; i++) {
				//move elems diagonaly down
				imgReversed[i].style.transform = `translateX(${logosReversed[i].x - speed}px) translateY(${logosReversed[i].y - speed}px) rotateZ(135deg)`;
				logosReversed[i].x -= speed;
				logosReversed[i].y -= speed;
				// collision detection and move down
				// inkrement indent
				if (imgReversed[0].getBoundingClientRect().left + imgReversed[0].getBoundingClientRect().height <= outerElm[1].getBoundingClientRect().left) {
					console.log('last reversed collision');
				}
				if (imgReversed[i].getBoundingClientRect().left + imgReversed[i].getBoundingClientRect().height <= outerElm[1].getBoundingClientRect().left) {
					imgReversed[i].style.transform = `translateX(-${outerElm[1].getBoundingClientRect().width - indentReversed}px) translateY(-${
						outerElm[1].getBoundingClientRect().width - indentReversed
					}px) rotateZ(135deg)`;

					logosReversed[i].x += outerElm[1].getBoundingClientRect().width - indentReversed;
					logosReversed[i].y += outerElm[1].getBoundingClientRect().width - indentReversed;
				}
			}
			await sleep(5);
		}
	};
	presentationMovement();
	const techDescChange = async () => {
		for (let i = 0; i < techDescTitleArray.length + 1; i++) {
			techDescImg.src = `<%= require('./../img/systems-logos-big/svg-${techDescTitleArray[i]}.png') %>`;
			techDescTitle.innerHTML = techDescTitleArray[i].charAt(0).toUpperCase() + techDescTitleArray[i].slice(1);
			techDescText.innerHTML = techDescTextContent[techDescTitleArray[i].toLowerCase()];
			console.log(techDescTitleArray[i], techDescTitleArray[i].charAt(0).toUpperCase() + techDescTitleArray[i].slice(1));
			if ((i = techDescTitleArray.length)) {
				i = 0;
			}
			await sleep(5000);
		}
	};
	techDescChange();
});
console.log('interrupted');

for (let i = 0; i < 5; i++) {
	console.log('kokot');
}
