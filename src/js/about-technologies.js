const regeneratorRuntime = require('regenerator-runtime');
const img = document.getElementsByClassName('technologies-img');
const imgReversed = document.getElementsByClassName('technologies-img-reversed');
const outerElm = document.getElementsByClassName('technologie-presentation-container');
const techDescImg = document.getElementById('technologie-desc-image');
const techDescTitle = document.getElementById('technologie-desc-title');
const techDescText = document.getElementById('technologie-desc-text');
var speed = 0.5;
var logos = new Array(),
	logosReversed = new Array();
const imgAws = require(`./../img/systems-logos-big-real-color/svg-AWS.png`),
	imgDocker = require(`./../img/systems-logos-big-real-color/svg-docker.png`),
	imgFigma = require(`./../img/systems-logos-big-real-color/svg-figma.png`),
	imgFirebase = require(`./../img/systems-logos-big-real-color/svg-firebase.png`),
	imgGithub = require(`./../img/systems-logos-big-real-color/svg-github.png`),
	imgGraphql = require(`./../img/systems-logos-big-real-color/svg-graphql.png`),
	imgInkscape = require(`./../img/systems-logos-big-real-color/svg-inkscape.png`),
	imgJquery = require(`./../img/systems-logos-big-real-color/svg-jquery.png`),
	imgJwt = require(`./../img/systems-logos-big-real-color/svg-jwt.png`),
	imgKubernetes = require(`./../img/systems-logos-big-real-color/svg-kubernetes.png`),
	imgLinux = require(`./../img/systems-logos-big-real-color/svg-linux.png`),
	imgMongodb = require(`./../img/systems-logos-big-real-color/svg-mongodb.png`),
	imgNodejs = require(`./../img/systems-logos-big-real-color/svg-nodejs.png`),
	imgSvg = require(`./../img/systems-logos-big-real-color/svg-svg.png`),
	imgVue = require(`./../img/systems-logos-big-real-color/svg-vue.png`),
	imgWebpack = require(`./../img/systems-logos-big-real-color/svg-webpack.png`);
