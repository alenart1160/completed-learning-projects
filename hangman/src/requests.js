const getPuzzle = async (wordCount) => {
	const response = await fetch(
		`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`
	)

	if (response.status === 200) {
		const data = await response.json()
		return data.puzzle
	} else {
		throw new Error('Unable to get puzzle')
	}
}
export { getPuzzle as default }

// const getCountryOLD = (countryCode) => {
// 	return fetch('https://restcountries.com/v3.1/all')
// 		.then((response) => {
// 			if (response.status === 200) {
// 				return response.json()
// 			}
// 		})
// 		.then((data) => {
// 			data = data.find((country) => country.cca2 === countryCode)
// 			if (data) {
// 				return data
// 			} else {
// 				throw new Error('nie dziala')
// 			}
// 		})
// }
// const getCountry = async (countryCode) => {
// 	const response = await fetch('https://restcountries.com/v3.1/all')
// 	if (response.status === 200) {
// 		let data = await response.json()
// 		data = data.find((country) => country.cca2 === countryCode)
// 		if (data) {
// 			return data
// 		} else {
// 			throw new Error('nie dziala')
// 		}
// 	}
// }

// const getLocation = async () => {
// 	const response = await fetch('https://ipinfo.io/json?token=b4bec459daedf5')
// 	if (response.status === 200) {
// 		const data = await response.json()
// 		if (data) {
// 			return data
// 		} else {
// 			throw new Error(`Can't find region`)
// 		}
// 	} else {
// 		throw new Error(`Can't connect to server`)
// 	}
// }
// const getCurrentCountry = async () => {
// 	const responseLocation = await getLocation()
// 	return getCountry(responseLocation.country)
// }

// new Promise((resolve, reject) => {
// 	const countryRequest = new XMLHttpRequest()

// 	countryRequest.addEventListener('readystatechange', (e) => {
// 		if (e.target.readyState === 4 && e.target.status === 200) {
// 			const data = JSON.parse(e.target.responseText)
// 			const country = data.find((country) => country.cca3 === countryCode)
// 			if (country) {
// 				resolve(country.name.common)
// 			} else {
// 				reject(`error message`)
// 			}
// 		}
// 	})

// 	countryRequest.open('GET', 'https://restcountries.com/v3.1/all')
// 	countryRequest.send()
// })
