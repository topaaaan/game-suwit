function getPilihanComputer() {
	// membangkitkan bilangan random
	const com = Math.random();

	if ( com < 0.34 ) return 'gajah';
	if ( com >= 0.34 && com < 0.67 ) return 'orang';
	return 'semut'; 
}

function getHasil(com, p) {
	// menentukan rules

	if (p == com) return 'SERI!';
	if (p == 'gajah') return (com == 'orang') ? 'MENANG!' : 'KALAH!';
	if (p == 'orang') return (com == 'semut') ? 'MENANG!' : 'KALAH!';
	if (p == 'semut') return (com == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function putar() {
	const imgComputer = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'semut', 'orang'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function() {
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if ( i == gambar.length ) i = 0;
	}, 100)
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pGajah.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pOrang.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilihanComputer = getPilihanComputer();
// 	const pilihanPlayer = pSemut.className;
// 	const hasil = getHasil(pilihanComputer, pilihanPlayer);
// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
	pil.addEventListener('click', function() {
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);
		
		putar();

		setTimeout(function() {
		const imgComputer = document.querySelector('.img-komputer');
		imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');
		const info = document.querySelector('.info');
		info.innerHTML = hasil;
		}, 1000);
	})
});	  