const techDescTitleContent = {
	aws: 'AWS',
	docker: 'Docker',
	figma: 'Figma',
	firebase: 'Firebase',
	github: 'Github',
	graphql: 'GraphQL',
	inkscape: 'Inkscape',
	jquery: 'jQuery',
	jwt: 'JWT',
	kubernetes: 'Kubernetes',
	linux: 'Linux',
	mongodb: 'MongoDB',
	nodejs: 'Node.js',
	svg: 'SVG',
	vue: 'Vue.js',
	webpack: 'Webpack',
};
const techDescTextContent = {
	aws:
		'Nabízí spolehlivé a škálovatelné služby cloud computingu. Pro hostingová řešení je AWS adekvátní volbou pokud pro vaši aplikaci potřebujete velký a bezpečný prostor. Krom hostingových řešení AWS nabízí vše od analytických nástrojů, databází všeho druhu, blockchain až po machine learning.',
	docker:
		'Open-source software, který poskytuje jednotné rozhraní pro izolaci aplikací do jednotlivých kontejnerů. Samostatný kontejner pak obsahuje aplikace a jejich soubory, ale narozdíl od virtualizačních systémů používá odlehčené application images.',
	figma:
		'Bezplatný webový editor vektorové grafiky, s velkým obsahem funkcionality, open source pluginů a možností zaplacení dalších užitečných funkcí. Velkou zajímavostí figmy je, že je postavena na C++, později kompilována do web assembly a následně importována do webové formy. Toto řešení přináší velkou škálu funkcí a možností týmové spolupráce na komplexním designu.',
	firebase:
		'Platforma vyvinutá společností Google pro vytváření mobilních a webových aplikací. Firebase nabízí řešení pro hosting, cloud computing i machine learning. Toto hostingové řešení je vhodné pro malé i velké aplikace.',
	github:
		'Nabízí bezplatný web hosting pro jakékoliv projekty a podporuje vývoj softwaru za pomocí verzovacího nástroje git. Projekty se ukládájí do jednotlivých, soukromých i veřejných, repozitářů. Pro uživatele poskytuje možnosti revize kódu, diskuze nad kódem či kooperace v organizaci.',
	graphql:
		'Jedna z verzí dotazovacího jazyka pro tvorbu API. Narozdíl od REST architektury je potřeba specifikovat konkrétní data, která chceme ze serverové strany poslat na klientskou. Velkou výhodou graphql je prevence overfatche, protože při server requestu graphql přistupuje je jen k specifickým datům.',
	inkscape: 'Open-source editor vektorové grafiky. Tento editor lze použít na design loga, ilustraci, grafy, manipulování a úpravu, diagramy, svg a mnoho dalšího.',
	jquery:
		'Open-source javascriptová knihovna umožňující jednodušší interakci mezi JavaScriptem a HTML. jQuery se stal standardem pro mnoho javasciptových knihoven a jejich použití.',
	jwt:
		'Prostředník v komunikaci mezi dvěma stranami zabezpečující adresy URL. JWT pomáhá s vytvářením dat s volitelným podpisem a šifrováním. Tokeny jsou podepsány buď pomocí soukromého nebo veřejného klíče.',
	kubernetes:
		'Open-source systém pro orchestraci virtualizace a jednotlivých docker kontejnerů. Tento systém automatizuje deployment, škálovatelnost a management kontejnerových aplikací. Jednotlivé kontejnery tedy seskupuje do logických jednotek.',
	linux:
		'Open-source počítačový operační systém od developerů pro developery, který disponuje distribucemi jak pro serverové tak i osobní využití s možností naprosté kontroly nad vašim OS. Díky open-source licenci a obrovské podpoře komunity je linux neustále upravován a zvětšuje podporu stále více programům.',
	mongodb:
		'Multiplatformní noSQL databáze, která narozdíl od tradičních relačních databází využívající tabulky ukládá data do formátu BSON. Dynamické databázové schéma umožňuje vytváření a integraci dat pro aplikace jednodušeji a rychleji.',
	nodejs:
		'Open-source asynchronní javascript runtime enviroment, který je postaven pro škálovatelné webové aplikace a webové servery. Node.js pomáhá developerům spouštět soubory javascriptu mimo webový prohlížeč, vytváření commmand line tools, a server-side scripting.',
	svg:
		'Značkovací jazyk, který popisuje dvojrozměrnou vektorovou grafiku pomocí XML. V prostoru web designu je to oblíbená volba pro zlepšení UI webu pomocí složitých i jednoduchých prvků. Pro vytváření SVG používáme figmu a inkscape.',
	vue:
		'Progresivní javascriptový UI framework. Vue je populární řešení frontendu webové stránky jelikož rozšiřuje UI pomocí HTML atributů a dělá tak web design jednodušší. Vhodný je například pro jednoduché aplikace vyžadující backend server side podporu.',
	webpack:
		'Open-source zdrojový modul javascriptu. Transformuje frontendová řešení HTML, CSS, obrázky. Svazuje všechny moduly do jednoho celku, který následně promítne na webovou stránku.',
};

//asign values to js object
for (let i = 0; i < img.length; i++) {
	logos[i] = {
		id: i,
		x: 0,
		y: 0,
		imgLeft: img[i].getBoundingClientRect().left,
		outerElmLeft: outerElm[0].getBoundingClientRect().left,
	};
	img[i].style.zIndex = '100000000';
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
	imgReversed[i].style.zIndex = '100000000';
}
console.log(logos, logosReversed);

