const form = document.getElementById("form")

const input = document.getElementById("inputf");


form.addEventListener("submit", (e) => {
    e.preventDefault()
    GetWeatherData()
    form.reset()


})
const txtBox = document.getElementById("txt-box")
const textfild1 = document.getElementById("txtF1")
const textfild2 = document.getElementById("txtF2")
const textfild3 = document.getElementById("txtF3")
const textfild4 = document.getElementById("txtF4")
const errors = document.getElementById("error")



const GetWeatherData = async () => {
    try {

        const url = 'http://localhost:3000/weather?address='

        const res = await fetch(url + input.value)
        const data = await res.json()
        console.log(data.err);

        if (data.err) {
            // console.log(data.err);

            textfild1.innerHTML = ""
            textfild2.innerHTML = ""
            textfild3.innerHTML = ""
            textfild4.innerHTML = ""
            errors.innerHTML = data.err
            errors.classList.remove("hidden")

            txtBox.classList.add("hidden")


        } else {
            textfild1.innerHTML = data.location
            textfild2.innerHTML = data.forecast.latitude
            textfild3.innerHTML = data.forecast.longitude
            textfild4.innerHTML = data.forecast.temp
            errors.innerHTML = ""
            errors.classList.add("hidden")

            txtBox.classList.remove("hidden")


        }
    }
    catch (err) {
        console.log(err);


    }

}