//get x and y where id = let i and then add values to it => diagonal movement
document.addEventListener('DOMContentLoaded', (event) => {
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
				img[i].style.transform = `translateX(${logos[i].x + speed}px) rotateZ(90deg)`;
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
						img[i].style.transform = `translateX(-${outerElm[o].getBoundingClientRect().width - indent}px) rotateZ(90deg)`;

						logos[i].x -= outerElm[o].getBoundingClientRect().width - indent;
						logos[i].y -= outerElm[o].getBoundingClientRect().width - indent;
					}
				}
			}
			for (let i = 0; i < imgReversed.length; i++) {
				//move elems diagonaly down
				imgReversed[i].style.transform = `translateX(${logosReversed[i].x - speed}px) rotateZ(90deg)`;
				logosReversed[i].x -= speed;
				logosReversed[i].y -= speed;
				// collision detection and move down
				// inkrement indent
				if (imgReversed[0].getBoundingClientRect().left + imgReversed[0].getBoundingClientRect().height <= outerElm[1].getBoundingClientRect().left) {
					console.log('last reversed collision');
				}
				if (imgReversed[i].getBoundingClientRect().left + imgReversed[i].getBoundingClientRect().height <= outerElm[1].getBoundingClientRect().left) {
					imgReversed[i].style.transform = `translateX(-${outerElm[1].getBoundingClientRect().width - indentReversed}px) rotateZ(90deg)`;

					logosReversed[i].x += outerElm[1].getBoundingClientRect().width - indentReversed;
					logosReversed[i].y += outerElm[1].getBoundingClientRect().width - indentReversed;
				}
			}
			await sleep(5);
		}
	};
	presentationMovement();
	/* 	const techDescChange = async () => {
		for (let i = 0; i < techDescTitleArray.length; i++) {
			let sleepTime;
			//techDescImg.src = `<%= require('./../img/systems-logos-big/svg-${techDescTitleArray[i]}.png') %>`;
			techDescTitle.innerHTML = techDescTitleArray[i].charAt(0).toUpperCase() + techDescTitleArray[i].slice(1);
			techDescText.innerHTML = techDescTextContent[techDescTitleArray[i].toLowerCase()];
			console.log(techDescTitleArray[i], techDescTextContent[techDescTitleArray[i].toLowerCase()].length, i);
			if (i >= techDescTitleArray.length - 1) {
				i = 0;
			}
			switch (true) {
				case techDescTextContent[techDescTitleArray[i].toLowerCase()].length >= 270:
					sleepTime = 25000;
					break;
				case techDescTextContent[techDescTitleArray[i].toLowerCase()].length >= 220:
					sleepTime = 20000;
					break;
				case techDescTextContent[techDescTitleArray[i].toLowerCase()].length < 220:
					sleepTime = 15000;
					break;
			}
			await sleep(sleepTime);
		}
	};
	techDescChange(); */
});

//mouseover for pointer kursor
Array.from(img).forEach((item) => {
	item.addEventListener('mouseover', (event) => {
		item.style.cursor = 'pointer';
	});
});

Array.from(imgReversed).forEach((item) => {
	item.addEventListener('mouseover', (event) => {
		item.style.cursor = 'pointer';
	});
});

//mouseout for default kursor
Array.from(img).forEach((item) => {
	item.addEventListener('mouseout', (event) => {
		item.style.cursor = 'auto';
	});
});

Array.from(imgReversed).forEach((item) => {
	item.addEventListener('mouseout', (event) => {
		item.style.cursor = 'auto';
	});
});

//click for selecting tech desc
Array.from(img).forEach((item) => {
	item.addEventListener('click', (event) => {
		item.style.cursor = 'pointer';
		let dataImg = item.getAttribute('data-img');
		switch (dataImg) {
			case 'aws':
				techDescImg.innerHTML = `<img src=${imgAws} alt="logo ${dataImg}"></img>`;
				break;
			case 'docker':
				techDescImg.innerHTML = `<img src=${imgDocker} alt="logo ${dataImg}"></img>`;
				break;
			case 'figma':
				techDescImg.innerHTML = `<img src=${imgFigma} alt="logo ${dataImg}"></img>`;
				break;
			case 'firebase':
				techDescImg.innerHTML = `<img src=${imgFirebase} alt="logo ${dataImg}"></img>`;
				break;
			case 'github':
				techDescImg.innerHTML = `<img src=${imgGithub} alt="logo ${dataImg}"></img>`;
				break;
			case 'graphql':
				techDescImg.innerHTML = `<img src=${imgGraphql} alt="logo ${dataImg}"></img>`;
				break;
			case 'inkscape':
				techDescImg.innerHTML = `<img src=${imgInkscape} alt="logo ${dataImg}"></img>`;
				break;
			case 'jquery':
				techDescImg.innerHTML = `<img src=${imgJquery} alt="logo ${dataImg}"></img>`;
				break;
			case 'jwt':
				techDescImg.innerHTML = `<img src=${imgJwt} alt="logo ${dataImg}"></img>`;
				break;
			case 'kubernetes':
				techDescImg.innerHTML = `<img src=${imgKubernetes} alt="logo ${dataImg}"></img>`;
				break;
			case 'linux':
				techDescImg.innerHTML = `<img src=${imgLinux} alt="logo ${dataImg}"></img>`;
				break;
			case 'mongodb':
				techDescImg.innerHTML = `<img src=${imgMongodb} alt="logo ${dataImg}"></img>`;
				break;
			case 'nodejs':
				techDescImg.innerHTML = `<img src=${imgNodejs} alt="logo ${dataImg}"></img>`;
				break;
			case 'svg':
				techDescImg.innerHTML = `<img src=${imgSvg} alt="logo ${dataImg}"></img>`;
				break;
			case 'vue':
				techDescImg.innerHTML = `<img src=${imgVue} alt="logo ${dataImg}"></img>`;
				break;
			case 'webpack':
				techDescImg.innerHTML = `<img src=${imgWebpack} alt="logo ${dataImg}"></img>`;
				break;
		}
		techDescTitle.innerHTML = techDescTitleContent[dataImg];
		techDescText.innerHTML = techDescTextContent[dataImg];
		techDescImg.src = `<%= require('./../img/systems-logos-big/svg-${dataImg}.png') %>`;
		console.log('clicked ' + item.getAttribute('data-img'));
	});
});

Array.from(imgReversed).forEach((item) => {
	item.addEventListener('click', (event) => {
		item.style.cursor = 'pointer';
		let dataImg = item.getAttribute('data-img');
		switch (dataImg) {
			case 'aws':
				techDescImg.innerHTML = `<img src=${imgAws} alt="logo ${dataImg}"></img>`;
				break;
			case 'docker':
				techDescImg.innerHTML = `<img src=${imgDocker} alt="logo ${dataImg}"></img>`;
				break;
			case 'figma':
				techDescImg.innerHTML = `<img src=${imgFigma} alt="logo ${dataImg}"></img>`;
				break;
			case 'firebase':
				techDescImg.innerHTML = `<img src=${imgFirebase} alt="logo ${dataImg}"></img>`;
				break;
			case 'github':
				techDescImg.innerHTML = `<img src=${imgGithub} alt="logo ${dataImg}"></img>`;
				break;
			case 'graphql':
				techDescImg.innerHTML = `<img src=${imgGraphql} alt="logo ${dataImg}"></img>`;
				break;
			case 'inkscape':
				techDescImg.innerHTML = `<img src=${imgInkscape} alt="logo ${dataImg}"></img>`;
				break;
			case 'jquery':
				techDescImg.innerHTML = `<img src=${imgJquery} alt="logo ${dataImg}"></img>`;
				break;
			case 'jwt':
				techDescImg.innerHTML = `<img src=${imgJwt} alt="logo ${dataImg}"></img>`;
				break;
			case 'kubernetes':
				techDescImg.innerHTML = `<img src=${imgKubernetes} alt="logo ${dataImg}"></img>`;
				break;
			case 'linux':
				techDescImg.innerHTML = `<img src=${imgLinux} alt="logo ${dataImg}"></img>`;
				break;
			case 'mongodb':
				techDescImg.innerHTML = `<img src=${imgMongodb} alt="logo ${dataImg}"></img>`;
				break;
			case 'nodejs':
				techDescImg.innerHTML = `<img src=${imgNodejs} alt="logo ${dataImg}"></img>`;
				break;
			case 'svg':
				techDescImg.innerHTML = `<img src=${imgSvg} alt="logo ${dataImg}"></img>`;
				break;
			case 'vue':
				techDescImg.innerHTML = `<img src=${imgVue} alt="logo ${dataImg}"></img>`;
				break;
			case 'webpack':
				techDescImg.innerHTML = `<img src=${imgWebpack} alt="logo ${dataImg}"></img>`;
				break;
		}
		techDescTitle.innerHTML = techDescTitleContent[dataImg];
		techDescText.innerHTML = techDescTextContent[dataImg];
		techDescImg.src = `<%= require('./img/systems-logos-big/svg-linux.png') %>`;
		console.log('clicked ' + item.getAttribute('data-img'));
	});
});
